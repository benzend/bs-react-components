import styled from "styled-components";
import { IButtonProps } from "./ActionButton";

export interface INormalButtonProps extends IButtonProps {}

export const NormalButton: React.FC<INormalButtonProps> = ({
  primary = false,
  size = "medium",
  backgroundColor = "#4248f544",
  label = "Button",
  shadow = false,
}) => {
  const getPadding = () => {
    if (size === "small") return "0.2rem 0.6rem";
    if (size === "medium") return "0.4rem 0.8rem";
    if (size === "large") return "0.7rem 1.2rem";
    else return "0.4rem 0.8rem";
  };

  const padding = getPadding();

  const StyledButton = styled.button`
    border: none;
    border-radius: 0.1rem;
    box-shadow: ${shadow ? "4px 4px 10px #0006" : "0 0 4px #0003"};
    font-size: 1.1rem;
    padding: ${padding};
    background: ${backgroundColor};
    transition: all 0.2s ease;
    transition-property: background-color, transform, box-shadow;
    &:hover {
      cursor: pointer;

    ${/* NEED TO FIX */ null}
      background-color: ${backgroundColor};
      transform: scale(1.07);
      ${shadow ? "box-shadow: 6px 10px 15px #0003" : null}
    }
    &:active {
    }
    &:focus {
      outline: 2px solid #0008;
    }
  `;

  return <StyledButton>{label}</StyledButton>;
};
