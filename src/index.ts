type Props = {
  color: string;
  name: string;
};

type Component = ({
  color,
  name,
}: Props) => string

const createSidebar: Component = ({ color, name }) => {
  return `I am a ${color} ${name}!`;
}

const createHeader: Component = ({ color, name }) => {
  return `I am a ${color} ${name}!`;
}

const createFooter: Component = ({ color, name }) => {
  return `I am a ${color} ${name}!`;
}

const sidebar = createSidebar({ color: 'green', name: 'sidebar' });
const header = createHeader({ color: 'red', name: 'header' });
const footer = createFooter({ color: 'yellow', name: 'footer' });

console.log(sidebar);
console.log(header);
console.log(footer);