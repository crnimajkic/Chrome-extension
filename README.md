## Chrome-extension

# This is my repository for Chrome Extension that I Made.There so many ways you can change it, and it use it for your liking.

- You can change websites you want to use it on by implementig URL of wanted site in "content-scripts" object argument of the manifest.json, shown in the next picture.
- Astrics that  you can see at (https://*.google.com/*) are used so you can implement the extension on other pages served on that server.

![Capture](https://user-images.githubusercontent.com/105221872/207629195-a03e70ce-e3ea-4335-94fe-c0f9fbf18697.PNG)

-Also, you have to make changes to resources argument of the "web_accessible_resources" object in manifest.json if you want to use your resources.

-At main.js you can see only one inplementation that i made to change the picture of the browser above search bar. I used chrome.runtime.getUrl() method so the environmet i run my code (browser) can go and take path to the my file and store it in logo.src variable.

![Capture1](https://user-images.githubusercontent.com/105221872/207631150-7f05a770-64d3-47e1-8a2e-0a2acebae8e0.PNG)


- CSS you can make to your likeing, making diferent layauts and beatufiull collors.

To use this extenison, clone it to your computer, and then go to your chrome, at top right corner you have extensions icon, click on it and then on "Menage extensions"


![Capture3](https://user-images.githubusercontent.com/105221872/207633761-5b3e3bae-5592-4ea5-9c17-59cc3fcd26d6.PNG)

after it loades, turn on developer mode.

![Capture4](https://user-images.githubusercontent.com/105221872/207634117-eddd6475-91aa-4cee-9c88-33ff83e1fe8e.PNG)
 
 Then you only have to click on "Load unpacked button" and to chose folder you cloned it to.
 
 Then turn on extension and go to "google.com"
 
 You can se changes!
 
 ## Recreate, design and Enjoy!
