# Playground for some Node.js practice

https://www.codecademy.com/courses/learn-nodejs-fundamentals/articles/implementing-modules-in-node

## Implementing Modules in Node

Modules are reusable pieces of code in a file that can be exported and then imported for use in another file. 
A modular program is one whose components can be separated, used individually, and recombined to create a complex system.
<br><br>

## By isolating code into separate files, called modules, you can:
<ul>
<li>find, fix, and debug code more easily.</li>
<li>reuse and recycle defined logic in different parts of your application.</li>
<li>keep information private and protected from other modules.</li>
<li>prevent pollution of the global namespace and potential naming collisions, by cautiously selecting 
variables and behavior we load into a program.</li>
</ul>


## Implementing modules in your program requires a small bit of management. In the remainder of this article, we will be covering:
<ul>
<li>How to use the Node.js module.exports object to export code from a file - meaning its functions and/or data can be used by other 
files/modules.</li>
<li>How to use the Node.js require() function to import functions and/or data from another module.</li>
</ul>
