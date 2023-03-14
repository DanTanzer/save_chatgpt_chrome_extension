## ChatGPT Chrome Extension: Save ChatGPT Conversation to file

This is a simple Chrome extension written with me and my pair programming buddy ChatGPT. It allows you to quickly save a chat to file, making this extension a useful tool for sharing your experience offline with friends or colleagues.

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

This extension was created as a collaboration between myself and ChatGPT, an AI language model developed by OpenAI. The process of programming the extension with ChatGPT was both challenging and rewarding, and I learned a lot about working with AI language models. I know a lot of people are talking negatively about chatGPT and for those folks I would not recommend reading this because I loved it. And for those of you who simply want to deep-dive and see the actual chat session with ChatGPT [click here](https://htmlpreview.github.io/?https://github.com/DanTanzer/save_chatgpt_chrome_extension/blob/main/theChat.html).

As a developer, I was skeptical of using ChatGPT, would this AI model be capable of taking my job or enhance it. I wanted to see how it would work in practice, so I dove right in and got to it. I decided to use ChatGPT to program a Chrome extension, code can be seen [here](https://github.com/DanTanzer/save_chatgpt_chrome_extension).
Which meant, it would need to understand my natural language requests, Chrome Extension APIs and 3 languages, JavaScript, HTML and CSS. The idea was to create a simple extension that would save a conversation in HTML format, so I can share it with my friends and colleagues offline. As part of the experiment, I tried to make as few changes to the code as possible and asked for assistance for debugging whenever needed.

During the chat session, I explained my requirements to ChatGPT and asked for its assistance to debugging. It provided me a working sample and helped me debug the code by identifying errors and suggesting solutions. I was able to iterate on the code and improve it until I had a working solution. It was amazing to see this tool in action, and since then, I have been hooked. 

What I liked: 

I am truly impressed by the ChatGPT's capabilities, I used simple language to explain what I wanted to do and it wrote the code in JavaScript, HTML & CSS. I iterated through my features and kept asking it to adjust new features and it worked. I have had many chats since this one and use it constantly to answer small things to expedite what I am working on. I found looking up small concise questions worked best for my needs, which is similar to the way I had worked Google, except now I am getting extremely tailored answers to my questions instead of scrolling looking for the best match. Overall, I find small concise questions work best for me. 

> How do I pass S3 variables to an ECS Task from an EventBridge? 
> 
> Create a sample JSON object from this AWS Event Schema?

What I didn't like:

ChatGPT would completely rewrite everything from small changes requests that didn't seem necessary, I was simply asking for a small tweak and it would restructured the code. Sometimes it would flip flop code between different versions of the Chrome Manifest v2 and v3 but was super polite when I pointed it out. One chat, I tried summarizing everything in a new chat listing each feature explaining everything, what I noticed was it was far harder to have it finish what we started. 

Recommendations:   
  
From my experiences for programming tasks, start small and be very iterative. 

In the end, I was able to create a Chrome extension that does exactly what I set out to do with the help of AI and that is Amazing! 

## License

This project is licensed under the terms of the MIT license. See the `LICENSE` file for more information.