const template = document.createElement("template");
template.innerHTML = `
<style>
  :host {
    display: block;
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.25rem 2rem;
    border-top: 1px solid var(--border);
  }

  .brand {
    font-family: 'Exo', sans-serif;
    font-weight: 800;
    font-size: 0.95rem;
    color: var(--cyan);
  }

  .links {
    display: flex;
    gap: 1.5rem;
  }

  .links a {
    text-decoration: none;
    color: var(--text-secondary);
    font-family: 'Genos', sans-serif;
    font-size: 0.9rem;
  }

  .links a:hover {
    color: var(--cyan);
  }

  @media (max-width: 480px) {
    footer {
      flex-direction: column;
      gap: 1rem;
      text-align: center;
      padding: 1.25rem;
    }

    .links {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
</style>

<footer>
  <span class="brand">ORBIT EATS</span>
  <div class="links">
    <a href="#">About</a>
    <a href="#">Privacy</a>
    <a href="#">Terms</a>
    <a href="#">Contact</a>
  </div>
</footer>
`;

export class OrbitFooter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot!.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("orbit-footer", OrbitFooter);
