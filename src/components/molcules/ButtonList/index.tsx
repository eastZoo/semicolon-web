"use client";

import { Button } from "@/components/atoms/Button";
import * as S from "./buttonList.styles";

export type ButtonListProps = {
  items?: string[];
  onItemClick?: (item: string) => void;
};

export const ButtonList = ({ items, onItemClick }: ButtonListProps) => {
  return (
    <S.btnList>
      <ul>
        {items?.map((item, index) => (
          <li>
            <Button
              label={item}
              color="btnList"
              width="80px"
              type="button"
              key={index}
              onClick={() => onItemClick?.(item)}
            />
          </li>
        ))}
      </ul>
    </S.btnList>
  );
};
