import * as S from "./loginBox.style"
import {LoginPageProps} from "@/components/templates/LoginPage";
import { useRouter } from "next/navigation";
import {InputText} from "@/components/atoms/Input/InputText";
import { userInfo } from "os";
import { Button } from "@/components/atoms/Button";

// 1. input에 value 추가
// 2. onChange 추가

export const LoginBox = ({
    onSubmit,
    onChange,
    isLoading,
}: LoginPageProps) => {
    const router = useRouter();
    return (
        <S.LoginBox onSubmit={onSubmit}>
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
            className={`${isLoading && "spinner spinner-white sponner-right"}`}
            />
            <Button
            type="submit"
            width="100%"
            height={55}
            color="kakaoBg"
            layout="solid"
            label="카카오 로그인"
            className={`${isLoading && "spinner spinner-white sponner-right"}`}>
            <img src="/assets/svg/kakao-talk.svg"/>
            </Button>
            <Button
            type="submit"
            width="100%"
            height={55}
            color="GoogleBg"
            layout="solid"
            label="구글 로그인"
            className={`${isLoading && "spinner spinner-white sponner-right"}`}
            ><img src="/assets/svg/google-logo.svg"/>
                </Button>
        </S.LoginBox>

    )
}