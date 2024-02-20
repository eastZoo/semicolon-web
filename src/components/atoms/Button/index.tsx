import * as S from "./button.style";

interface ButtonProps {
  width?: string;
  height?: number;
  color?: string;
  type: "button" | "submit" | "reset" | undefined;
  label?: string;
  children?: any;
  className?: any;
}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <S.Button {...props} className={props.className}>
      {children && children}
      {props.label && props.label}
    </S.Button>
  );
};
