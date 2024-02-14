"use client"

import { LoginPage } from "@/components/templates/LoginPage";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Login = () =>{
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const{
            target: {name, value},
        } = e;
        if (name === "userId"){
            setUserId(value);
        }else if(name === "password"){
            setPassword(value);
        }
    }

    const onSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        if(isLoading || userId==="" || password === "") return;
        try{
            setIsLoading(true);
            router.replace("/main")
        }catch(error){
            const {reponse} = error as unknown as any;
            setError(reponse?.data.message);
        }finally{
            setIsLoading(false);
        }
    }

    return (
        <>
        <LoginPage
        errorMessage={error}
        onSubmit={onSubmit}
        onChange={onChange}
        isLoading={isLoading}
        />
        </>
    )
}

export default Login;