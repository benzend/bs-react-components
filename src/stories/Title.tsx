export interface ITypographyProps {
  element?: string;
  textShadow?: boolean;
  label?: string;
}

export interface ITitleProps extends ITypographyProps {}

export const Title: React.FC<ITitleProps> = ({
  children,
  element = "div",
  label,
  textShadow = false,
  ...props
}) => {
  const text = children || label;
  const textShadowProperties = textShadow
    ? { textShadow: "4px 4px 5px #0008" }
    : null;
  const style = {
    fontSize: "6rem",
    fontWeight: 300,
    margin: 0,
    padding: 0,
    ...textShadowProperties,
  };
  const ElementDefiner: React.FC = ({ children }) => {
    switch (element) {
      case "h1":
        return <h1 style={style}>{text}</h1>;
      case "h2":
        return <h2 style={style}>{text}</h2>;
      case "h3":
        return <h3 style={style}>{text}</h3>;
      case "h4":
        return <h4 style={style}>{text}</h4>;
      case "h5":
        return <h5 style={style}>{text}</h5>;
      case "h6":
        return <h6 style={style}>{text}</h6>;
      case "p":
        return <p style={style}>{text}</p>;
      case "div":
        return <div style={style}>{text}</div>;
      default:
        return <div style={style}>{text}</div>;
    }
  };

  return <ElementDefiner>{text}</ElementDefiner>;
};
