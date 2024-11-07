import {
  StyledHeadline,
  StyledParagraph,
  StyledSubtitle,
  StyledTitle,
} from './Text.styles';

type TextType = 'title' | 'subtitle' | 'headline' | 'paragraph';

interface TextProps {
  children: React.ReactNode;
  type: TextType;
  color?: string;
  fontWeight?: string;
  align?: 'left' | 'right' | 'center' | 'justify';
}

const getStyledComponent = (type: TextType) => {
  switch (type) {
    case 'title':
      return StyledTitle;
    case 'subtitle':
      return StyledSubtitle;
    case 'headline':
      return StyledHeadline;
    case 'paragraph':
    default:
      return StyledParagraph;
  }
};

const Text = ({ children, type, color, fontWeight, align }: TextProps) => {
  const Component = getStyledComponent(type);
  return (
    <Component
      color={color}
      fontWeight={fontWeight}
      align={align}
    >
      {children}
    </Component>
  );
};

export default Text;