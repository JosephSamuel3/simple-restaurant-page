export default function createAbout() {
    const about = document.createElement('section');
    about.classList.add('about-section');
    about.innerHTML = `
        <h2>About Us</h2>
        <p class="about-desc">
            Welcome to Brew & Bite! We’re passionate about serving the freshest coffee and the sweetest treats in a cozy, inviting atmosphere. Whether you’re here for your morning pick-me-up or an afternoon dessert, our team is dedicated to making your visit special.
        </p>
        <div class="contact-info">
            <h3>Contact</h3>
            <ul>
                <li><strong>Address:</strong> 123 Coffee Lane, Brewtown, USA</li>
                <li><strong>Phone:</strong> (555) 123-4567</li>
                <li><strong>Email:</strong> hello@brewandbite.com</li>
            </ul>
        </div>
    `;
    return about;
}