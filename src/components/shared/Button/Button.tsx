// Button.tsx
import React from 'react';
import { StyledButton } from './Button.styles';

// Tipos para las props del componente
interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  secondary?: boolean;
  custom?: boolean;
  color?: string;
  border?: string;
  onClick?: () => void;
}

// Definición del componente Button
const Button = ({  
  children,
/*   primary, */
  secondary,
  custom,
  color,
  border,
  onClick
}:ButtonProps) => {
  return (
    <StyledButton
/*       primary={primary} */
      secondary={secondary}
      custom={custom}
      color={color}
      border={border}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;