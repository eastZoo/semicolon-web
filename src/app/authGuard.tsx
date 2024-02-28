import { GET_PROFILE } from "@/common/query-keys";
import { request } from "@/lib/api";
import useProfile from "@/lib/hooks/useProfile";
import { accessTokenState } from "@/recoil/authToken";
import { profileState } from "@/recoil/profile";
import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query";
import { GetServerSideProps } from "next";
import React, { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

const AuthGuard: React.FC<React.PropsWithChildren> = ({
  children,
}: React.PropsWithChildren) => {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const { getProfile } = useProfile();

  useEffect(() => {
    // 렌더링시 초기에 로컬 스토리지에서 authToken 가져오기
    const accessToken: any = localStorage.getItem("accessToken");
    setAccessToken(accessToken);

    // 브라우저 새로고침시 브로필 가져오기(최신화)
    useProfile();
  }, []);

  return <>{children}</>;
};
export default AuthGuard;
