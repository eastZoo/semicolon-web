import { ContourLine } from "@/components/atoms/Line";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button, IconButton } from "../../atoms/Button";
import * as S from "./DropdownMenu";
interface DropdownProps {
  items?: any[];
  toggleDropdown?: () => void;
  isOpen?: boolean;
}

export const DropdownMenu: React.FC<DropdownProps> = ({
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
  current_item?: string;
  srcUp?: any;
  srcDown?: any;
  alt?: any;
  category_items?: any[];
  toggleDropdown?: () => void;
  isOpen?: boolean;
  className?: string;
  handleOptionChange?: (option: string) => void;
  selectedOptions?: string[];
  category: { name: string; sub: string[] }[];
  selectedCategory: string;
  onCategoryChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  subcategories: string[];
  selectedSubcategory: string;
  onSubcategoryChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const DropdownCategory: React.FC<categoryProps> = ({
  items,
  srcUp,
  srcDown,
  alt,
  isOpen,
  toggleDropdown,
  category,
  selectedCategory,
  onCategoryChange,
  subcategories,
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
        <S.Dropdown>
          <S.DropdownTop>
            <p>직군・직무</p>
            <IconButton src="/assets/svg/exist.svg" type="button"></IconButton>
          </S.DropdownTop>
          <S.DropdownMiddle>
            <S.DropdownList>
              {category?.map((cat) => (
                <S.DropdownItem value={cat.name} key={cat.name}>
                  <S.ItemGroup>
                    <S.ItemContent>
                      <Button
                        type="button"
                        color="mainDropdown"
                        width="100%"
                        height={50}
                      >
                        {cat.name}
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
              {subcategories?.map((sub) => (
                <S.DropdownItem key={sub} value={sub}>
                  <S.ItemGroup>
                    <S.ItemContent>
                      <Button
                        type="button"
                        color="mainDropdown"
                        width="100%"
                        height={50}
                      >
                        <span>{sub}</span>
                        <input type="checkbox" value={sub} id="check" />
                      </Button>
                    </S.ItemContent>
                  </S.ItemGroup>
                </S.DropdownItem>
              ))}
            </S.DropdownList>
          </S.DropdownMiddle>
        </S.Dropdown>
      )}
    </S.DropdownMenu>
  );
};

export const CheckboxDropdown: React.FC<categoryProps> = ({
  items,
  category_items,
  isOpen,
  toggleDropdown,
  selectedOptions,
  handleOptionChange,
  selectedSubcategory,
  onSubcategoryChange,
}) => {
  return (
    <S.DropdownMenu>
      <S.DropdownButton>
        <p>{items}</p>
        <Button type="button" color="baseDropdown" onClick={toggleDropdown}>
          {isOpen
            ? `${selectedOptions?.join(" ")} ▲`
            : `${selectedOptions?.join(" ")} ▼`}
        </Button>
      </S.DropdownButton>

      {isOpen && (
        <S.DropdownList>
          {category_items?.map((item, index) => (
            <S.DropdownItem key={index}>
              <label>
                <input
                  type="checkbox"
                  value={item.group}
                  checked={selectedOptions?.includes(item)}
                  onChange={() => handleOptionChange?.(item)}
                />
                <span>{item.group}</span>
              </label>
              <ContourLine />
            </S.DropdownItem>
          ))}
        </S.DropdownList>
      )}
    </S.DropdownMenu>
  );
};
