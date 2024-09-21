import * as S from "./loginBox.style";
import Link from "next/link";
import MainLogoIcon from "@/assets/icon/sample_logo.svg";
import KakaoIcon from "@/assets/icon/kakao-talk.svg";
import GoogleIcon from "@/assets/icon/google-logo.svg";

// 1. input에 value 추가
// 2. onChange 추가

export const LoginBox = () => {
  return (
    <S.LoginBox>
      <MainLogoIcon />
      <Link href="/">
        <S.LoginButtonLayout color="kakao">
          <KakaoIcon />
          <p>카카오로 로그인</p>
        </S.LoginButtonLayout>
      </Link>
      <Link href="/">
        <S.LoginButtonLayout>
          <GoogleIcon />
          <p>Google로 로그인</p>
        </S.LoginButtonLayout>
      </Link>
    </S.LoginBox>
  );
};
