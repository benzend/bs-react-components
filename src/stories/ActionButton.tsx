import styled from "styled-components";

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;

  shadow?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = "medium",
  backgroundColor = "#0002",
  label = "Button",
  shadow = false,
  onClick,
  ...props
}) => {
  const sm = {
    width: "8rem",
    height: "2.4rem",
  };
  const md = {
    width: "10rem",
    height: "3rem",
  };
  const lg = {
    width: "13rem",
    height: "4rem",
  };

  const getWidthAndHeight = () => {
    if (size === "small") return sm;
    if (size === "medium") return md;
    if (size === "large") return lg;
    else return md;
  };

  const sizeRes = getWidthAndHeight();

  const StyledContainer = styled.div`
    line-height: 50px;

    height: ${sizeRes.height};
    width: ${sizeRes.width};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: #333;
    ${shadow ? "box-shadow: 3px 3px 10px #0007;" : null}

    transition: all 0.3s;
    position: relative;
    span {
      transition: all 0.3s;
    }
    &:before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      opacity: 0;
      transition: all 0.3s;
      border-top-width: 1px;
      border-bottom-width: 1px;
      border-top-style: solid;
      border-bottom-style: solid;
      border-top-color: #666;
      border-bottom-color: #666;
      transform: scale(0.1, 1);
    }
    &:after {
      content: attr(data-content);
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      transition: all 0.3s;
      background-color: ${backgroundColor};
    }
    &:hover {
      box-shadow: none;
      &::after {
        opacity: 0;
        transform: scale(0.1, 1);
      }
      &::before {
        opacity: 1;
        transform: scale(1, 1);
      }
      span {
        letter-spacing: 2px;
      }
    }
  `;

  const mode = primary ? "button--primary" : "button--secondary";
  return (
    <StyledContainer>
      <span>{label.toUpperCase()}</span>
    </StyledContainer>
  );
};
