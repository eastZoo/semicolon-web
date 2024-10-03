import * as S from "../card.style";

interface ThemeCardProps {
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
