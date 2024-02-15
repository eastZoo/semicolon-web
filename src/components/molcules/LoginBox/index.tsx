import * as S from "./loginBox.style";
import { InputText } from "@/components/atoms/Input/InputText";
import { Button } from "@/components/atoms/Button";
import { Link } from "@/components/atoms/Link";
import Image from "next/image";
import { Line } from "@/components/atoms/Line";

// 1. input에 value 추가
// 2. onChange 추가

export const LoginBox = () => {
  return (
    <S.LoginBox>
      <S.LoginInputBox>
        <InputText size="md" width="100%" type={"text"} placeholder="이메일">
        <Image
          alt="email"
          src="/assets/svg/email.svg"
          width={20}
          height={20}
          style={{
            position: "absolute",
            marginLeft:"12px",
            marginTop:"15px",
          }}
        />
        </InputText>
      
        <InputText
          size="md"
          width="100%"
          type={"password"}
          placeholder="비밀번호"
        >
          <Image
          alt="pw"
          src="/assets/svg/pw.svg"
          width={20}
          height={20}
          style={{
            position: "absolute",
            marginLeft:"12px",
            marginTop:"15px",
          }}
        />
        </InputText>
      </S.LoginInputBox>
      <Link href={"/"} label="비밀번호를 잊어버리셨나요?" color="forgetPw"/>
      <Button
        type="submit"
        width="100%"
        height={45 }
        color="primary"
        layout="solid"
        label="로그인"
      />
      <Line label="또는"/>
      <Button
        type="submit"
        width="100%"
        height={45}
        color="kakaoBg"
        layout="solid"
        label="카카오 로그인"
      >
        <Image
          alt="kakao-logo"
          src="/assets/svg/kakao-talk.svg"
          width={26}
          height={26}
          style={{
            display: "inline-block",
            marginRight: "10px",
          }}
        />
      </Button>
      <Button
        type="submit"
        width="100%"
        height={45}
        color="GoogleBg"
        layout="solid"
        label="구글 로그인"
      >
        {/* 요론 식으로 next에서 제공하는 Image컴포넌트를 사용해서 style을 맥이는 방법 */}
        <Image
          alt="google-logo"
          src="/assets/svg/google-logo.svg"
          width={26}
          height={26}
          style={{
            display: "inline-flex",
            marginRight: "10px",
          }}
        />
      </Button>
      <Link href={"/"} label="아직 계정이 없으신가요? 회원가입" color="signUp"/>
    </S.LoginBox>
  );
};
