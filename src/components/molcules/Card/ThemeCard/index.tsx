import { BaseCard } from "..";
import * as S from "../card.style";

interface ThemeCardProps extends BaseCard {
  title: string;
  src: any;
}

export const ThemeCard = ({ title, src }: ThemeCardProps) => {
  return (
    <S.ThemeCard>
      <p>{title}</p>
      <img src={src} alt="test" />
    </S.ThemeCard>
  );
};
