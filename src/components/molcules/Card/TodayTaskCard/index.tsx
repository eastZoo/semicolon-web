import React from "react";
import * as S from "./todayTaskCard.styles";
import Link from "next/link";

const dummyData = [
  {
    status: "new",
    title: "로그인 기능 추가하기",
    content: "프론트엔드",
    date: "2024-10-06",
  },
  {
    status: "In progress",
    title: "로그인 기능 추가하기",
    content: "프론트엔드",
    date: "2024-10-06",
  },
  {
    status: "done",
    title: "로그인 기능 추가하기",
    content: "프론트엔드",
    date: "2024-10-06",
  },
];

const TodayTaskCard = () => {
  return (
    <S.TodayTaskCardLayout>
      <S.TodayTaskCardHeader>
        <S.TodayTaskCardTitle>Today's</S.TodayTaskCardTitle>
        <Link href="/dashboard/kanban">see all</Link>
      </S.TodayTaskCardHeader>
      <S.TodayTaskCardContentLayout>
        {dummyData.map((data, idx) => (
          <S.TodayTaskCardContentBox key={idx}>
            <S.TodayTaskCardUpper>
              <S.TodayTaskCardContentHeader>
                <S.ContentTitle>{data.title}</S.ContentTitle>
                <div className="status-box">
                  <S.StatusAlarm status={data.status} />
                  <S.ContentStatusText>{data.status}</S.ContentStatusText>
                </div>
              </S.TodayTaskCardContentHeader>
              <p className="light-text">{data.content}</p>
            </S.TodayTaskCardUpper>
            <p className="light-text">{data.date}</p>
          </S.TodayTaskCardContentBox>
        ))}
      </S.TodayTaskCardContentLayout>
      <S.TaskAddButtonLayout>+ Add a new Task</S.TaskAddButtonLayout>
    </S.TodayTaskCardLayout>
  );
};

export default TodayTaskCard;
