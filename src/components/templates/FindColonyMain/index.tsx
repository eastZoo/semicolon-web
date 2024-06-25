import { StackCategory } from "@/components/organisms/StackCategory";
import * as S from "./findColonyPage.style";
import {
  myDashboard,
  findColonyData,
  ColonyData,
  mainCategory,
} from "../../../data/dummey";
import * as SColonySection from "../../organisms/FindColonySection/FindColonySection.style";
import { useState, useRef, useEffect, useCallback } from "react";
import { ColonyCard } from "@/components/molcules/Card";
import AdSection from "@/components/organisms/AdSection";
import * as React from "react";

export const FindColonyMain: React.FC = ({ bookmarked }: any) => {
  const dashdata = myDashboard.data;
  
  // infinity scroll
  const [colonyData, setColonyData] = useState<ColonyData[]>([]);
  const [offset, setOffset] = useState(0);
  const [isFetch, setIsFetch] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const observerRef = useRef<IntersectionObserver>();
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchColonyData();
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(intersectionObserver);
    if (targetRef.current) {
      observerRef.current.observe(targetRef.current);
    }
    return () => observerRef.current && observerRef.current.disconnect();
  }, [colonyData]);

  const fetchColonyData = async () => {
    setIsFetch(true);
    // axios 사용시 해당 부분에 데이터 요청 url
    const newData = findColonyData.slice(offset, offset + 12);
    setColonyData((prevData) => [...prevData, ...newData]);
    setOffset(offset + 12);
    console.log(offset);
    if (offset >= findColonyData.length) {
      setHasMore(false);
    }
    setIsFetch(false);
  };

  const intersectionObserver = (
    entries: IntersectionObserverEntry[],
    io: IntersectionObserver
  ) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !isFetch && hasMore) {
        io.unobserve(entry.target);
        fetchColonyData();
      }
    });
  };

  // dropdown category

  const [isOpenMajor, setIsOpenMajor] = useState(false);
  const [selectedOptionsMajor, setSelectedOptionsMajor] = useState<string[]>(
    []
  );

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
    setIsOpenSubArea(false);
    setIsOpenSubCareer(false);
    setIsOpenSubStack(false);
    setIsOpenSubStatus(false);
  };

  const subDropdownArea = () => {
    setIsOpenMajor(false);
    setIsOpenSubArea(!isOpenSubArea);
    setIsOpenSubCareer(false);
    setIsOpenSubStack(false);
    setIsOpenSubStatus(false);
  };

  const handleOptionsMajor = (option: string) => {
    if (selectedOptionsMajor.includes(option)) {
      setSelectedOptionsMajor(
        selectedOptionsMajor.filter((item) => item !== option)
      );
    } else {
      setSelectedOptionsMajor([...selectedOptionsMajor, option]);
    }
  };

  const handleOptionsArea = (option: string) => {
    let updateOption;
    if (selectedOptionsArea.includes(option)) {
      setSelectedOptionsArea(
        selectedOptionsArea.filter((item) => item !== option)
      );
      console.log(option);
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
          toggleDropdownMajor={toggleDropdownMajor}
          // Area
          handleOptionsArea={handleOptionsArea}
          selectedOptionsArea={selectedOptionsArea}
          isOpenSubArea={isOpenSubArea}
          subDropdownArea={subDropdownArea}
          // Career
          handleOptionsCareer={handleOptionsCareer}
          selectedOptionsCareer={selectedOptionsCareer}
          isOpenSubCareer={isOpenSubCareer}
          subDropdownCareer={subDropdownCareer}
          // Stack
          handleOptionsStack={handleOptionsStack}
          selectedOptionsStack={selectedOptionsStack}
          isOpenSubStack={isOpenSubStack}
          subDropdownStack={subDropdownStack}
          // Status
          handleOptionsStatus={handleOptionsStatus}
          selectedOptionsStatus={selectedOptionsStatus}
          isOpenSubStatus={isOpenSubStatus}
          subDropdownStatus={subDropdownStatus}
        />
      </S.CategorySection>
      <S.ColonyMainSection>
        <SColonySection.FindColonyCard color="findColonyPage">
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
        <div ref={targetRef}></div>
      </S.ColonyMainSection>
    </S.FindColonyPage>
  );
};
