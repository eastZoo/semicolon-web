import { ServerSidebar } from "@/components/organisms/ChatServerSidebar";

const MainLayout = async ({ children }: any) => {
  return (
    <div className="h-full">
      <div className="hidden md:flex h-full w-60 z-20 flex-col fixed inset-y-0">
        <ServerSidebar serverId={"16b866c0-cc26-42ab-9a66-2fe9f64c7f0f"} />
      </div>
      <main className="h-full md:pl-60">{children}</main>
    </div>
  );
};

export default MainLayout;
