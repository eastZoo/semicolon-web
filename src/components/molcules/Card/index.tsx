import { ViewImageBox } from "../ImageBox";
import { IconButton } from "../../atoms/Button";
import * as S from "./card.style";

interface Card {
  // 공통
  width?: string;
  height?: string;
  title?: string;
  subtitle?: string;
  src?: any;
  className?: string;
  children?: any;
  // 개별
  category?: string;
  user?: string;
  stack?: string;
  view?: string;
  view_src?: any;
  label?: string;
  book_src?: any;
  bookmark_count?: string;
  // 데이터
  bookmarked?: boolean;
}

export const ThemeCard = ({ title, src }: Card) => {
  return (
    <S.ThemeCard>
      <p>{title}</p>
      <img src={src} />
    </S.ThemeCard>
  );
};

export const ColonyCard = ({
  width,
  height,
  title,
  src,
  category,
  user,
  stack,
  view,
  view_src,
  bookmark_count,
  bookmarked,
}: Card) => {
  return (
    <S.colonyCardSection>
      <S.colonyCard width={width} height={height}>
        <div className="viewImageP">
          <ViewImageBox text={view} src={view_src} className="viewImage" />
          <img src={src} className="mainImage" />
        </div>
        <div>
          <S.Category>{category}</S.Category>
          <S.Title>{title}</S.Title>
          <S.Stack>{stack}</S.Stack>
        </div>
        <div className="bookmarkP">
          <p>
            by <S.User>{user}</S.User>
          </p>
          {bookmarked ? (
            <IconButton
              src="/assets/svg/bookmark_isTrue.svg"
              text={bookmark_count}
              type="button"
            />
          ) : (
            <IconButton
              src="/assets/svg/bookmark_disable.svg"
              text={bookmark_count}
              type="button"
            />
          )}
        </div>
      </S.colonyCard>
    </S.colonyCardSection>
  );
};

export const BannerCard = ({
  width,
  height,
  title,
  subtitle,
  className,
}: Card) => {
  return (
    <S.bannerCardSection width={width} height={height} className={className}>
      <S.bannerCard>
        <S.Subtitle>{subtitle}</S.Subtitle>
        <S.Title>{title}</S.Title>
      </S.bannerCard>
    </S.bannerCardSection>
  );
};
