"use client";

import { Fragment, useRef, ElementRef } from "react";
import format from "dayjs";
import { Loader2, ServerCrash } from "lucide-react";

// import { useChatQuery } from "@/hooks/use-chat-query";
// import { useChatSocket } from "@/hooks/use-chat-socket";
// import { useChatScroll } from "@/hooks/use-chat-scroll";

// import { ChatItem } from "./chat-item";
import { ChatWelcome } from "@/components/molcules/Chat/ChatWelcome";
import { ChatHeader } from "@/components/molcules/Chat/ChatHeader";
import { channelData, channelMember } from "@/data/chat-dummey";
import { ChatMessages } from "@/components/molcules/Chat/ChatMessage";
import { ChatInput } from "@/components/molcules/Chat/ChatInputForm";

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

//채팅 부분
const ChatPage = () => {
  const channel = channelData;
  const member = channelMember;
  return (
    <div className="bg-white dark:bg-[#313338] flex flex-col h-full">
      <ChatHeader
        name={channel.name}
        serverId={channel.serverId}
        type="channel"
      />
      {channel.type === "TEXT" && (
        <>
          <ChatMessages
            member={member}
            name={channel.name}
            chatId={channel.id}
            type="channel"
            apiUrl="/api/messages"
            socketUrl="/api/socket/messages"
            socketQuery={{
              channelId: channel.id,
              serverId: channel.serverId,
            }}
            paramKey="channelId"
            paramValue={channel.id}
          />
          <ChatInput
            name={channel.name}
            type="channel"
            apiUrl="/api/socket/messages"
            query={{
              channelId: channel.id,
              serverId: channel.serverId,
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
};

export default ChatPage;
