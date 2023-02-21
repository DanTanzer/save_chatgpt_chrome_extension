document.getElementById('saveButton').addEventListener('click', async () => {
    chrome.tabs.query({ active: true, currentWindow:true }, (tabs) => {
      chrome.runtime.sendMessage( { action: 'saveConversation' });
    });
  });