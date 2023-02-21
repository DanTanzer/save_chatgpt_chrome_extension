
async function getCurrentTab() {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

chrome.runtime.onInstalled.addListener(async () => {
  console.log(await getCurrentTab());
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'saveConversation') {
      chrome.tabs.query({ active: true, currentWindow: true }, async (tabs) => {
        try {
          const [html, styles, docTitle] = await Promise.all([
            chrome.scripting.executeScript({
              target: { tabId: tabs[0].id },
              func: () => document.body.innerHTML
            }),

            chrome.scripting.executeScript({
              target: { tabId: tabs[0].id },
              func: () => {
                let styles = '';
                for (const styleSheet of document.styleSheets) {
                  styles += styleSheet.ownerNode.outerHTML;
                }
                return styles;
              }
            }),
            chrome.scripting.executeScript({
              target: { tabId: tabs[0].id },
              func: () => {
                return document.title;
              }
            }),
          ]);

          // convert css links to absolute path instead of relative and download the cssText
          let links = styles[0].result;
          let cssText='';
          const regex = /<link rel="stylesheet" href="(.+?)" /;
          if (regex.test(links)) {
            let href = links.match(regex)[1];
            if (href.startsWith('/') || href.startsWith('./') || href.startsWith('../')) {
              href = `https://chat.openai.com${href}`;
            }
            const response = await fetch(href);
            cssText = await response.text();           
          }

          // clean up the css - let it scroll and hide the form 
          let head = `<style>.overflow-hidden { overflow: scroll !important;} form:first-child { display: none; }</style><style>${cssText}</style>`
          
          // clean up the html - remove the nav
          let body = html[0].result.replace(/<nav[\s\S]*?<\/nav>/g, '');
          let title = docTitle[0].result.replace(/[^a-z0-9]/gi, '_').toLowerCase();

          const completeHtml = `<!DOCTYPE html><html><head>${head}</head><body>${body}</body></html>`;

          function saveToFile(content) {
            const formattedDate = new Date().toISOString().replace(/[-:.]/g, "")
            const filename = `${title}_${formattedDate}.html`;
            
            chrome.downloads.download({
              url: `data:text/html;charset=utf-8,${encodeURIComponent(content)}`,
              filename: filename,
              saveAs: true,
            });
          }

          saveToFile(completeHtml)

        } catch (err) {
          console.error(err);
          sendResponse(false);
        }
      });
  
      return true;
    }
  });