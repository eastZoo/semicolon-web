import { ServerSidebar } from "@/components/organisms/ChatServerSidebar";

const MainLayout = async ({
  children,
  serverId = "16b866c0-cc26-42ab-9a66-2fe9f64c7f0f",
}: {
  children: React.ReactNode;
  serverId: string;
}) => {
  return (
    <div className="h-full">
      <div className="hidden md:flex h-full w-60 z-20 flex-col fixed inset-y-0">
        <ServerSidebar serverId={serverId} />
      </div>
      <main className="h-full md:pl-60">{children}</main>
    </div>
  );
};

export default MainLayout;
