import styled from "styled-components";

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
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
  backgroundColor,
  label,
  onClick,
  ...props
}) => {
  if (!backgroundColor) {
    backgroundColor = "#0002";
  }
  const StyledContainer = styled.div`
    line-height: 50px;
    height: 50px;
    text-align: center;
    width: 250px;
    cursor: pointer;
    color: #333;
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
