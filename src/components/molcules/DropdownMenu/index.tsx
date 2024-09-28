import { ContourLine } from "@/components/atoms/Line";
import Image from "next/image";
import Link from "next/link";
import { Button, IconButton } from "../../atoms/Button";
import * as S from "./DropdownMenu";
import * as Style from "../../atoms/Line";
interface dashDropdownProps {
  items?: any[];
  toggleDropdown?: () => void;
  isOpen?: boolean;
}

export const DropdownMenu: React.FC<dashDropdownProps> = ({
  items,
  toggleDropdown,
  isOpen,
}) => {
  return (
    <S.DropdownMenu>
      <Button
        onClick={toggleDropdown}
        type="button"
        color="dropdown_dashboard"
        width="120px"
        height={30}
      >
        <Image
          src="/assets/svg/dashIcon.svg"
          alt="대시보드"
          width="15"
          height={15}
        />
        {isOpen ? "내 대시보드 ▲" : "내 대시보드 ▼"}
      </Button>
      {isOpen && (
        <S.DropdownList>
          {items?.map((item, index) => (
            <S.DropdownItem key={index}>
              <S.ItemGroup>
                <Link href="/">
                  <Image
                    src={item.src}
                    alt="default_profile"
                    width="30"
                    height="30"
                  />
                  <S.ItemContent>
                    {item.group}
                    <p>{item.decr}</p>
                  </S.ItemContent>
                </Link>
              </S.ItemGroup>
              <ContourLine />
            </S.DropdownItem>
          ))}
          <Link href="/">
            <Image
              src="/assets/svg/insert.svg"
              width="20"
              height={20}
              alt="콜로니 만들기"
            />
            <span>콜로니 만들기</span>
          </Link>
        </S.DropdownList>
      )}
    </S.DropdownMenu>
  );
};

interface categoryProps {
  items?: string;
  srcUp?: any;
  srcDown?: any;
  alt?: any;
  category_items?: { city: string }[];
  toggleDropdown?: () => void;
  isOpen?: boolean;
  handleOptionChange?: (option: string) => void; // 확인
  category?: { name: string }[];
  subCategory?: { menu: string }[];
  handleCategoryChange?: (categoryName: string) => void;
  onChange?: (value: string) => void;
  onClose?: () => void;
  handleBackground?: (e: React.MouseEvent<HTMLDivElement>) => void;
  city?: { city: string }[];
  areaCategory?: { menu: string }[];
  handleCheckboxChange?: (menu: string) => void;
  selectCity?: string;
  selectAreas?: string[];
  handleSliderChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  rangeValue?: any;
  getCareer?: (value: number) => string;
  handleTagRemove?: (area: string) => void;
  stackData?: { stack: string }[];
  selectStack?: string[];
  handleStackChange?: (stack: string) => void;
  handleSubChange?: (menu: string) => void;
  selectSub?: string[];
  selectedOption?: () => void;
}

export const DropdownCategory: React.FC<categoryProps> = ({
  items,
  srcUp,
  srcDown,
  alt,
  category,
  subCategory,
  handleCategoryChange,
  isOpen,
  toggleDropdown,
  onClose,
  handleBackground,
  onChange,
  handleSubChange,
  selectSub,
  selectedOption,
}) => {
  return (
    <S.DropdownMenu>
      <IconButton
        type="button"
        width="100px"
        height={30}
        color="dropdown"
        onClick={toggleDropdown}
      >
        {items}
        {isOpen ? (
          <Image src={srcDown} alt={alt} width="23" height={23} />
        ) : (
          <Image src={srcUp} alt={alt} width="23" height={23} />
        )}
      </IconButton>
      {isOpen && (
        <S.Dropdown onClick={handleBackground} width="500px">
          <S.DropdownTop>
            <p>{items}</p>
            <IconButton
              src="/assets/svg/exist.svg"
              type="button"
              onClick={onClose}
            ></IconButton>
          </S.DropdownTop>
          <S.DropdownMiddle>
            <S.DropdownList>
              {category?.map((item, index) => (
                <S.DropdownItem key={index} value={item.name}>
                  <S.ItemGroup>
                    <S.ItemContent>
                      <Button
                        type="button"
                        color="mainDropdown"
                        width="100%"
                        key={item.name}
                        onClick={() => handleCategoryChange && handleCategoryChange(item.name)}
                      >
                        {item.name}
                        <span>
                          <img src="/assets/svg/next-right.svg" />
                        </span>
                      </Button>
                    </S.ItemContent>
                  </S.ItemGroup>
                </S.DropdownItem>
              ))}
            </S.DropdownList>
            <S.DropdownList>
              {subCategory?.map((sub, idx) => (
                <S.DropdownItem key={idx} value={sub.menu}>
                  <S.ItemGroup>
                    <S.ItemContent>
                      <Button
                        type="button"
                        color="mainDropdown"
                        width="100%"
                        key={sub.menu}
                        onChange={() =>
                          onChange && onChange(sub.menu)
                        }
                      >
                        <span>{sub.menu}</span>
                        <input
                          type="checkbox"
                          value={sub.menu}
                          onChange={() =>
                            handleSubChange && handleSubChange(sub.menu)
                          }
                          checked={selectSub?.includes(sub.menu)}
                        />
                      </Button>
                    </S.ItemContent>
                  </S.ItemGroup>
                </S.DropdownItem>
              ))}
            </S.DropdownList>
          </S.DropdownMiddle>
          <S.DropdownBottom>
            <Button
              type="button"
              label="초기화"
              color="resetButton"
              width="100px"
            />
            <Button
              type="submit"
              label="적용"
              color="submitButton"
              width="100px"
            />
          </S.DropdownBottom>
        </S.Dropdown>
      )}
    </S.DropdownMenu>
  );
};

