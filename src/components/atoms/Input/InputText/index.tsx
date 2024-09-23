import { Button } from "../../Button/index";
import * as S from "../Input.style";

interface BaseInputProps {
  value?: any;
  placeholder?: string;
  type?: string;
  children?: React.ReactNode;
  alt?: string;
  className?: string;
  src?: any;
}

interface InputTextProps extends BaseInputProps {
  width?: string;
  size: string;
  label?: string;
}

interface IconInputTextProps extends BaseInputProps {}

interface InputSearchBarProps extends BaseInputProps {}

export const InputText: React.FC<InputTextProps> = ({
  width,
  value,
  size,
  placeholder,
  label,
  type,
  children,
}) => {
  return (
    <S.InputCommon size={size} width={width}>
      {children}
      {label && <label>{label}</label>}
      <input type={type || "text"} placeholder={placeholder} value={value} />
    </S.InputCommon>
  );
};

export const IconInputText: React.FC<IconInputTextProps> = ({
  value,
  placeholder,
  type,
  src,
  alt,
  className,
  children,
}) => {
  return (
    <S.InputCommon>
      <S.IconInputText className={className}>
        {children}
        <input type={type || "text"} placeholder={placeholder} value={value} />
        <img src={src} alt={alt} />
      </S.IconInputText>
    </S.InputCommon>
  );
};

export const InputSearchBar: React.FC<InputSearchBarProps> = ({
  value,
  placeholder,
  type,
  src,
  alt,
  className,
  children,
}) => {
  return (
    <S.InputCommon>
      <S.InputSearchBar className={className}>
        {children}
        <input type={type || "text"} placeholder={placeholder} value={value} />
        <Button type="button" color="search_btn">
          <img src={src} alt={alt} />
        </Button>
      </S.InputSearchBar>
    </S.InputCommon>
  );
};