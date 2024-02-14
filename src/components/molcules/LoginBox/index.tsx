import * as S from "./loginBox.style";
import { InputText } from "@/components/atoms/Input/InputText";
import { Button } from "@/components/atoms/Button";

// 1. input에 value 추가
// 2. onChange 추가

export const LoginBox = () => {
  return (
    <S.LoginBox>
      <S.LoginInputBox>
        <InputText
          layout="column"
          size="md"
          width="100%"
          type={"text"}
          placeholder="이메일"
        />
        <InputText
          layout="column"
          size="md"
          width="100%"
          type={"password"}
          placeholder="비밀번호"
        />
      </S.LoginInputBox>
      <Button
        type="submit"
        width="100%"
        height={55}
        color="primary"
        layout="solid"
        label="로그인"
      />
      <Button
        type="submit"
        width="100%"
        height={55}
        color="kakaoBg"
        layout="solid"
        label="카카오 로그인"
      >
        <img src="/assets/svg/kakao-talk.svg" />
      </Button>
      <Button
        type="submit"
        width="100%"
        height={55}
        color="GoogleBg"
        layout="solid"
        label="구글 로그인"
      >
        <img src="/assets/svg/google-logo.svg" />
      </Button>
    </S.LoginBox>
  );
};
