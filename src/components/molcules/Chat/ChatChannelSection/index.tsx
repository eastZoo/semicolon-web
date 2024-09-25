"use client";

import { ActionTooltip } from "@/components/atoms/ActionToolTip";
import { Plus, Settings } from "lucide-react";

interface ChatChannelSectionProps {
  label: string;
  role?: any;
  sectionType: "channels" | "members";
  channelType?: any;
  server?: any;
}

export const ChatChannelSection = ({
  label,
  role,
  sectionType,
  channelType,
  server,
}: ChatChannelSectionProps) => {
  // const { onOpen } = useModal();

  return (
    <div className="flex items-center justify-between py-2">
      <p className="text-xs uppercase font-semibold text-zinc-500 dark:text-zinc-400">
        {label}
      </p>
      {role !== "GUEST" && sectionType === "channels" && (
        <ActionTooltip label="Create Channel" side="top">
          <button
            onClick={() => console.log("createChannel")}
            className="text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300 transition"
          >
            <Plus className="h-4 w-4" />
          </button>
        </ActionTooltip>
      )}
      {role === "ADMIN" && sectionType === "members" && (
        <ActionTooltip label="Manage Members" side="top">
          <button
            onClick={() => console.log("members")}
            className="text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300 transition"
          >
            <Settings className="h-4 w-4" />
          </button>
        </ActionTooltip>
      )}
    </div>
  );
};
