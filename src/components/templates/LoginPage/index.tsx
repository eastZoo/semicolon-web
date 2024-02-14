import { LoginBox } from "@/components/molcules/LoginBox";
import * as S from "./loginPage.style";

export interface LoginPageProps{
    onSubmit: (e: any) => any;
    onChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
    errorMessage: string;
    isLoading: boolean;
}

export const LoginPage = ({
    onSubmit,
    onChange,
    errorMessage,
    isLoading,
}: LoginPageProps) => {
    return (
        <S.LoginPage>
            <LoginBox 
            onSubmit={onSubmit}
            onChange={onChange}
            errorMessage={errorMessage}
            isLoading={isLoading}
        />
        </S.LoginPage>
    );
};