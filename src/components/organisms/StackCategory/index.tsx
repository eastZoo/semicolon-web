import {
  CheckboxDropdown,
  DropdownCategory,
  ShapeDropdown,
  StatusDropdown,
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
  onSelect,
  subCategory,
  onClose,
  handleBackground,
  city,
  areaCategory,
  handleCityChange,
  handleCheckboxChange,
  selectCity,
  selectAreas,
  handleSliderChange,
  rangeValue,
  getCareer,
}: any) => {
  return (
    <S.category>
      <S.mainStack>
        <DropdownCategory
          items="직군・직무"
          srcUp="/assets/svg/dropdown_down.svg"
          srcDown="/assets/svg/dropdown_up.svg"
          alt="개발 카테고리"
          category={category}
          onSelect={onSelect}
          onClose={onClose}
          handleBackground={handleBackground}
          subCategory={subCategory}
          isOpen={isOpenMajor}
          toggleDropdown={toggleDropdownMajor}
          handleOptionChange={handleOptionsMajor}
        />
      </S.mainStack>
      <S.subStack>
        <CheckboxDropdown
          items="지역"
          city={city}
          areaCategory={areaCategory}
          isOpen={isOpenSubArea}
          toggleDropdown={subDropdownArea}
          handleOptionChange={handleCityChange}
          handleCheckboxChange={handleCheckboxChange}
          selectCity={selectCity}
          selectAreas={selectAreas}
          selectedOptions={selectedOptionsArea}
          onClose={onClose}
        />

        <ShapeDropdown
          items="경력"
          isOpen={isOpenSubCareer}
          toggleDropdown={subDropdownCareer}
          handleOptionChange={handleOptionsCareer}
          selectedOptions={selectedOptionsCareer}
          handleSliderChange={handleSliderChange}
          rangeValue={rangeValue}
          getCareer={getCareer}
          onClose={onClose}
        />

        <CheckboxDropdown
          items="기술"
          category_items={data}
          isOpen={isOpenSubStack}
          toggleDropdown={subDropdownStack}
          handleOptionChange={handleOptionsStack}
          selectedOptions={selectedOptionsStack}
        />
        <StatusDropdown
          items="모집"
          isOpen={isOpenSubStatus}
          toggleDropdown={subDropdownStatus}
          handleOptionChange={handleOptionsStatus}
          selectedOptions={selectedOptionsStatus}
        />
      </S.subStack>
    </S.category>
  );
};
