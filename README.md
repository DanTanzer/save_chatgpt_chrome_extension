## ChatGPT Chrome Extension: Save ChatGPT Conversation to file

This is a simple Chrome extension written with me and my pair programming buddy ChatGPT. It allows you to quickly save a chat to file, making this extension a useful tool for sharing your experience offline with friends or colleagues.

<img src="screenshots/chatgpt_ui.png" alt="UI" height="50%" width="50%">

## Installation

The current version of the extension is still a WIP, please use the developer mode to install:

To install the extension, follow these steps:

1.  Download the code from the GitHub repository.
2.  Open the Chrome browser and navigate to `chrome://extensions`.
3.  Enable Developer mode by clicking the toggle switch in the upper right corner.
4.  Click the "Load unpacked" button and select the directory where you downloaded the code.

## Usage

To use the extension, select a chat you wish do convert to html,  click the extension icon in the top right corner of your browser window. This will open the extension popup, where you can save the chat as html that you wish to share.

## Background

### _Programming with ChatGPT - Human still required!_

This extension was created as a collaboration between myself and ChatGPT, an AI language model developed by OpenAI. The process of programming the extension with ChatGPT was both challenging and rewarding, and I learned a lot about working with AI language models and how powerful this tool truly is. For those of you who want to dive in and see the actual chat session that created the extension [click here](https://htmlpreview.github.io/?https://github.com/DanTanzer/save_chatgpt_chrome_extension/blob/main/theChat.html).

As a developer, I was skeptical of using ChatGPT, would this AI model be capable of taking my job or enhance it. I wanted to see how it would work in practice, so I dove in and got to it. I decided to use ChatGPT to program a Chrome extension. Which meant, it would need to understand my natural language requests, Chrome Extension APIs and 3 languages, JavaScript, HTML and CSS. The idea was to create a simple extension that would save the conversation in HTML format, so I can share it with my friends and colleagues offline. As part of the experiment, I tried to make as few changes to the code as possible and asked for assistance for debugging whenever needed.

During the chat session, I explained my requirements to ChatGPT and asked for its assistance. It provided me a working sample and helped me debug the code when I  identified errors. I was able to iterate on the code and improve it until I had a working solution. It was amazing to see this tool in action, and since then, I have been hooked.

What I liked: 

I am truly impressed by the ChatGPTs capabilities, I used simple language to explain what I wanted to do and it wrote the code in JavaScript, HTML & CSS. I iterated through my features and asked it to pivot with new features request as we progressed. I have had many chats since this one and use it constantly to answer small things to expedited what I am working on. This process of looking up small programming tasks was similar to the way I had worked with Google except now I am getting extremely tailored answers to my question instead of scrolling to find something similar. I find small concise questions work brilliantly. I wouldn't consider the requests below to be simple but ChatGPT did not disappoint.

&gt; How do I pass S3 variables to an ECS Task from an EventBridge?   
&gt;  
&gt; Can you show me a sample JSON S3 Event for a file upload to S3?

 

What I didn't like:

ChatGPT would completely rewrite the structure of the code from small changes requests that didn't seem necessary, I was simply asking for a small tweak and it would restructured everything. Sometimes it would seem to refer to different versions of the Chrome Manifest v2 and v3 but was super polite when I pointed it out. In another chat, I tried summarizing everything into one request and I found it far harder to have it finish what we started. 

Recommendations: 

From my experiences for programming tasks, start small and be very iterative. 

In the end, I was able to create a Chrome extension that does exactly what I set out to do with the help of AI and that is Amazing! 

## License

This project is licensed under the terms of the MIT license. See the `LICENSE` file for more information.