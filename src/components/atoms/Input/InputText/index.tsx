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
  errors?: any;
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
  errors,
}: InputTextProps) => {
  return (
    <S.InputCommon size={size} width={width}>
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
