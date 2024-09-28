import { StackCategory } from "@/components/organisms/StackCategory";
import * as S from "./findColonyPage.style";
import {
  myDashboard,
  findColonyData,
  ColonyData,
  mainCategory,
  cityCategory,
  stackCategory,
  statusCategory,
} from "../../../data/dummey";
import * as SColonySection from "../../organisms/FindColonySection/FindColonySection.style";
import { useState, useRef, useEffect, useCallback } from "react";
import { ColonyCard } from "@/components/molcules/Card";
import AdSection from "@/components/organisms/AdSection";
import * as React from "react";
import { IconButton } from "@/components/atoms/Button";
import { ButtonList } from "@/components/molcules/ButtonList";
import { ContourLine, Line } from "@/components/atoms/Line";

export const FindColonyMain: React.FC = ({ bookmarked }: any) => {
  /** 모집 상태  */
  const status = statusCategory.data;

  /** 경력 기능 */
  const stack = stackCategory.data;
  const [rangeValue, setRangevalue] = useState<number>(0);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setRangevalue(value);
    console.log(value);
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

  /** top 버튼 기능 */
  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  /** Top, write 버튼 그룹 버튼 */
  const [buttonsIsvisible, setButtonsIsvisble] = useState(false);

  const handleButtonClick = () => {
    setButtonsIsvisble(!buttonsIsvisible);
  };

  /** 스택 드롭다운 */
  const [selectStack, setSelectedStack] = useState<string[]>([]);

  const handleStackChange = (stackName: string) => {
    setSelectedStack((prev) => {
      const selectedStack = prev?.includes(stackName);
      const selection = selectedStack
        ? prev.filter((s) => s !== stackName)
        : [...prev, stackName];
      if (selection.length > 5) {
        return prev;
      }
      return selection;
    });
    console.log(selectStack);
  };

  /** 지역 드롭다운 */
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
    console.log(selectAreas);
  };

  /** main category */
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [subCategories, setSubCategories] = useState<
    string[] | { menu: string }[]
  >([]);
  const [selectSub, setSelectSub] = useState<string[]>([]);

  const handleCategoryChange = (categoryName: string) => {
    setSelectedCategory(categoryName);
    const category = mainCategory.data.find((cat) => cat.name === categoryName);
    setSubCategories(category ? category.sub : []);
    console.log(category?.sub);
  };

  const handleSubChange = (menu: string) => {
    setSelectSub((prevSelectSub) =>
      prevSelectSub?.includes(menu)
        ? prevSelectSub.filter((sub) => sub !== menu)
        : [...prevSelectSub, menu]
    );
  };

  /** infinity scroll */
  const [colonyData, setColonyData] = useState<ColonyData[]>([]);
  const [offset, setOffset] = useState(0);
  const [isFetch, setIsFetch] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const observerRef = useRef<IntersectionObserver | null>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchColonyData();
  }, []);

  useEffect(() => {
    if (!targetRef.current) return;
    const observer = new IntersectionObserver(intersectionObserver);
    observerRef.current = observer;
    observer.observe(targetRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [colonyData]);

  const fetchColonyData = async () => {
    if (isFetch || !hasMore) return;
    setIsFetch(true);

    try {
      // axios 사용시 해당 부분에 데이터 요청 url
      const newData = findColonyData.slice(offset, offset + 12);
      setColonyData((prevData) => [...prevData, ...newData]);
      setOffset(offset + 12);
      if (offset >= findColonyData.length) {
        setHasMore(false);
      }
    } catch (error) {
      console.log("데이터 가져오기 실패: ", error);
    } finally {
      setIsFetch(false);
    }
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

  // 드롭다운 닫기 버튼
  const handleClose = () => {
    setIsOpenMajor(false);
    setIsOpenSubArea(false);
    setIsOpenSubCareer(false);
    setIsOpenSubStack(false);
  };

  const [isOpenMajor, setIsOpenMajor] = useState(false);

  const [isOpenSubArea, setIsOpenSubArea] = useState(false);

  const [isOpenSubCareer, setIsOpenSubCareer] = useState(false);

  const [isOpenSubStack, setIsOpenSubStack] = useState(false);

  const handleTagRemove = (item: string) => {
    setSelectedAreas(selectAreas.filter((i) => i != item));
    setSelectedStack(selectStack.filter((s) => s !== item));
  };

  const toggleDropdownMajor = () => {
    setIsOpenMajor(!isOpenMajor);
    setIsOpenSubArea(false);
    setIsOpenSubCareer(false);
    setIsOpenSubStack(false);
  };

  const subDropdownArea = () => {
    setIsOpenMajor(false);
    setIsOpenSubArea(!isOpenSubArea);
    setIsOpenSubCareer(false);
    setIsOpenSubStack(false);
  };

  const subDropdownCareer = () => {
    setIsOpenMajor(false);
    setIsOpenSubCareer(!isOpenSubCareer);
    setIsOpenSubArea(false);
    setIsOpenSubStack(false);
  };

  const subDropdownStack = () => {
    setIsOpenMajor(false);
    setIsOpenSubStack(!isOpenSubStack);
    setIsOpenSubCareer(false);
    setIsOpenSubArea(false);
  };

  const renderLabelMajor = () => {
    if (selectedCategory?.length === 0) {
      return '직군 - 직무';
    } else if (selectSub.length === 1) {
      return selectedCategory + selectSub[0];
    } else{
      return `${selectedCategory} - ${selectSub[0]} 외 ${selectSub.length -1}`
    }
  }


  return (
    <S.FindColonyPage>
      <S.CategorySection>
        <StackCategory
          // Major
          isOpenMajor={isOpenMajor}
          category={mainCategory.data.map((cat) => ({ name: cat.name }))}
          subCategory={subCategories}
          handleCategoryChange={handleCategoryChange}
          handleSubChange={handleSubChange}
          selectSub={selectSub}
          toggleDropdownMajor={toggleDropdownMajor}
          selectedOptions={renderLabelMajor}
          // Area
          isOpenSubArea={isOpenSubArea}
          city={cityCategory.data.map((cat) => ({ city: cat.city }))}
          areaCategory={areaCategory}
          handleCityChange={handleCityChange}
          handleCheckboxChange={handleCheckboxChange}
          selectCity={selectCity} // 확인
          selectAreas={selectAreas}
          subDropdownArea={subDropdownArea}
          // Career
          isOpenSubCareer={isOpenSubCareer}
          subDropdownCareer={subDropdownCareer}
          onChangeValue={handleSliderChange}
          rangeValue={rangeValue}
          getCareer={getCareer}
          // Stack
          isOpenSubStack={isOpenSubStack}
          subDropdownStack={subDropdownStack}
          stackData={stack}
          handleStackChange={handleStackChange}
          selectStack={selectStack}
          // Common
          onClose={handleClose}
          handleTagRemove={handleTagRemove}
        />
        <ButtonList items={status} />
      </S.CategorySection>
      <ContourLine name="findColonyTop" />
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
        {hasMore && (
          <S.loadingSection ref={targetRef}>
            <img src="/assets/svg/loading.svg" alt="loading" />
          </S.loadingSection>
        )}
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
                className="write"
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
