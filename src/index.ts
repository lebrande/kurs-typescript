const app = document.getElementById('app')!;

type DefaultProps = { children: string };
type Component<T extends object = {}> = (
  props: T & DefaultProps
) => string;

const App: Component = ({ children }) => {
  return `
    <div>
      ${children}
    </div>
  `;
}

type SidebarProps = { 
  title: string;
};
const Sidebar: Component<SidebarProps> = ({ 
  children,
  title,
}) => {
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