import { Button } from "../../Button/index";
import * as S from "../Input.style";

interface InputTextProps {
  width?: string;
  value?: any;
  name?: string;
  size: string;
  placeholder?: string;
  label?: string;
  type?: string;
  children?: any;
  alt?: string;
  className?: string;
  src?: any;
}

export const InputText = ({
  width,
  value,
  size,
  placeholder,
  label,
  type,
  children,
}: InputTextProps) => {
  return (
    <S.InputCommon size={size} width={width}>
      {children && children}
      <label>
        {label && label}
        <input
          type={type || "text"}
          placeholder={placeholder}
          value={value}
        />
      </label>
    </S.InputCommon>
  );
};

export const IconInputText = ({
  width,
  value,
  size,
  placeholder,
  type,
  src,
  alt,
  className,
  children,
}: InputTextProps) => {
  return (
    <S.InputCommon>
      <S.IconInputText className={className} >
        {children && children}
        <input type={type || "text"} placeholder={placeholder} value={value} />
        <img src={src} alt={alt} />
      </S.IconInputText>
    </S.InputCommon>
  )
};

export const InputSearchBar = ({
  width,
  value,
  placeholder,
  type,
  src,
  alt,
  className,
  children,
}: InputTextProps) => {
  return (
    <S.InputCommon>
      <S.InputSearchBar className={className}>
        {children && children}
        <input type={type || "text"} placeholder={placeholder} value={value} />
        <Button type="button" color="search_btn">
          <img src={src} alt={alt} />
        </Button>
      </S.InputSearchBar>
    </S.InputCommon>
  );
}