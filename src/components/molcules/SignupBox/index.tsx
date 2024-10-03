import { Button } from "@/atoms/Button";
import { IconInputText } from "@/atoms/Input/InputText";
import * as S from "./signupBox.style";

export const SignupBox = () => {
  return (
    <S.SignupBox>
      <S.SignupInputBox>
        <IconInputText
          type="text"
          placeholder="이메일"
          src="/assets/svg/email.svg"
          alt="email"
        />
        <IconInputText
          type="password"
          placeholder="비밀번호"
          src="/assets/svg/pw.svg"
          alt="password"
        />
        <IconInputText
          type="password"
          placeholder="비밀번호 확인"
          src="/assets/svg/pw.svg"
          alt="passwordOk"
        />
        <IconInputText
          type="text"
          placeholder="닉네임 or 이름"
          src="/assets/svg/nickname/nick.svg"
          alt="nickname"
        />
        <IconInputText
          type="number"
          placeholder="휴대폰 번호"
          src="/assets/svg/phone.svg"
          alt="phone"
        />
        <Button
          type="submit"
          width="100%"
          height={50}
          color="primary"
          label="회원가입"
        />
      </S.SignupInputBox>
    </S.SignupBox>
  );
};
