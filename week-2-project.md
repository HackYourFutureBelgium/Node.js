# Week 2 Project

This week's project is to complete the __DIY Wiki__.

Unlike previous projects, this one has no tests :dizzy_face:.  Your goal (finally) is to just make things!

In the starter repo you'll find two directories, a Frontend and a Backend.  You only need to write code for the backend.  The backend code you write will be responsible for updating and filtering the wiki pages, as well as sending the requested pages to the frontend.  The frontend code provided will allow you to read and edit pages stored in the server by calling the API:
* __wiki-client__: This is a minimal React application that acts a frontend for the server you will write.  It works, all you need to do is run it: `npm run start`!  (and maybe study it a little bit, why not?)
* __wiki-server__: We've provided a server file with all of the dependencies you'll need, a `hello world` route, and a live server.  The rest is up to you!

You will be expected to cleanly develop your project with one branch per route and complete the README with a report on what you struggled with, what you learned, and what skills you now need to work.   You will be assessed not only on your solutions to the function, but also on the quality of your code, the correctness of your branches, and the completeness of your learning notes in the README.


---

## Getting Started

* Fork or clone the [DIY Wiki](https://github.com/hackyourfuturebelgium/diy-wiki).  It's README will contain more instructions on what you need to do.
* Create an issue for this week's project in your class repo
    * ```YourName: node.js, week 2 project```
* Begin studying!


---

### File System & API's in Node



__Debugging JS Servers In VSC__

* [VSC Debugger (from the docs)](https://code.visualstudio.com/docs/editor/debugging)
* [Debugging Node apps (from the docs)](https://code.visualstudio.com/docs/nodejs/nodejs-debugging)
* [Express in VSC (video)](https://www.youtube.com/watch?v=2oFKNL7vYV8)
* [Express in VSC (another video)](https://www.youtube.com/watch?v=yFtU6_UaOtA)

__Node.js Tutorials__

These tutorials will introduce you to a bunch of new features in Node that you haven't seen in the Browser.  While you're following these tutorials, it's important to remember that at it's core Node.js is still JavaScript.  Everything you've learned so far (except for the DOM & `fetch` :) is still true!  The Event Loop, Classes, Closure, Arrays, Objects, Variables, `this.`, it's all still the same.


The tutorials below will introduce to what's new and what's special about Node.  But don't forget to take some time and solve a few of the JavaScript Exercises above to get used to working with plain, vanilla JS in the terminal.

* [Traversy: Node for Absolute Beginners](https://www.youtube.com/watch?v=U8XF6AFGqlc)
* [Traversy: Node.js Crash Course](https://www.youtube.com/watch?v=fBNz5xF-Kx4)
* [Mosh: Node.js in 1 Hour](https://www.youtube.com/watch?v=TlB_eWDSMt4)



__fs: Synchronous & Async__
* [__promises__: FunFunFunction](https://www.youtube.com/watch?v=2d7s3spWAzo&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84)
* [__async/await__: FunFunFunction](https://www.youtube.com/watch?v=568g8hxJJp4)
* [__fs__: TechSith video](https://www.youtube.com/watch?v=a6dRdtOy4Bg)
* [__fs__: Net Ninja video](https://www.youtube.com/watch?v=U57kU311-nE)
* [__fs, async vs. sync__: Eduonix](https://www.youtube.com/watch?v=vctMo1fDwV4)
* [__fs, async vs. sync__: Kharbanda](https://www.youtube.com/watch?v=dgdcXGxh93s)


__API's and Express__

Node.js is a JavaScript runtime environment capable of writing Web Servers and API's all by itself.  But it's a bit annoying.  Express is a great and easy to use framework to help you write API's and Web Servers by handling all of the boring stuff for you so you can focus on what your app does.

> [Postman](https://duckduckgo.com/?q=postman+tutorials&t=brave&iax=videos&ia=videos) - an app for testing your API's without using a browser.

> [JSON Server](https://github.com/typicode/json-server) - An NPM module that starts a RESTful API without you having to write a single line of code.  This can be helpful practice for getting the hang of API's and Postman without getting tripped up by bugs and errors in code you write.


* [FCC: Node.js & Express](https://www.youtube.com/watch?v=G8uL0lFFoN0)

__RESTful API's__


* [What is RESTful? (Traversy)](https://www.youtube.com/watch?v=Q-BpqyOT3a8)
* [What is RESTful?](https://www.youtube.com/watch?v=7YcW25PHnAA)
* [Traversy: Express Crash Course](https://www.youtube.com/watch?v=gnsO8-xJ8rs)
* [Mosh: Restful API's](https://www.youtube.com/watch?v=pKd0Rpw7O48)
* [Restful API with Node & Express](https://www.youtube.com/watch?v=7nulchT1Ruk)

<hr>
<hr>
<a href="https://hackyourfuture.be" target="_blank"><img
    src="https://user-images.githubusercontent.com/18554853/63941625-4c7c3d00-ca6c-11e9-9a76-8d5e3632fe70.jpg"
    width="100" height="100"></a>
