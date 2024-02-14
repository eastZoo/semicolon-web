import * as S from "./loginBox.style";
import { InputText } from "@/components/atoms/Input/InputText";
import { Button } from "@/components/atoms/Button";
import Image from "next/image";

// 1. input에 value 추가
// 2. onChange 추가

export const LoginBox = () => {
  return (
    <S.LoginBox>
      <S.LoginInputBox>
        <InputText size="md" width="100%" type={"text"} placeholder="이메일" />
        <InputText
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
        {/* 요론 식으로 next에서 제공하는 Image컴포넌트를 사용해서 style을 맥이는 방법 */}
        <Image
          alt="google-logo"
          src="/assets/svg/google-logo.svg"
          width={20}
          height={20}
          style={{
            marginRight: "10px",
          }}
        />
      </Button>
    </S.LoginBox>
  );
};
