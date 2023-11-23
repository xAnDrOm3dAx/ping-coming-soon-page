# Frontend Mentor - Ping coming soon page solution

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty. The message for this error should say _"Whoops! It looks like you forgot to add your email"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Please provide a valid email address"_

### Screenshot

![screenshot](image.png)

### Links

- Solution URL: [Add solution URL here](https://github.com/xAnDrOm3dAx/ping-coming-soon-page)
- Live Site URL: [Add live site URL here](https://xandrom3dax.github.io/ping-coming-soon-page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla Javascript

### What I learned

I learned about using a regular expression to validate the basic format of an email address.
// Regular expression for basic email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailRegex.test(userEmail)) {
displayError("Please provide a valid email address");
} else {
clearError();
}

Here, the test method of the regular expression is used to check if the provided userEmail matches the pattern defined by emailRegex. If the email does not match the pattern, the ! operator negates the result (true becomes false and vice versa), and the code inside the if block is executed, displaying an error message. If the email matches the pattern, the else block is executed, clearing any previous error messages.

In summary, this code is validating whether the provided userEmail follows a basic email address format using a regular expression. If it doesn't, an error message is displayed; otherwise, any existing error messages are cleared.

## Author

- Website - [Christopher Werkmeister](https://github.com/xAnDrOm3dAx)
- Frontend Mentor - [@xAnDrOm3dAx](https://www.frontendmentor.io/profile/xAnDrOm3dAx)
