import { StackCategory } from "@/components/organisms/StackCategory";
import * as S from "./findColonyPage.style";
import { myDashboard, findColonyData, ColonyData } from "../../../data/dummey";
import * as SColonySection from "../../organisms/FindColonySection/FindColonySection.style";
import { useState, useRef, useEffect, useCallback } from "react";
import { ColonyCard } from "@/components/molcules/Card";
import AdSection from "@/components/organisms/AdSection";
import axios from "axios";

export const FindColonyMain: React.FC = ({ bookmarked }: any) => {
  const dashdata = myDashboard.data;

  // infinity scroll
  const [colonyData, setColonyData] = useState<ColonyData[]>([]);
  const [offset, setOffset] = useState(0);
  const [isFetch, setIsFetch] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchColonyData();
  }, []);

  const fetchColonyData = async () => {
    setIsFetch(true);
    const newData = findColonyData.slice(offset, offset + 10);
    console.log(newData);
    console.log(offset);
    setColonyData((prevData) => [...prevData, ...newData]);
    setOffset(offset + 10);
    if (offset + 10 >= findColonyData.length) {
      setHasMore(false);
    }
    setIsFetch(false);
  };
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isFetch ||
      !hasMore
    )
      return;
    fetchColonyData();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); 

  // dropdown category

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
    setIsOpenSubArea(false);
    setIsOpenSubCareer(false);
    setIsOpenSubStack(false);
    setIsOpenSubStatus(false);
  };

  const toggleDropdownMajorDetail = () => {
    setIsOpenMajorDetail(!isOpenMajorDetail);
    setIsOpenMajor(false);
    setIsOpenSubArea(false);
    setIsOpenSubCareer(false);
    setIsOpenSubStack(false);
    setIsOpenSubStatus(false);
  };

  const subDropdownArea = () => {
    setIsOpenMajor(false);
    setIsOpenMajorDetail(false);
    setIsOpenSubArea(!isOpenSubArea);
    setIsOpenSubCareer(false);
    setIsOpenSubStack(false);
    setIsOpenSubStatus(false);
  };

  const handleOptionsArea = (option: string) => {
    let updateOption;
    if (selectedOptionsArea.includes(option)) {
      setSelectedOptionsArea(
        selectedOptionsArea.filter((item) => item !== option)
      );
    } else {
      setSelectedOptionsArea([...selectedOptionsArea, option]);
    }
    // areaRender(updateOption)
  };
  // const areaRender = (updateOption: string[]) => {
  //   if (updateOption.length > 2) {
  //     console.log("updateOption ", updateOption);
  //     const firstOption = updateOption[0];
  //     const additionalCount = updateOption.length - 1;
  //     const displayText = `${firstOption} 외 ${additionalCount}`;
  //     setSelectedOptionsArea([displayText]);
  //   }
  // };

  const subDropdownCareer = () => {
    setIsOpenMajor(false);
    setIsOpenMajorDetail(false);
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
    setIsOpenMajor(false);
    setIsOpenMajorDetail(false);
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
    setIsOpenMajor(false);
    setIsOpenMajorDetail(false);
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
          data={dashdata}
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
          selectedOptions={setSelectedOptionsArea}
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
          {colonyData.map((data, index) => (
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
        <AdSection />
        {isFetch && <p>Loading...</p>}
        {!hasMore && <p>end</p>}
      </S.ColonyMainSection>
    </S.FindColonyPage>
  );
};
