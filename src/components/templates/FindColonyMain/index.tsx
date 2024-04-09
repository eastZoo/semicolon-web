import { StackCategory } from "@/components/organisms/StackCategory";
import * as S from "./findColonyPage.style";
import { myDashboard } from "../../../data/dummey";
import { useState } from "react";

export const FindColonyMain: React.FC = () => {
  const data = myDashboard.data;

  const [isOpenMajor, setIsOpenMajor] = useState(false);
  const [isOpenMajorDetail, setIsOpenMajorDetail] = useState(false);
  
  const [isOpenSubArea, setIsOpenSubArea] = useState(false);
  const [selectedOptionsArea, setSelectedOptionsArea] = useState<any[]>([]);
  
  const [isOpenSubCareer, setIsOpenSubCareer] = useState(false);
  const [selectedOptionsCareer, setSelectedOptionsCareer] = useState<any[]>([]);
  
  const [isOpenSubStack, setIsOpenSubStack] = useState(false);
  const [selectedOptionsStack, setSelectedOptionsStack] = useState<any[]>([]);
  
  const [isOpenSubStatus, setIsOpenSubStatus] = useState(false);
  const [selectedOptionsStatus, setSelectedOptionsStatus] = useState<any[]>([]);



  const toggleDropdownMajor = () => {
    setIsOpenMajor(!isOpenMajor);
    setIsOpenMajorDetail(false);
  };

  const toggleDropdownMajorDetail = () => {
    setIsOpenMajorDetail(!isOpenMajorDetail);
    setIsOpenMajor(false);
  }

  const subDropdownArea = () => {
    setIsOpenSubArea(!isOpenSubArea);
    setIsOpenSubCareer(false);
    setIsOpenSubStack(false);
    setIsOpenSubStatus(false);
  }

  const handleOptionsArea = (option: any) => {
    if (selectedOptionsArea.includes(option)) {
      setSelectedOptionsArea(selectedOptionsArea.filter((item) => item !== option));
    } else {
      setSelectedOptionsArea([...selectedOptionsArea, option]);
    }
  }

  const subDropdownCareer = () => {
    setIsOpenSubCareer(!isOpenSubCareer);
    setIsOpenSubArea(false);
    setIsOpenSubStack(false);
    setIsOpenSubStatus(false);
  };

  const handleOptionsCareer = (option: any) => {
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

  const handleOptionsStack = (option: any) => {
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

  const handleOptionsStatus = (option: any) => {
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
      <S.ColonyMainSection></S.ColonyMainSection>
    </S.FindColonyPage>
  );
};
