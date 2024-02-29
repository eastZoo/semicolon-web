import { GET_PROFILE } from "@/common/query-keys";
import { request } from "@/lib/api";

import { accessTokenState } from "@/recoil/authToken";
import { userState } from "@/recoil/user";
import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query";
import { GetServerSideProps } from "next";
import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { getAccessToken } from "../tokenFunction";

const AuthGuard: React.FC<React.PropsWithChildren> = ({
  children,
}: React.PropsWithChildren) => {
  const setAccessToken = useSetRecoilState(accessTokenState);
  const setUserState = useSetRecoilState(userState);

  // 브라우저 새로고침시 프로필 가져오기(최신화)
  useQuery({
    queryKey: [GET_PROFILE],
    queryFn: async () => {
      const user = await request({
        method: "GET",
        url: "auth/profile",
      });

      setUserState(user);
      return user;
    },
  });

  useEffect(() => {
    // 렌더링시 초기에 로컬 스토리지에서 authToken 가져오기
    const accessToken: any = localStorage.getItem("accessToken");
    setAccessToken(accessToken);
  }, []);

  return <>{children}</>;
};
export default AuthGuard;
