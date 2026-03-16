# Frontend Mentor - Ping coming soon page - Solution

This is my solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [AI Collaboration](#ai-collaboration)
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

![](./screenshot.png)

### Links

- Solution URL: [Source Code](https://github.com/irfanoezen/ping-coming-soon-page)
- Live Site URL: [Preview](https://irfanoezen.github.io/ping-coming-soon-page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Font faces
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JavaScript

### What I learned

How to clear a form after submitting?

> [_MDN - reset property_](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reset)

```js
form.reset();
```

<hr>

How to clear input fields after page refresh?

```js
input.value = "";
```

<hr>

How to check if input field is empty or does not match the type (e.g email) or the pattern attribute?

> [_MDN - valueMissing property_](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState/valueMissing)

> [_MDN - typeMismatch property_](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState/typeMismatch)

> [_MDN - patternMismatch property_](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState/patternMismatch)

```js
input.validity.valueMissing || input.validity.typeMismatch || input.validity.patternMismatch;
```

### Continued development

I want to get more confident with Javascript as well as responsive design and behavior.

### Useful resources

- [_MDN - Client-side form validation_](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation) - This documentation helped me to understand how client-side form validation works.

- [_MDN - ValidityStates_](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState) - This documentation helped me to understand  why an element's value fails to validate, if it's not valid.

### AI Collaboration

I use GitHub Copilot with Claude for debugging, brainstorming, and more but just as a guided assistant.

## Author

- Frontend Mentor - [@irfanoezen](https://www.frontendmentor.io/profile/irfanoezen)
