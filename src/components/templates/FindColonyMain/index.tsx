import { StackCategory } from "@/components/organisms/StackCategory";
import * as S from "./findColonyPage.style";
import { myDashboard, findColonyData } from "../../../data/dummey";
import * as SColonySection from "../../organisms/FindColonySection/FindColonySection.style";
import { useState } from "react";
import { ColonyCard } from "@/components/molcules/Card";
import NoticeSection from "@/components/organisms/NoticeSection";
import AdSection from "@/components/organisms/AdSection";

export const FindColonyMain: React.FC = ({ bookmarked }: any) => {
  const data = myDashboard.data;

  const [isOpenMajor, setIsOpenMajor] = useState(false);
  const [isOpenMajorDetail, setIsOpenMajorDetail] = useState(false);

  const [isOpenSubArea, setIsOpenSubArea] = useState(false);
  const [selectedOptionsArea, setSelectedOptionsArea] = useState<string[]>([]);

  const [isOpenSubCareer, setIsOpenSubCareer] = useState(false);
  const [selectedOptionsCareer, setSelectedOptionsCareer] = useState<string[]>(
    []
  );

  const [isOpenSubStack, setIsOpenSubStack] = useState(false);
  const [selectedOptionsStack, setSelectedOptionsStack] = useState<string[]>(
    []
  );

  const [isOpenSubStatus, setIsOpenSubStatus] = useState(false);
  const [selectedOptionsStatus, setSelectedOptionsStatus] = useState<string[]>(
    []
  );

  const toggleDropdownMajor = () => {
    setIsOpenMajor(!isOpenMajor);
    setIsOpenMajorDetail(false);
  };

  const toggleDropdownMajorDetail = () => {
    setIsOpenMajorDetail(!isOpenMajorDetail);
    setIsOpenMajor(false);
  };

  const subDropdownArea = () => {
    setIsOpenSubArea(!isOpenSubArea);
    setIsOpenSubCareer(false);
    setIsOpenSubStack(false);
    setIsOpenSubStatus(false);
  };

  const handleOptionsArea = (option: string) => {
    if (selectedOptionsArea.includes(option)) {
      setSelectedOptionsArea(
        selectedOptionsArea.filter((item) => item !== option)
      );
    } else {
      setSelectedOptionsArea([...selectedOptionsArea, option]);
    }
  };

  const subDropdownCareer = () => {
    setIsOpenSubCareer(!isOpenSubCareer);
    setIsOpenSubArea(false);
    setIsOpenSubStack(false);
    setIsOpenSubStatus(false);
  };

  const handleOptionsCareer = (option: string) => {
    if (selectedOptionsCareer.includes(option)) {
      setSelectedOptionsCareer(
        selectedOptionsCareer.filter((item) => item !== option)
      );
    } else {
      setSelectedOptionsCareer([...selectedOptionsCareer, option]);
    }
  };

  const subDropdownStack = () => {
    setIsOpenSubStack(!isOpenSubStack);
    setIsOpenSubCareer(false);
    setIsOpenSubArea(false);
    setIsOpenSubStatus(false);
  };

  const handleOptionsStack = (option: string) => {
    if (selectedOptionsStack.includes(option)) {
      setSelectedOptionsStack(
        selectedOptionsStack.filter((item) => item !== option)
      );
    } else {
      setSelectedOptionsStack([...selectedOptionsStack, option]);
    }
  };

  const subDropdownStatus = () => {
    setIsOpenSubStatus(!isOpenSubStatus);
    setIsOpenSubCareer(false);
    setIsOpenSubStack(false);
    setIsOpenSubArea(false);
  };

  const handleOptionsStatus = (option: string) => {
    if (selectedOptionsStatus.includes(option)) {
      setSelectedOptionsStatus(
        selectedOptionsStatus.filter((item) => item !== option)
      );
    } else {
      setSelectedOptionsStatus([...selectedOptionsStatus, option]);
    }
  };

  return (
    <S.FindColonyPage>
      <S.CategorySection>
        <StackCategory
          data={data}
          isOpenMajor={isOpenMajor}
          isOpenMajorDetail={isOpenMajorDetail}
          toggleDropdownMajor={toggleDropdownMajor}
          toggleDropdownMajorDetail={toggleDropdownMajorDetail}
          // Area
          handleOptionsArea={handleOptionsArea}
          selectedOptionsArea={selectedOptionsArea}
          isOpenSubArea={isOpenSubArea}
          subDropdownArea={subDropdownArea}
          handleOptionChange={handleOptionsArea}
          selectedOptions={selectedOptionsArea}
          // Career
          handleOptionsCareer={handleOptionsCareer}
          selectedOptionsCareer={selectedOptionsCareer}
          isOpenSubCareer={isOpenSubCareer}
          subDropdownCareer={subDropdownCareer}
          handleOptionChange={handleOptionsCareer}
          selectedOptions={selectedOptionsCareer}
          // Stack
          handleOptionsStack={handleOptionsStack}
          selectedOptionsStack={selectedOptionsStack}
          isOpenSubStack={isOpenSubStack}
          subDropdownStack={subDropdownStack}
          handleOptionChange={handleOptionsStack}
          selectedOptions={selectedOptionsStack}
          // Status
          handleOptionsStatus={handleOptionsStatus}
          selectedOptionsStatus={selectedOptionsStatus}
          isOpenSubStatus={isOpenSubStatus}
          subDropdownStatus={subDropdownStatus}
          handleOptionChange={handleOptionsStatus}
          selectedOptions={selectedOptionsStatus}
        />
      </S.CategorySection>
      <S.ColonyMainSection>
        
        <SColonySection.FindColonyCard>
          {findColonyData.data.slice(0, 8).map((data, index) => (
            <ColonyCard
              bookmarked={bookmarked}
              key={index}
              title={data.title}
              src={data.src}
              category={data.category}
              stack={data.stack}
              user={data.user}
              view={data.view}
              view_src="/assets/svg/viewCount.svg"
              bookmark_count={data.bookmark}
            />
          ))}
        </SColonySection.FindColonyCard>
        <AdSection/>
      </S.ColonyMainSection>
    </S.FindColonyPage>
  );
};