export const CheckboxDropdown: React.FC<categoryProps> = ({
  items,
  city,
  areaCategory,
  handleOptionChange,
  isOpen,
  toggleDropdown,
  onClose,
  onChange,
  handleBackground,
  handleCheckboxChange,
  selectAreas,
  handleTagRemove,
}) => {
  return (
    <S.DropdownMenu>
      <S.DropdownButton>
        <p>{items}</p>
        <Button type="button" color="baseDropdown" onClick={toggleDropdown}>
          <span>
            {isOpen
              ? `▲`
              : `▼`}
          </span>
        </Button>
      </S.DropdownButton>

      {isOpen && (
        <S.Dropdown width="500px" onClick={handleBackground}>
          <S.DropdownTop>
            <p>{items}</p>
            <IconButton
              src="/assets/svg/exist.svg"
              type="button"
              onClick={onClose}
            ></IconButton>
          </S.DropdownTop>
          <S.DropdownMiddle id="sub">
            <S.DropdownList>
              {city?.map((item, index) => (
                <S.DropdownItem key={index} value={item.city}>
                  <S.ItemGroup>
                    <S.ItemContent>
                      <Button
                        type="button"
                        color="mainDropdown"
                        width="100%"
                        key={item.city}
                        onClick={() =>
                          handleOptionChange && handleOptionChange(item.city)
                        }
                      >
                        {item.city}
                        <span>
                          <img src="/assets/svg/next-right.svg" />
                        </span>
                      </Button>
                    </S.ItemContent>
                  </S.ItemGroup>
                </S.DropdownItem>
              ))}
            </S.DropdownList>
            <S.DropdownList>
              {areaCategory?.map((area, idx) => (
                <S.DropdownItem key={idx} value={area.menu}>
                  <S.ItemGroup>
                    <S.ItemContent>
                      <Button
                        type="button"
                        color="mainDropdown"
                        width="100%"
                        key={area.menu}
                        onChange={() => onChange && onChange(area.menu)}
                      >
                        <span>{area.menu}</span>
                        <input
                          type="checkbox"
                          value={area.menu}
                          onChange={() =>
                            handleCheckboxChange &&
                            handleCheckboxChange(area.menu)
                          }
                          checked={selectAreas?.includes(area.menu)}
                        />
                      </Button>
                    </S.ItemContent>
                  </S.ItemGroup>
                </S.DropdownItem>
              ))}
            </S.DropdownList>
          </S.DropdownMiddle>
          <Style.ContourLine />
          <S.BadgesButtonGroup>
            {selectAreas && selectAreas?.length > 0 ? (
              <S.BadgesButton>
                {selectAreas?.map((area, index) => (
                  <S.BadgesList>
                    <Button
                      type="button"
                      color="badgesButton"
                      width="auto"
                      key={index}
                    >
                      {area}
                      <span>
                        <img
                          src="/assets/svg/exist.svg"
                          width="13px"
                          onClick={() => handleTagRemove?.(area)}
                        />
                      </span>
                    </Button>
                  </S.BadgesList>
                ))}
              </S.BadgesButton>
            ) : (
              <p></p>
            )}
          </S.BadgesButtonGroup>
          <S.DropdownBottom>
            <Button
              type="button"
              label="초기화"
              color="resetButton"
              width="30%"
            />
            <Button
              type="submit"
              label="적용"
              color="submitButton"
              width="70%"
            />
          </S.DropdownBottom>
        </S.Dropdown>
      )}
    </S.DropdownMenu>
  );
};

