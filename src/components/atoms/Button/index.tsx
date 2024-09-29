import * as S from "./button.style";
interface ButtonProps {
  width?: string;
  height?: number;
  color?: string;
  type: "button" | "submit" | "reset" | undefined;
  label?: string;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  onChange?: () => void;
  select?: string[] | any; // 왜 드롭다운메뉴 컴포넌트에서 boolean타입으로 넘어옴 임시 처리
  value?: any;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  label,
  ...props
}) => {
  return (
    <S.Button {...props} className={props.className}>
      {children && children}
      {label && label}
    </S.Button>
  );
};

export const CateButton: React.FC<ButtonProps> = ({
  children,
  label,
  onChange,
  ...props
}) => {
  return (
    <S.Button {...props} className={props.className} onClick={onChange}>
      {children && children}
      {label && label}
    </S.Button>
  );
};

interface IconButtonProps extends ButtonProps {
  src?: string;
  text?: string;
}

export const IconButton: React.FC<IconButtonProps> = ({
  children,
  src,
  text,
  color,
  ...props
}) => {
  return (
    <S.IconButton {...props}>
      {children}
      {src && <img src={src} alt={text} />}
      {text}
    </S.IconButton>
  );
};
