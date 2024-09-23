import { StackCategory } from "@/components/organisms/StackCategory";
import * as S from "./findColonyPage.style";
import {
  myDashboard,
  findColonyData,
  ColonyData,
  mainCategory,
  cityCategory,
} from "../../../data/dummey";
import * as SColonySection from "../../organisms/FindColonySection/FindColonySection.style";
import { useState, useRef, useEffect, useCallback } from "react";
import { ColonyCard } from "@/components/molcules/Card";
import AdSection from "@/components/organisms/AdSection";
import * as React from "react";
import { IconButton } from "@/components/atoms/Button";

export const FindColonyMain: React.FC = ({ bookmarked }: any) => {
  const [rangeValue, setRangevalue] = useState<number>(0);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setRangevalue(value);
  };

  const getCareer = (value: number): string => {
    if (value === 0) {
      return "신입";
    } else if (value === 10) {
      return "경력 전체";
    } else {
      return `신입 ~ 경력 ${value}년`;
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const [buttonsIsvisible, setButtonsIsvisble] = useState(false);

  const handleButtonClick = () => {
    setButtonsIsvisble(!buttonsIsvisible);
  };

  const dashdata = myDashboard.data;

  const [selectCity, setSelectedCity] = useState<string | null>(null);
  const [areaCategory, setAreaCategory] = useState<
    string[] | { menu: string }[]
  >([]);
  const [selectAreas, setSelectedAreas] = useState<string[]>([]);

  const handleCityChange = (cityName: string) => {
    setSelectedCity(cityName);
    const country = cityCategory.data.find((cat) => cat.city === cityName);
    setAreaCategory(country ? country.area : []);
    console.log(country?.area);
  };

  const handleCheckboxChange = (menu: string) => {
    setSelectedAreas((prevSelectedAreas) =>
      prevSelectedAreas?.includes(menu)
        ? prevSelectedAreas.filter((area) => area !== menu)
        : [...prevSelectedAreas, menu]
    );
  };

  // main category
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [subCategories, setSubCategories] = useState<
    string[] | { menu: string }[]
  >([]);

  const handleCategoryChange = (categoryName: string) => {
    setSelectedCategory(categoryName);
    const category = mainCategory.data.find((cat) => cat.name === categoryName);
    setSubCategories(category ? category.sub : []);
    console.log(category?.sub);
  };

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

  const handleClose = () => {
    setIsOpenMajor(false);
  };

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleBackground = (e: React.MouseEvent<HTMLDivElement>) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      setIsOpenMajor(false);
    }
  };

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
          category={mainCategory.data.map((cat) => ({ name: cat.name }))}
          onSelect={handleCategoryChange}
          subCategory={subCategories}
          toggleDropdownMajor={toggleDropdownMajor}
          onClose={handleClose}
          // Area
          city={cityCategory.data.map((cat) => ({ city: cat.city }))}
          areaCategory={areaCategory}
          handleCityChange={handleCityChange}
          handleCheckboxChange={handleCheckboxChange}
          selectCity={selectCity}
          selectAreas={selectAreas}
          selectedOptionsArea={selectedOptionsArea}
          isOpenSubArea={isOpenSubArea}
          subDropdownArea={subDropdownArea}
          // Career
          handleOptionsCareer={handleOptionsCareer}
          selectedOptionsCareer={selectedOptionsCareer}
          isOpenSubCareer={isOpenSubCareer}
          subDropdownCareer={subDropdownCareer}
          onChangeValue={handleSliderChange}
          rangeValue={rangeValue}
          getCareer={getCareer}
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
        <S.ColonyMoreButton>
          {buttonsIsvisible && (
            <S.hiddenButtonGroup className="hidden">
              <IconButton
                src="/assets/svg/topButton.svg"
                type="button"
                color="moreButtonSub"
                onClick={scrollTop}
              />
              <IconButton
                src="/assets/svg/writeButton.svg"
                type="button"
                color="moreButtonSub"
              />
            </S.hiddenButtonGroup>
          )}
          <IconButton
            width="20px"
            src="/assets/svg/moreButton.svg"
            type="button"
            color="moreButton"
            onClick={handleButtonClick}
          />
        </S.ColonyMoreButton>
      </S.ColonyMainSection>
    </S.FindColonyPage>
  );
};
