"use client";

// import { useChatQuery } from "@/hooks/use-chat-query";
// import { useChatSocket } from "@/hooks/use-chat-socket";
// import { useChatScroll } from "@/hooks/use-chat-scroll";

// import { ChatItem } from "./chat-item";
import { ChatWelcome } from "@/components/molcules/Chat/ChatWelcome";
import { ChatHeader } from "@/components/molcules/Chat/ChatHeader";
import { channelData, channelMember } from "@/data/chat-dummey";
import { ChatMessages } from "@/components/molcules/Chat/ChatMessage";
import { ChatInput } from "@/components/molcules/Chat/ChatInputForm";
import { useRecoilValue } from "recoil";
import { userState } from "@/recoil/user";
import { useQuery } from "@tanstack/react-query";
import { GET_CHANNEL, GET_MEMBER } from "@/common/query-keys";
import { request } from "@/lib/api";
import { ChannelMemberType, InitialChannelType } from "@/types/chat.type";

const DATE_FORMAT = "d MMM yyyy, HH:mm";

// type MessageWithMemberWithProfile = Message & {
//   member: Member & {
//     profile: Profile;
//   };
// };

interface ChatMessagesProps {
  name: string;
  member: any;
  chatId: string;
  apiUrl: string;
  socketUrl: string;
  socketQuery: Record<string, string>;
  paramKey: "channelId" | "conversationId";
  paramValue: string;
  type: "channel" | "conversation";
}

interface ChannelIdPageProps {
  params: {
    serverId: string;
    channelId: string;
  };
}

//채팅 부분
export default function ChannelIdPage({ params }: ChannelIdPageProps) {
  const profile = useRecoilValue(userState);

  const member = channelMember;
  const channel = channelData;

  /** 첫번째( params에의해 자동으로 첫번째 text 채널 id 값이 넘어온 상태 ) 채널 정보 */
  // const { data: channel } = useQuery({
  //   queryKey: [GET_CHANNEL],
  //   queryFn: async () => {
  //     const result = await request<InitialChannelType>({
  //       method: "Get",
  //       url: `chat/channel/${params.channelId}`,
  //     });
  //     return result;
  //   },
  // });

  // const { data: member } = useQuery<any>({
  //   // profile 값을 키로 추가 해주면서 렌더링 문제 해결?( trouble : recoil에 값이 있는데 쿼리 요청 시 undefined로 나오는 문제)
  //   queryKey: [GET_MEMBER, profile],
  //   queryFn: async () => {
  //     const result = await request<ChannelMemberType>({
  //       method: "Get",
  //       url: `chat/channel/${params.serverId}/${profile?.id}`,
  //     });
  //     return result;
  //   },
  // });

  return (
    <div className="bg-white dark:bg-[#313338] flex flex-col h-full">
      <ChatHeader
        name={channel?.name}
        serverId={channel?.serverId}
        type="channel"
      />
      {channel?.type === "TEXT" && (
        <>
          <ChatMessages
            member={member}
            name={channel.name}
            chatId={channel.id}
            type="channel"
            apiUrl="/api/messages"
            socketUrl="/api/socket/messages"
            socketQuery={{
              channelId: channel?.id,
              serverId: channel?.serverId,
            }}
            paramKey="channelId"
            paramValue={channel?.id}
          />
          <ChatInput
            name={channel?.name}
            type="channel"
            apiUrl="/api/socket/messages"
            query={{
              channelId: channel?.id,
              serverId: channel?.serverId,
            }}
          />
        </>
      )}
      {/* {channel.type === "AUDIO" && (
        <MediaRoom chatId={channel.id} video={false} audio={true} />
      )}
      {channel.type === "VIDEO" && (
        <MediaRoom chatId={channel.id} video={true} audio={true} />
      )} */}
    </div>
  );
}
