import mainImage from '../assets/fahmi-fakhrudin-main-image-unsplash.jpg';
import menu from './menu.js';

export default function home() {
    const main = document.createElement('div');
    main.classList.add('main');
    main.innerHTML = `
        <div class="hero">
            <h1>Welcome to Coffee Haven</h1>
            <p>Freshly brewed coffee, just the way you like it.</p>
            <button class="cta-btn">Order Now</button>
        </div>
        <div class="hero-img">
            <img src="${mainImage}" alt="Coffee Haven Main Image">
        </div>`;
    
    main.querySelector('.cta-btn').addEventListener('click', () => {
        const content = document.getElementById('content');
        content.innerHTML = '';
        content.appendChild(menu());
    });

    return main;
}