import * as S from "./button.style";
interface ButtonProps {
  width?: string;
  height?: number;
  color?: string;
  type: "button" | "submit" | "reset" | undefined;
  label?: string;
  children?: any;
  className?: any;
  src?: any;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <S.Button {...props} className={props.className}>
      {children && children}
      {props.label && props.label}
    </S.Button>
  );
};

export const IconButton: React.FC<ButtonProps> = ({children, ...props}) => { 
  return (
    <S.IconButton {...props}>
      {children && children}
      <img src={props.src} />
    </S.IconButton>
  );
};