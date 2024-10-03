import React from "react";
import * as S from "./teamsWorkCard.styles";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Scrollbar } from "swiper/modules";

const dummyData = [
  {
    username: "test",
    task: [
      { task1: "git commit 12개" },
      { task2: "로그인 sns 연동" },
      { task3: "user 정보 패칭" },
      { task4: "user 회원가입 post" },
    ],
  },
  {
    username: "user",
    task: [
      { task1: "로그인 token 설정" },
      { task2: "recoil 작업" },
      { task3: "main 화면 figma 수정" },
      { task4: "git 컨벤션 회의" },
    ],
  },
  {
    username: "지혜",
    task: [
      { task1: "더미 데이터 생성 후 insert" },
      { task2: "게시글 DB 컬럼 수정" },
      { task3: "user 정보 쿼리문" },
      { task4: "로그인 쿼리문 수정" },
    ],
  },
  {
    username: "적화",
    task: [{ task1: "프론트 코드 최적화" }, { task2: "user DB 수정" }],
  },
];

const TeamsWorkCard = () => {
  return (
    <S.TeamsWorkCardLayout>
      <S.TeamsWorkCardTitle> Team's Today </S.TeamsWorkCardTitle>
      <Swiper
        pagination={false}
        spaceBetween={24}
        modules={[Scrollbar, Mousewheel]}
        slidesPerView={2}
        loop={false}
      >
        {dummyData.map((data, idx) => (
          <SwiperSlide key={idx}>
            <S.TeamsWorkCardContentLayout key={idx}>
              <S.TeamsWorkCardContentHeader>
                <div className="profileBox">
                  <Image
                    src="/assets/svg/profile.svg"
                    alt="profile"
                    width={24}
                    height={24}
                  />
                </div>
                <p>{data.username}</p>
              </S.TeamsWorkCardContentHeader>
              {data.task.map((tasks, idx) => {
                return (
                  <S.TeamsWorkCardContentBox key={idx}>
                    <div className="task-text">
                      {(tasks as any)[`task${idx + 1}`]}
                    </div>
                    <div className="status-box">
                      <div className="status" />
                      new
                    </div>
                  </S.TeamsWorkCardContentBox>
                );
              })}
            </S.TeamsWorkCardContentLayout>
          </SwiperSlide>
        ))}
      </Swiper>
    </S.TeamsWorkCardLayout>
  );
};

export default TeamsWorkCard;
