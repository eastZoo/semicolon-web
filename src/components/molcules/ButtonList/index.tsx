"use client";

import { Button } from "@/components/atoms/Button";
import * as S from "./buttonList.styles";

export type ButtonListProps = {
  items?: any[];
  onItemClick?: (item: string) => void;
};

export const ButtonList = ({ items, onItemClick }: ButtonListProps) => {
  return (
    <S.btnList>
      <ul>
        {items?.map((item) => (
          <li key={item.status_id}>
            <Button
              label={item.status}
              color="btnList"
              width="80px"
              type="button"
              onClick={() => onItemClick?.(item.status)}
            />
          </li>
        ))}
      </ul>
    </S.btnList>
  );
};
