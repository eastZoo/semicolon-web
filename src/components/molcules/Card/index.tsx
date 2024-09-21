import * as S from "./card.style";

export interface BaseCard {
  width?: string;
  height?: string;
  title?: string;
  src?: any;
}
interface CardProps extends BaseCard {
  title: string;
  subtitle: string;
  className?: string;
}

export const Card = ({
  width,
  height,
  title,
  subtitle,
  className,
}: CardProps) => {
  return (
    <S.bannerCardSection width={width} height={height} className={className}>
      <S.bannerCard>
        <S.Subtitle>{subtitle}</S.Subtitle>
        <S.Title>{title}</S.Title>
      </S.bannerCard>
    </S.bannerCardSection>
  );
};
