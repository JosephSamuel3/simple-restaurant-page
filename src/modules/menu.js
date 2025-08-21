import coffee from '../assets/harisankar-sahoo-coffee-cup-unsplash.jpg';
import donut from '../assets/annie-spratt-donut-unsplash.jpg';

export default function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');
    menu.innerHTML = `
    <section>
        <h2>Coffee</h2>
        <img src="${coffee}" alt="coffee icon"/>
        <article class="item">
            <p class="flavor">French Vanilla</p><p class="price">$3.00</p>
        </article>
        <article class="item">
            <p class="flavor">Caramel Macchiato</p><p class="price">$3.75</p>
        </article>
        <article class="item">
            <p class="flavor">Pumpkin Spice</p><p class="price">$3.50</p>
        </article>
        <article class="item">
            <p class="flavor">Hazelnut</p><p class="price">$4.00</p>
        </article>
        <article class="item">
            <p class="flavor">Mocha</p><p class="price">$4.50</p>
        </article>
    </section>

    <section>
      <h2>Desserts</h2>
      <img src="${donut}" alt="donut icon"/>
      <article class="item">
        <p class="dessert">Donut</p><p class="price">$1.50</p>
      </article>
      <article class="item">
        <p class="dessert">Cherry Pie</p><p class="price">$2.75</p>
      </article>
      <article class="item">
        <p class="dessert">Cheesecake</p><p class="price">$3.00</p>
      </article>
      <article class="item">
        <p class="dessert">Cinnamon Roll</p><p class="price">$2.50</p>
      </article>
    </section>
    `;
    return menu;
}