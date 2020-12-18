const app = document.getElementById('app')!;

type Component<Props = {}> = (props: Props & { children: string } ) => string

const App: Component = ({ children }) => {
  return `
    <div>
      ${children}
    </div>
  `;
}

const Sidebar: Component<{ 
  title: string;
}> = ({ children, title }) => {
  return `
    <section>
      <h2>${title}</h2>
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
    ${Sidebar({ children: 'sidebar', title: 'Hellow World!' })}
    ${Header({ children: 'header' })}
    ${Footer({ children: 'footer' })}
  ` })}
`;