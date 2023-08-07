# Frontend Mentor - Rock, Paper, Scissors solution

This is a solution to the [Rock, Paper, Scissors challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview



### The challenge

Users should be able to:

- View the optimal layout for the game depending on their device's screen size
- Play Rock, Paper, Scissors against the computer
- Maintain the state of the score after refreshing the browser
- Play Rock, Paper, Scissors, Lizard, Spock against the computer

### Screenshot

![](./Preview%20Rock%20Paper%20Scissors%20Lizard%20Spoke.png)  
![](./Preview%20Mobile%20Rock%20Paper%20Scissors%20Lizard%20Spoke.png)

### Links

- Solution URL: [Source code](https://github.com/potyoma/rock-paper-scissors)
- Live Site URL: [Demo](https://rock-paper-scissors-jade-zeta.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- TypeScript
- [Vite](https://vitejs.dev/) - Bundler
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

### Technical solution

The project was made from ground up with no usage of UI libraries and components. This approach required a number of custom solutions.

1. Modal window.
   For simplicity of handling closing events was created a custom React hook. The purpose of it is to listen to all mouse and keyboard (`Esc` key) happened 'outside of the component' and call the given function. The hook is reusable and pretty simple to use. Check out `src/hooks/useClickOutside.ts`
3. Disappear animations
   It's required for a component to slowly fade before disappearing from screen. For this specific purpose were created `useFade` hook and `withFadeShow` HOC. The work they do is to apply 'fade and disappear' effect to a given component. The hook sets animation start and timeout fot when the component shold disappear from screen.  
4. Save data
   The project requires user data to be saved. This means that after a page reload, the player must be able to see his previous score and kepp it. One of the possible solution fot it is to save the data to a `sessionStorage`. This way the score is saved between page reloads, but reset after the page was completely closed. `usePageUnload` hook listens for page nload event and saves data when the page is being reloaded. 
5. Handle state
   For simplicity of working with Game state I chose using React's context API. This way the data is being stored in one simple way and all components get it in a unified way. Also this approach allowed usage of `Compound components` pattern. The idea is simple. There's only one `Game` components which holds the data and defines functions for state update. Every Game state (Draw -> Computer's turn -> Result) is considered just a child of the main component and exist on the same level. The components simply get data from context API.
   

### What I learned

- CSS Variables
- Styled Components

### Continued development

- Turn the project into PWA for offline support

## Author

- Github - [Artem Novoselov](https://github.com/potyoma)
- Frontend Mentor - [@potyoma](https://www.frontendmentor.io/profile/potyoma)
- LinkedIn - [potyoma](https://linkedin.com/in/potyoma)
