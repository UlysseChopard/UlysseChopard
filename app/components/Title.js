export default function Title({ level = 2, children }) {
  const Header = `h${level}`;
  let className = "";
  switch (level) {
    case 2:
      className = "uppercase font-semibold text-lg text-secondary";
      break;
  }
  return <Header className={className}>{children}</Header>;
}
