import React from "react";
import * as S from "./dashboardMainTemplate.styles";
import DashboardLeftSection from "@/components/organisms/DashboardSection/DashboardLeftSection";
import { DashboardCenterSection } from "@/components/organisms/DashboardSection/DashboardCenterSection";
import DashboardRightSection from "@/components/organisms/DashboardSection/DashboardRightSection";

const DashboardMainTemplate = () => {
  return (
    <S.DashboardMainLayout>
      <S.DashboardMainTitle>DashBoard</S.DashboardMainTitle>
      <S.DashboardGridLayout>
        <DashboardLeftSection />
        <DashboardCenterSection />
        <DashboardRightSection />
      </S.DashboardGridLayout>
    </S.DashboardMainLayout>
  );
};

export default DashboardMainTemplate;