export const ShapeDropdown: React.FC<categoryProps> = ({
  items,
  isOpen,
  handleBackground,
  toggleDropdown,
  onClose,
  handleSliderChange,
  rangeValue = 0,
  getCareer,
}) => {
  return (
    <S.DropdownMenu>
      <S.DropdownButton>
        <p>{items}</p>
        <Button type="button" color="baseDropdown" onClick={toggleDropdown}>
          <span>
            {isOpen
              ? `▲`
              : `▼`}
          </span>
        </Button>
      </S.DropdownButton>

      {isOpen && (
        <S.Dropdown width="500px" onClick={handleBackground}>
          <S.DropdownTop>
            <p>{items}</p>
            <IconButton
              src="/assets/svg/exist.svg"
              type="button"
              onClick={onClose}
            ></IconButton>
          </S.DropdownTop>
          <S.SliderSection>
            <p>{getCareer?.(rangeValue)}</p>
            <input
              type="range"
              onChange={handleSliderChange}
              min={0}
              max={10}
              defaultValue={rangeValue}
              step={1}
              id="slider"
            />
            <p>{rangeValue}</p>
          </S.SliderSection>
          <S.DropdownBottom>
            <Button
              type="button"
              label="초기화"
              color="resetButton"
              width="30%"
            />
            <Button
              type="submit"
              label="적용"
              color="submitButton"
              width="70%"
            />
          </S.DropdownBottom>
        </S.Dropdown>
      )}
    </S.DropdownMenu>
  );
};

export const SearchDropdown: React.FC<categoryProps> = ({
  items,
  isOpen,
  toggleDropdown,
  onClose,
  handleBackground,
  handleTagRemove,
  stackData,
  handleStackChange,
  selectStack,
}) => {
  return (
    <S.DropdownMenu>
      <S.DropdownButton>
        <p>{items}</p>
        <Button type="button" color="baseDropdown" onClick={toggleDropdown}>
          <span>{isOpen ? `▲` : ` ▼`}</span>
        </Button>
      </S.DropdownButton>

      {isOpen && (
        <S.Dropdown width="500px" onClick={handleBackground}>
          <S.DropdownTop>
            <p>{items}</p>
            <IconButton
              src="/assets/svg/exist.svg"
              type="button"
              onClick={onClose}
            ></IconButton>
          </S.DropdownTop>
          <S.searchSection>
            <S.searchBar>
              <img src="/assets/svg/search.svg" />
              <input
                type="search"
                placeholder="보유 기술스택을 검색해주세요."
              />
            </S.searchBar>
            <S.attentionText>
              <img src="/assets/svg/attention.svg" width="15px" /> 최대 5개까지
              선택 가능합니다.
            </S.attentionText>
            <S.stackList>
              {stackData?.map((stack, index) => (
                <S.stackBtnGroup key={index}>
                  <Button
                    type="button"
                    color="stackButton"
                    width="auto"
                    value={stack.stack}
                    select={selectStack?.includes(stack.stack)}
                    disabled={
                      selectStack?.includes(stack.stack) &&
                      selectStack?.length >= 5
                    }
                    onClick={() =>
                      handleStackChange && handleStackChange(stack.stack)
                    }
                  >
                    {stack.stack}
                  </Button>
                </S.stackBtnGroup>
              ))}
            </S.stackList>
          </S.searchSection>
          <Style.ContourLine />
          <S.BadgesButtonGroup>
            {selectStack && selectStack.length > 0 ? (
              <S.BadgesButton>
                {selectStack.map((stack, index) => (
                  <S.BadgesList key={index}>
                    <Button type="button" color="badgesButton" width="auto">
                      {stack}
                      <span>
                        <img
                          src="/assets/svg/exist.svg"
                          width="13px"
                          onClick={() => handleTagRemove?.(stack)}
                        />
                      </span>
                    </Button>
                  </S.BadgesList>
                ))}
              </S.BadgesButton>
            ) : (
              <p></p>
            )}
          </S.BadgesButtonGroup>
          <S.DropdownBottom>
            <Button
              type="button"
              label="초기화"
              color="resetButton"
              width="30%"
            />
            <Button
              type="submit"
              label="적용"
              color="submitButton"
              width="70%"
            />
          </S.DropdownBottom>
        </S.Dropdown>
      )}
    </S.DropdownMenu>
  );
};
