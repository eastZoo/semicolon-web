"use client";
import { GET_CHANNEL } from "@/common/query-keys";
import { request } from "@/lib/api";
import { userState } from "@/recoil/user";
import { redirectToSignIn } from "@clerk/nextjs";
import { useQuery } from "@tanstack/react-query";
import { redirect } from "next/navigation";
import { useRecoilValue } from "recoil";

const ChatPage = async () => {
  const profile = useRecoilValue(userState);

  if (!profile) {
    return redirectToSignIn();
  }

  console.log("profile  @@@@@@@@@@@:", profile);

  /** 매장명 리스트 ( input select ) */

  const server: any = await request({
    method: "Get",
    url: `chat/${profile.id}`,
  });

  const initialChannel = server?.channels[0];
  console.log("initialChannel :", initialChannel);
  // const initialChannel = server?.channels[0];
  // console.log("initialChannel  @@@@@@@@@@@:", initialChannel);
  // if (initialChannel?.name !== "general") {
  //   return null;
  // }

  return redirect(`/dashboard/chat/${server.id}/${initialChannel?.id}`);
};

export default ChatPage;
