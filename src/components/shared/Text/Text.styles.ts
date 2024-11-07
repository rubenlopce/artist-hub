import styled, { css } from 'styled-components';

interface TextProps {
  fontWeight?: string;
  color?: string;
  align?: 'left' | 'right' | 'center' | 'justify';
}

const BaseText = css<TextProps>`
  margin: 0;
  padding: 0;
  color: ${(props) => props.color || 'inherit'};
  font-weight: ${(props) => props.fontWeight || '500'};
  text-align: ${(props) => props.align || 'left'};
`;

export const StyledTitle = styled.h1`
  ${BaseText};
  font-size: 2rem;
`;

export const StyledSubtitle = styled.h2`
  ${BaseText};
  font-size: 1.5rem;
`;

export const StyledHeadline = styled.h3`
  ${BaseText};
  font-size: 1.25rem;
`;
export const StyledParagraph = styled.p`
  ${BaseText}
`;
