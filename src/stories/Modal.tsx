import styled from "styled-components";

export type TSize = string | number;

export interface IModalProps {
  backgroundColor?: string;

  open: boolean;

  height?: TSize;

  width?: TSize;

  marginTop?: TSize;

  borderRadius?: TSize;

  padding?: TSize;
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: #0001;
`;

export const Modal: React.FC<IModalProps> = ({
  children = <div>My Modal</div>,
  open = false,
  height = "800px",
  width = "800px",
  backgroundColor = "#0002",
  marginTop = "20%",
  borderRadius = "10px",
  padding = "20px",
}) => {
  const Content = styled.div`
    height: ${height};
    width: ${width};
    margin: auto;
    margin-top: ${marginTop};
    display: ${open ? "block" : "none"};
    background: ${backgroundColor};
    border-radius: ${borderRadius};
    padding: ${padding};
  `;

  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
};
