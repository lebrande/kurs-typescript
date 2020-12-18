const app = document.getElementById('app')!;

type Props = {
  children: string;
};

type Component = (pros: Props) => string

const App: Component = ({ children }) => {
  return `
    <div>
      ${children}
    </div>
  `;
}

const Sidebar: Component = ({ children }) => {
  return `
    <section>
      ${children}
    </section>
  `;
}

const Header: Component = ({ children }) => {
  return `
    <header>
      ${children}
    </header>
  `;
}

const Footer: Component = ({ children }) => {
  return `
    <footer>
      ${children}
    </footer>
  `;
}

app.innerHTML = `
  ${App({ children: `
    ${Sidebar({ children: 'sidebar' })}
    ${Header({ children: 'header' })}
    ${Footer({ children: 'footer' })}
  ` })}
`;