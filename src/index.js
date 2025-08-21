import './styles.css';
import home from './modules/home.js';
import menu from './modules/menu.js';
import about from './modules/about.js';

const nav = document.querySelector('nav');
const content = document.getElementById('content');

nav.addEventListener('click', (e) => {
    if(e.target.textContent === 'Home') {
        content.innerHTML = '';
        content.appendChild(home());
    }
    if(e.target.textContent === 'Menu') {
        content.innerHTML = '';
        content.appendChild(menu());
    }
    if(e.target.textContent === 'About') {
        content.innerHTML = '';
        content.appendChild(about());
    }
});

content.innerHTML = '';
content.appendChild(home());



