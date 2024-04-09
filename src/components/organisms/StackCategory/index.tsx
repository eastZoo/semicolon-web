import {
  CheckboxDropdown,
  DropdownCategory,
} from "../../molcules/DropdownMenu";
import * as S from "./StackCategory.style";

export const StackCategory = ({
  data,
  isOpenMajor,
  isOpenMajorDetail,
  toggleDropdownMajor,
  toggleDropdownMajorDetail,
  isOpenSubArea,
  isOpenSubCareer,
  isOpenSubStack,
  isOpenSubStatus,
  subDropdownArea,
  subDropdownCareer,
  subDropdownStack,
  subDropdownStatus,
}: any) => {
  return (
    <S.category>
      <S.mainStack>
        <DropdownCategory
          items="개발"
          srcUp="/assets/svg/dropdown_down.svg"
          srcDown="/assets/svg/dropdown_up.svg"
          alt="카테고리"
          category_items={data}
          isOpen={isOpenMajor}
          toggleDropdown={toggleDropdownMajor}
        />
        <DropdownCategory
          items="개발 전체"
          srcUp="/assets/svg/dropdown_down.svg"
          srcDown="/assets/svg/dropdown_up.svg"
          alt="카테고리"
          category_items={data}
          isOpen={isOpenMajorDetail}
          toggleDropdown={toggleDropdownMajorDetail}
        />
      </S.mainStack>
      <S.subStack>
        <CheckboxDropdown
          items="지역"
          category_items={data}
          isOpen={isOpenSubArea}
          toggleDropdown={subDropdownArea}
        />
        <CheckboxDropdown
          items="경력"
          category_items={data}
          isOpen={isOpenSubCareer}
          toggleDropdown={subDropdownCareer}
        />
        <CheckboxDropdown
          items="기술스택"
          category_items={data}
          isOpen={isOpenSubStack}
          toggleDropdown={subDropdownStack}
        />
        <CheckboxDropdown
          items="모집상태"
          category_items={data}
          isOpen={isOpenSubStatus}
          toggleDropdown={subDropdownStatus}
        />
      </S.subStack>
    </S.category>
  );
};
