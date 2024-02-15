import * as S from "../Input.style";

interface InputTextProps {
  width?: string;
  value?: any;
  name?: string;
  onChange?: any;
  size: string;
  placeholder?: string;
  label?: string;
  type?: string;
  children?: any;
  errors?: any;
  color?: any;

}

export const InputText = ({
  width,
  value,
  name,
  onChange,
  size,
  placeholder,
  label,
  type,
  children,
  errors,
}: InputTextProps) => {
  return (
    <S.InputCommon size={size} width={width}>
      {children && children}
      <label>
        {label && label}
        <input
          type={type || "text"}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      </label>
    </S.InputCommon>
  );
};
