import { IconButton } from "@/components/atoms/Button";
import {
  CheckboxDropdown,
  DropdownCategory,
} from "../../molcules/DropdownMenu";
import * as S from "./StackCategory.style";

export const StackCategory = ({
  data,
  isOpenMajor,
  toggleDropdownMajor,
  isOpenSubArea,
  isOpenSubCareer,
  isOpenSubStack,
  isOpenSubStatus,
  subDropdownArea,
  subDropdownCareer,
  subDropdownStack,
  subDropdownStatus,
  handleOptionsMajor,
  handleOptionsArea,
  handleOptionsCareer,
  handleOptionsStack,
  handleOptionsStatus,
  selectedOptionsArea,
  selectedOptionsCareer,
  selectedOptionsStack,
  selectedOptionsStatus,
  category,
  selectedCategory,
  onCategoryChange,
  subcategories,
  selectedSubcategory,
  onSubcategoryChange,
}: any) => {
  return (
    <S.category>
      <S.mainStack>
        <DropdownCategory
          items="개발"
          srcUp="/assets/svg/dropdown_down.svg"
          srcDown="/assets/svg/dropdown_up.svg"
          alt="개발 카테고리"
          category={category}
          subcategories={subcategories}
          selectedCategory={selectedCategory}
          selectedSubcategory={selectedSubcategory}
          onSubcategoryChange={onSubcategoryChange}
          onCategoryChange={onCategoryChange}
          isOpen={isOpenMajor}
          toggleDropdown={toggleDropdownMajor}
          handleOptionChange={handleOptionsMajor}
        />
      </S.mainStack>
      <S.subStack>
        <CheckboxDropdown
          items="지역"
          category_items={data}
          isOpen={isOpenSubArea}
          toggleDropdown={subDropdownArea}
          handleOptionChange={handleOptionsArea}
          selectedOptions={selectedOptionsArea}
        />
        <CheckboxDropdown
          items="경력"
          category_items={data}
          isOpen={isOpenSubCareer}
          toggleDropdown={subDropdownCareer}
          handleOptionChange={handleOptionsCareer}
          selectedOptions={selectedOptionsCareer}
        />
        <CheckboxDropdown
          items="기술"
          category_items={data}
          isOpen={isOpenSubStack}
          toggleDropdown={subDropdownStack}
          handleOptionChange={handleOptionsStack}
          selectedOptions={selectedOptionsStack}
        />
        <CheckboxDropdown
          items="모집"
          category_items={data}
          isOpen={isOpenSubStatus}
          toggleDropdown={subDropdownStatus}
          handleOptionChange={handleOptionsStatus}
          selectedOptions={selectedOptionsStatus}
        />
      </S.subStack>
    </S.category>
  );
};
