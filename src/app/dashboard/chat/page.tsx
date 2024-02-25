import { ServerSidebar } from "@/components/organisms/ChatServerSidebar";
import { redirect } from "next/navigation";
/**
 * 작성자 : 신동주
 *  "/chat" 페이지 경로로 들어왔을때 본 page의 역할은 화면을 렌더링 하는것이 아니라 채팅 서버중 첫번째 서버로 자동 리다이렉트 하는 역할이다.
 */

const MainLayout = async ({ children }: any) => {
  const initialChannel = {
    id: "f72caa76-8747-4277-9392-81b9d442d7e2",
    name: "general",
    type: "TEXT",
    profileId: "d8085077-96fb-44fc-9fa6-d800204bad43",
    serverId: "16b866c0-cc26-42ab-9a66-2fe9f64c7f0f",
    createdAt: "2024-02-21T01:27:51.177Z",
    updatedAt: "2024-02-21T01:27:51.177Z",
  };

  if (initialChannel?.name !== "general") {
    return null;
  }

  return redirect(`/dashboard/chat/channels/${initialChannel?.id}`);
};

export default MainLayout;
