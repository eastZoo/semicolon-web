// 대시보드 관리

import { DashboardPage } from "@/components/templates/DashboardPage";
import BoardPage from "@/components/templates/DashboardPage/BoardPage";
import CalendarPage from "@/components/templates/DashboardPage/CalendarPage";
import ChatPage from "@/components/templates/DashboardPage/ChatPage";
import GanttPage from "@/components/templates/DashboardPage/GanttPage";
import KanbanPage from "@/components/templates/DashboardPage/KanbanPage";

export interface MenuComponent {
  id: string;
  component: JSX.Element;
}
export const menuComponent: MenuComponent[] = [
  // 공통 대시보드 관리
  { id: "dashboard", component: <DashboardPage /> },
  { id: "board", component: <BoardPage /> },
  { id: "calendar", component: <CalendarPage /> },
  { id: "gantt", component: <GanttPage /> },
  { id: "kanban", component: <KanbanPage /> },
  { id: "chat", component: <ChatPage /> },
];
