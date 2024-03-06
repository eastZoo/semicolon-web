import { BaseDropdown, DropdownCategory } from "../../molcules/DropdownMenu";
import * as S from "./StackCategory.style";

export const StackCategory = ({
  data,
  isOpenMajor,
  isOpenMajorDetail,
  toggleDropDown,
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
          toggleDropdown={toggleDropDown}
        />
        <DropdownCategory
          items="개발 전체"
          srcUp="/assets/svg/dropdown_down.svg"
          srcDown="/assets/svg/dropdown_up.svg"
          alt="카테고리"
          category_items={data}
          isOpen={isOpenMajorDetail}
          toggleDropdown={toggleDropDown}
        />
      </S.mainStack>
      <S.subStack>
        <BaseDropdown items="지역" />
        <BaseDropdown items="경력" />
        <BaseDropdown items="기술스택" />
        <BaseDropdown items="모집상태" />
      </S.subStack>
    </S.category>
  );
};
