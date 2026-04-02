const template = document.createElement("template");
template.innerHTML = `
<style>
  :host {
    display: block;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem 2rem;
    background: var(--bg-secondary);
    border-bottom: 1px solid var(--border);
    flex-wrap: wrap;
  }

  .logo {
    font-family: 'Exo', sans-serif;
    font-weight: 800;
    font-size: 1.1rem;
    text-decoration: none;
    color: var(--cyan);
  }

  .toggle {
    display: none;
    background: none;
    border: none;
    color: var(--text-primary);
    font-size: 1.5rem;
    cursor: pointer;
  }

  .links {
    display: flex;
    gap: 1.5rem;
  }

  .links a {
    text-decoration: none;
    color: var(--text-secondary);
    font-family: 'Genos', sans-serif;
    font-size: 1rem;
  }

  .links a:hover {
    color: var(--cyan);
  }

  .auth-btn {
    text-decoration: none;
    padding: 0.5rem 1.25rem;
    border: 1px solid var(--purple);
    border-radius: 4px;
    color: var(--purple);
    font-size: 0.95rem;
    font-family: 'Exo', sans-serif;
    font-weight: 600;
  }

  .auth-btn:hover {
    background: var(--purple);
    color: #fff;
  }

  @media (max-width: 768px) {
    nav {
      padding: 0.75rem 1.25rem;
    }

    .toggle {
      display: block;
    }

    .links,
    .auth-btn {
      display: none;
    }

    nav.open .links {
      display: flex;
      flex-direction: column;
      width: 100%;
      order: 3;
      gap: 0.75rem;
      padding-top: 0.75rem;
      border-top: 1px solid var(--border);
      margin-top: 0.75rem;
    }

    nav.open .auth-btn {
      display: inline-block;
      width: 100%;
      text-align: center;
      order: 4;
      margin-top: 0.5rem;
    }
  }
</style>

<nav>
  <a class="logo" href="">ORBIT EATS</a>
  <button class="toggle" aria-label="Toggle menu">&#9776;</button>
  <div class="links">
    <a class="link-restaurants" href="">Restaurants</a>
    <a class="link-review-order" href="">Review Order</a>
    <a class="link-checkout" href="">Checkout</a>
    <a class="link-game" href="">Game</a>
  </div>
  <a href="#" class="auth-btn">Sign Up / Log In</a>
</nav>
`;

export class OrbitNavbar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot!.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    const base = this.getAttribute("base") || "";
    const nav = this.shadowRoot!.querySelector("nav")!;
    const toggle = this.shadowRoot!.querySelector(".toggle")!;
    const logo = this.shadowRoot!.querySelector(".logo") as HTMLAnchorElement;
    const restaurantsLink = this.shadowRoot!.querySelector(".link-restaurants") as HTMLAnchorElement;
    const reviewOrderLink = this.shadowRoot!.querySelector(".link-review-order") as HTMLAnchorElement;
    const checkoutLink = this.shadowRoot!.querySelector(".link-checkout") as HTMLAnchorElement;
    const gameLink = this.shadowRoot!.querySelector(".link-game") as HTMLAnchorElement;

    logo.href = `${base}index.html`;
    restaurantsLink.href = `${base}pages/restaurants.html`;
    reviewOrderLink.href = `${base}pages/review-order.html`;
    checkoutLink.href = `${base}pages/checkout.html`;
    gameLink.href = `${base}pages/game.html`;

    toggle.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }
}

customElements.define("orbit-navbar", OrbitNavbar);
