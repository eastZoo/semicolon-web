import React from "react";
import * as S from "./DashboardRightSection.styles";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import dayjs from "dayjs";
import TodayTaskCard from "@/components/molcules/Card/TodayTaskCard";

const dummyData = [
  { date: "2024-10-12", name: "test", color: "skyblue", status: "inprogress" },
  { date: "2024-10-02", name: "user", color: "green", status: "new" },
  { date: "2024-10-05", name: "지혜", color: "violet", status: "inprogress" },
  { date: "2024-10-05", name: "적화", color: "yellow", status: "done" },
];

const DashboardRightSection = () => {
  return (
    <S.DashboardRightLayout>
      <S.CalendarLayout>
        <Calendar
          calendarType="gregory"
          formatDay={(locale, date) => dayjs(date).format("DD")}
          locale="en-US"
          formatShortWeekday={(locale, date) =>
            date.toLocaleDateString("en-US", { weekday: "short" }).slice(0, 1)
          }
          tileContent={({ date }: { date: Date }) => {
            const dayEvents = dummyData.filter((data) => {
              return (
                data.date === dayjs(date).format("YYYY-MM-DD") &&
                data.status === "inprogress"
              );
            });

            return (
              <div className="row-task">
                {dayEvents.map((data, index) => (
                  <S.CalendarTaskView userColor={data.color} key={index} />
                ))}
              </div>
            );
          }}
        />
      </S.CalendarLayout>
      <TodayTaskCard />
    </S.DashboardRightLayout>
  );
};

export default DashboardRightSection;
