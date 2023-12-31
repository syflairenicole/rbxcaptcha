# rbxcaptcha
rbxcaptcha is an open-sourced **restful** web api and module used to generate text-verification captchas and import them into Roblox

- Planning to add non-web version

Javascript version is only available right now.
Follow the steps if you want to setup your own rbxcaptcha. 
By the way, you can use my api if you can't create your own (as shown below): https://rbxcaptcha-web.glitch.me/getcaptcha?size=8&noise=1

Parameters not required.

![](https://komarev.com/ghpvc/?username=rbxcaptcha&label=Repo+Views)

Updated: 10/20/2023 EST<br>Credits: [@syflairenicole](https://github.com/syflairenicole)</br>

## Step 1 - Choose a website to deploy your web app (Glitch, Replit)
You can either use a paid web service or the following free ones: Glitch, Replit <br> For this tutorial, I will be using **Glitch**. </br>
  
> 1) Sign up and create a new project

Navigate to https://glitch.com in your browser:<br><img src="https://github.com/syflairenicole/rbxcaptcha/assets/105584041/e46fec81-6729-4f5b-9d7f-cff876fd5de9" width=80% height=80%></br>

To sign up, click <bold>'Sign Up'</bold> bottom at the top of the screen, or log in if you already have an account registered

Now that you've got that sorted out, you wanna go ahead and create a new project. <br>Find the **'New Project'** button at the top of the screen:</br><br>![image](https://github.com/syflairenicole/rbxcaptcha/assets/105584041/ce527b3a-23c3-427c-9d5c-4e2e6d67602c)</br>

You will get this prompt:<br><img src="https://github.com/syflairenicole/rbxcaptcha/assets/105584041/a1916842-0886-48bd-a626-343fd1d88d59" width=25% height=25%></br>

Ignore all these except for <bold>'Import from GitHub'</bold>.<br>Click that button and input this git repository into the text box followed by `.git`: </br><br>![image](https://github.com/syflairenicole/rbxcaptcha/assets/105584041/a3586af0-0c34-4302-a44a-47c100a049e6)</br>

## Step 2 - Setup your project
> Your project should look like this

<img src="https://github.com/syflairenicole/rbxcaptcha/assets/105584041/6cd9841c-2602-4929-8937-1287d32de005" width=80% height=80%>

- Edit `javascript-version/server.js` and blacklist custom ips
- Change project name (this is important for http requests on Roblox)
- Now you're all set! You can create http requests to this api from Roblox.

> Testing the app
- Head over to Preview > Open preview pane
- You should see this response by default (wait for load):
  - Http request with `https://project-name.glitch.me/getcaptcha?size=customSize`
  - DISCLAIMER: Requests limit/hour = 4000 
<br><img src="https://github.com/syflairenicole/rbxcaptcha/assets/105584041/9c2b0d8b-be8f-482d-974a-ddc24461c8a6" width=50% height=50%></br>

(Check logs tab if you have any issues, and post it in this repo.)

## Step 3 - rbxcaptcha-web module (from Roblox)
Obtain the module here: [link](www.example.com)

- General Usage Example:
