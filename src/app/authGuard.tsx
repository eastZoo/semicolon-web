import { GET_PROFILE } from "@/common/query-keys";
import { request } from "@/lib/api";
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
  const [, setProfile] = useRecoilState(profileState);

  const { data: profile } = useQuery({
    queryKey: [GET_PROFILE],
    queryFn: async () => {
      return await request({
        method: "GET",
        url: `auth/profile`,
      }).then((res) => {
        setProfile(res);
        console.log("vvv", res);
        return res;
      });
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
