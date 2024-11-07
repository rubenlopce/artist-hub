// Button.styles.ts
import styled, { css } from 'styled-components';

// Tipos de props que el botón puede recibir
interface ButtonProps {
  secondary?: boolean;
  custom?: boolean;
  color?: string;
  border?: string;
}

// Estilo base del botón
const StyledButton = styled.button<ButtonProps>`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.3s ease;
  background-color: #007bff;
  color: white;
  border: 1px solid #007bff;

  &:hover {
    background-color: #0056b3;
  }

  ${(props) =>
    props.secondary &&
    css`
      background-color: #6c757d;
      color: white;
      border: 1px solid #6c757d;

      &:hover {
        background-color: #5a6268;
      }
    `}

  ${(props) =>
    props.custom &&
    css`
      background-color: ${props.color || 'transparent'};
      border: ${props.border || '1px solid black'};
      color: ${props.color || 'black'};
    `}
`;

export { StyledButton };
