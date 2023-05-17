import styled, { css } from "styled-components";

const Button = styled.button`
  padding: 0.3rem;
  background-color: #f3d9b1;
  border-radius: 5px;
  width: fit-content;

  ${(props) =>
    props.$red &&
    css`
      color: #f7e2de;
      background-color: #c33149;
    `}

  ${(props) =>
    props.$circle &&
    css`
      border-radius: 100%;
      width: 1.5rem;
      height: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
    `}
`;

export default Button;
