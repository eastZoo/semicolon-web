import { Button } from "@/components/atoms/Button";
import { InputText } from "@/components/atoms/Input/InputText";
import Image from "next/image";
import * as S from "./signupBox.style";

export const SignupBox = () =>{
    return (
        <S.SignupBox>
            <S.SignupInputBox>
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
            <InputText size="md" width="100%" type={"password"} placeholder="비밀번호">
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
            <InputText size="md" width="100%" type={"password"} placeholder="비밀번호 확인">
                <Image
                alt="pwOk"
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
            <InputText size="md" width="100%" type={"text"} placeholder="닉네임 or 이름">
                <Image
                alt="pwOk"
                src="/assets/svg/nickname/nick.svg"
                width={20}
                height={20}
                style={{
                    position: "absolute",
                    marginLeft:"12px",
                    marginTop:"15px",
                }}
                />
            </InputText>
            <InputText size="md" width="100%" type={"text"} placeholder="휴대폰 번호">
                <Image
                alt="pwOk"
                src="/assets/svg/phone.svg"
                width={20}
                height={20}
                style={{
                    position: "absolute",
                    marginLeft:"12px",
                    marginTop:"15px",
                }}
                />
            </InputText>
            <Button
            type="submit"
            width="100%"
            height={50}
            color="primary"
            label="회원가입"
            />
            </S.SignupInputBox>

        </S.SignupBox>
    )
}