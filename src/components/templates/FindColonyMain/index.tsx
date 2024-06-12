import { StackCategory } from "@/components/organisms/StackCategory";
import * as S from "./findColonyPage.style";
import { myDashboard, findColonyData } from "../../../data/dummey";
import * as SColonySection from "../../organisms/FindColonySection/FindColonySection.style";
import { useState, useRef, useEffect, useCallback } from "react";
import { ColonyCard } from "@/components/molcules/Card";
import NoticeSection from "@/components/organisms/NoticeSection";
import AdSection from "@/components/organisms/AdSection";
import axios from "axios";

interface CData {
  id: string;
  name: string;
}

export const FindColonyMain: React.FC = ({ bookmarked }: any) => {
  const data = myDashboard.data;

  // infinity scroll
  const [cData, setCdata] = useState<CData[]>([]);
  const [isLoad, setIsLoad] = useState(false);
  const [offset, setOffset] = useState(0);
  const [stop, setStop] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);
  const target = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isLoad && !stop) {
      axios
        .get(` * 요청 url * `, {
          params: {
            offset,
            limit: 8,
          },
          headers: {
            Authorization: `data`,
          },
        })
        .then((res) => {
          setCdata((cData) => cData.concat(res.data));
          setOffset((offset) => offset + res.data.length);
          setIsLoad(false);

          if (res.data.length < 8) {
            setStop(true);
          }
        })
        .catch((err) => {
          console.log(err);
          setIsLoad(false);
        });
    }
  }, [isLoad, stop]);

  const getMoreItem = useCallback(() => {
    setIsLoad(true);
  }, []);

  const onIntersect = useCallback(
    async (
      [entry]: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      if (entry.isIntersecting && !isLoad) {
        observer.unobserve(entry.target);
        await getMoreItem();
        observer.observe(entry.target);
      }
    },
    [isLoad, getMoreItem]
  );

  useEffect(() => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(onIntersect);
    const { current: currentObserver } = observer;
    if (target.current) currentObserver.observe(target.current);
    return () => {
      if (currentObserver) currentObserver.disconnect();
    };
  }, [onIntersect]);

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
        <SColonySection.FindColonyCard ref={target}>
          {findColonyData.data.map((data, index) => (
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
      </S.ColonyMainSection>
    </S.FindColonyPage>
  );
};
