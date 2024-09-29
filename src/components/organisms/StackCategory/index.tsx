import {
  CheckboxDropdown,
  DropdownCategory,
  ShapeDropdown,
  SearchDropdown,
} from "../../molcules/DropdownMenu";
import * as S from "./StackCategory.style";

export const StackCategory = ({
  //** 메인 */
  isOpenMajor,
  toggleDropdownMajor,
  category,
  subCategory,
  handleCategoryChange,
  handleSubChange,
  selectSub,
  renderLabelMajor,
  //** 지역 */
  isOpenSubArea,
  subDropdownArea,
  city,
  areaCategory,
  handleCityChange,
  handleCheckboxChange,
  selectCity,
  selectAreas,
  selectedOptionsArea,
  //** 경력 */
  isOpenSubCareer,
  subDropdownCareer,
  handleSliderChange,
  getCareer,
  rangeValue,
  //** 기술 */
  isOpenSubStack,
  subDropdownStack,
  stackData,
  handleStackChange,
  selectStack,

  //** 공통 */
  onClose,
  handleBackground,
  handleTagRemove,
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
          subCategory={subCategory}
          handleCategoryChange={handleCategoryChange}
          handleSubChange={handleSubChange}
          handleBackground={handleBackground}
          selectSub={selectSub}
          toggleDropdown={toggleDropdownMajor}
          isOpen={isOpenMajor}
          onClose={onClose}
          selectedOption={renderLabelMajor}
        />
      </S.mainStack>
      <S.subStack>
        <CheckboxDropdown
          items="지역"
          city={city}
          areaCategory={areaCategory}
          toggleDropdown={subDropdownArea}
          handleOptionChange={handleCityChange}
          handleCheckboxChange={handleCheckboxChange}
          selectCity={selectCity}
          selectAreas={selectAreas}
          isOpen={isOpenSubArea}
          onClose={onClose}
          handleTagRemove={handleTagRemove}
        />

        <ShapeDropdown
          items="경력"
          isOpen={isOpenSubCareer}
          toggleDropdown={subDropdownCareer}
          handleSliderChange={handleSliderChange}
          rangeValue={rangeValue}
          getCareer={getCareer}
          onClose={onClose}
        />

        <SearchDropdown
          items="기술"
          stackData={stackData}
          isOpen={isOpenSubStack}
          toggleDropdown={subDropdownStack}
          handleStackChange={handleStackChange}
          handleTagRemove={handleTagRemove}
          selectStack={selectStack}
          onClose={onClose}
        />
      </S.subStack>
    </S.category>
  );
};
