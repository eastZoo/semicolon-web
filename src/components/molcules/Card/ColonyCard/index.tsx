import { IconButton } from "@/components/atoms/Button";
import { BaseCard } from "..";
import { ViewImageBox } from "../../ImageBox";
import * as S from "../card.style";

interface ColonyCardProps extends BaseCard {
  category?: string;
  user?: string;
  stack?: string;
  view?: string;
  view_src?: any;
  bookmark_count?: string;
  bookmarked?: boolean;
}

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
}: ColonyCardProps) => {
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
