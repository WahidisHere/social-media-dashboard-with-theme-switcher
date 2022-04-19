'use strict';
// Selecting Element
const switchBtn = document.getElementById('dark-light-mode');
// const rootVariables = document.documentElement.style('--background--color');
// console.log(rootVariables);

// Event listener
switchBtn.addEventListener('click', () => {
  switchBtn.classList.toggle('active');
  if (switchBtn.classList.contains('active')) {
    document.documentElement.style.setProperty(
      '--background--color',
      'hsl(0, 0%, 100%)'
    );
    document.documentElement.style.setProperty(
      '--top-background--pattern',
      'hsl(225, 100%, 98%)'
    );
    document.documentElement.style.setProperty(
      '--card-background',
      'hsl(227, 47%, 96%)'
    );
    document.documentElement.style.setProperty(
      '--desaturated--blue--text',
      'hsl(228, 12%, 44%)'
    );
    document.documentElement.style.setProperty(
      '--white--color',
      'hsl(230, 17%, 14%)'
    );
  } else {
    document.documentElement.style.setProperty(
      '--background--color',
      'hsl(230, 17%, 14%)'
    );
    document.documentElement.style.setProperty(
      '--top-background--pattern',
      'hsl(232, 19%, 15%)'
    );
    document.documentElement.style.setProperty(
      '--card-background',
      'hsl(228, 28%, 20%)'
    );
    document.documentElement.style.setProperty(
      '--desaturated--blue--text',
      'hsl(228, 34%, 66%)'
    );
    document.documentElement.style.setProperty(
      '--white--color',
      'hsl(0, 0%, 100%)'
    );
  }
});
