import FindColonySection from "@/components/organisms/FindColonySection";
import { StackCategory } from "@/components/organisms/StackCategory";
import * as S from "./findColonyPage.style";

import { myDashboard } from "../../../data/dummey";
import { useState } from "react";

export const FindColonyMain: React.FC = () => {
  const data = myDashboard.data;

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };
    
  return (
    <S.FindColonyPage>
      <S.CategorySection>
        <StackCategory
          data={data}
          isOpenMajor={isOpen}
          isOpenMajorDetail={isOpen}
          toggleDropDown={toggleDropdown}
        />
      </S.CategorySection>
      <S.ColonyMainSection></S.ColonyMainSection>
    </S.FindColonyPage>
  );
};
