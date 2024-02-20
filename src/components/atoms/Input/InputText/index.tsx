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
}

export const InputText = ({
  width,
  value,
  name,
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
