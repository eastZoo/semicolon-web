import { useRecoilState } from "recoil";
import { request } from "../api";
import { profileState } from "@/recoil/profile";

export default function useProfile() {
  const [, setProfile] = useRecoilState(profileState);

  // 브라우저 새로고침시 브로필 가져오기(최신화)
  const getProfile = () => {
    const profile = request({
      method: "GET",
      url: `auth/profile`,
    }).then((res) => {
      setProfile(res);
      console.log("setProfile", res);
      return res;
    });

    setProfile(profile);
  };

  const updateProfile = () => {};

  return { getProfile };
}
