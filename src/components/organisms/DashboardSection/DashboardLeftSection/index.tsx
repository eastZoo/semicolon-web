import React from "react";
import * as S from "./dashboardLeftSection.styles";
import Image from "next/image";
import TeamsWorkCard from "@/components/molcules/Card/TeamsWorkCard";

const DashboardLeftSection = () => {
  return (
    <S.DashboardLeftSectionLayout>
      <S.DashboardAnnounceCardLayout>
        <S.AnnouncedCardTitle> 공지사항 </S.AnnouncedCardTitle>
        <S.AnnouncedCardContent>
          <Image
            src="/assets/svg/important_icon.svg"
            width={22}
            height={22}
            alt="important"
          />
          <S.AnnouncedCardContentText>
            내일은 노는 토요일이니까~ 열심히 하세요.
          </S.AnnouncedCardContentText>
        </S.AnnouncedCardContent>
      </S.DashboardAnnounceCardLayout>
      <TeamsWorkCard />
    </S.DashboardLeftSectionLayout>
  );
};

export default DashboardLeftSection;
