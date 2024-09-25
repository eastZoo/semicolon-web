import { redirect } from "next/navigation";
import { Hash, Mic, ShieldAlert, ShieldCheck, Video } from "lucide-react";

import { Separator } from "@/components/atoms/Separator";
import { serverChatInfo, serverProfile } from "@/data/chat-dummey";
import { ServerHeader } from "@/components/molcules/Chat/ChatNavHeader";
import { ScrollArea } from "@/components/atoms/ScrollArea";
import { ServerSearch } from "@/components/atoms/ChatSearch";
import { ChatChannelSection } from "@/components/molcules/Chat/ChatChannelSection";
import { ChatChannelList } from "@/components/molcules/Chat/ChatChannelList";
import { ChatMember } from "@/components/molcules/Chat/ChatMember";

interface ServerSidebarProps {
  serverId: string;
}

export const ServerSidebar = async ({ serverId }: ServerSidebarProps) => {
  const IconSelect = (type: string) => {
    switch (type) {
      case "TEXT":
        return <Hash className="mr-2 h-4 w-4" />;
      case "AUDIO":
        return <Mic className="mr-2 h-4 w-4" />;
      case "VIDEO":
        return <Video className="mr-2 h-4 w-4" />;
      default:
        return null;
    }
  };

  const roleIconMapSelect = (type: string) => {
    switch (type) {
      case "MODERATOR":
        return <ShieldCheck className="h-4 w-4 mr-2 text-indigo-500" />;
      case "ADMIN":
        return <ShieldAlert className="h-4 w-4 mr-2 text-rose-500" />;
      default:
        return null;
    }
  };

  const server = serverChatInfo;
  const profile = serverProfile;

  const textChannels = server?.channels.filter(
    (channel) => channel.type === "TEXT"
  );
  const audioChannels = server?.channels.filter(
    (channel) => channel.type === "AUDIO"
  );
  const videoChannels = server?.channels.filter(
    (channel) => channel.type === "VIDEO"
  );
  const members = server?.members.filter(
    (member) => member.profileId !== profile.id
  );

  if (!server) {
    return redirect("/");
  }

  const role = server.members.find(
    (member) => member.profileId === profile.id
  )?.role;

  return (
    <div className="flex flex-col h-full text-primary w-full dark:bg-[#2B2D31] bg-[#F2F3F5]">
      <ServerHeader server={server} role={role} />

      <ScrollArea className="flex-1 px-3">
        <div className="mt-2">
          <ServerSearch
            data={[
              {
                label: "Text Channels",
                type: "channel",
                data: textChannels?.map((channel) => ({
                  id: channel.id,
                  name: channel.name,
                  icon: IconSelect(channel.type),
                })),
              },
              {
                label: "Voice Channels",
                type: "channel",
                data: audioChannels?.map((channel) => ({
                  id: channel.id,
                  name: channel.name,
                  icon: IconSelect(channel.type),
                })),
              },
              {
                label: "Video Channels",
                type: "channel",
                data: videoChannels?.map((channel) => ({
                  id: channel.id,
                  name: channel.name,
                  icon: IconSelect(channel.type),
                })),
              },
              {
                label: "Members",
                type: "member",
                data: members?.map((member: any) => ({
                  id: member.id,
                  name: member.profile.name,
                  icon: roleIconMapSelect(member.role),
                })),
              },
            ]}
          />
        </div>
        <Separator className="bg-zinc-200 dark:bg-zinc-700 rounded-md my-2" />
        {!!textChannels?.length && (
          <div className="mb-2">
            <ChatChannelSection
              sectionType="channels"
              channelType={"TEXT"}
              role={role}
              label="Text Channels"
            />
            <div className="space-y-[2px]">
              {textChannels.map((channel) => (
                <ChatChannelList
                  key={channel.id}
                  channel={channel}
                  role={role}
                  server={server}
                />
              ))}
            </div>
          </div>
        )}
        {/* {!!audioChannels?.length && (
          <div className="mb-2">
            <ServerSection
              sectionType="channels"
              channelType={ChannelType.AUDIO}
              role={role}
              label="Voice Channels"
            />
            <div className="space-y-[2px]">
              {audioChannels.map((channel) => (
                <ServerChannel
                  key={channel.id}
                  channel={channel}
                  role={role}
                  server={server}
                />
              ))}
            </div>
          </div>
        )}
        {!!videoChannels?.length && (
          <div className="mb-2">
            <ServerSection
              sectionType="channels"
              channelType={ChannelType.VIDEO}
              role={role}
              label="Video Channels"
            />
            <div className="space-y-[2px]">
              {videoChannels.map((channel) => (
                <ServerChannel
                  key={channel.id}
                  channel={channel}
                  role={role}
                  server={server}
                />
              ))}
            </div>
          </div>
        )} */}
        {!!members?.length && (
          <div className="mb-2">
            <ChatChannelSection
              sectionType="members"
              role={role}
              label="Members"
              server={server}
            />
            <div className="space-y-[2px]">
              {members.map((member) => (
                <ChatMember key={member.id} member={member} server={server} />
              ))}
            </div>
          </div>
        )}
      </ScrollArea>
    </div>
  );
};
