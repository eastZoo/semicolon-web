import { Button } from "@/atoms/Button";
import { ColonyCard } from "@/molcules/Card";
import * as S from "./FindColonySection.style";

import { findColonyData } from "../../../data/dummey";
import { ContourLine } from "@/components/atoms/Line";

export const FindColonySection = ({ bookmarked }: any) => {
  return (
    <S.FindColonySection>
      <S.FindColonyHeader>
        <div>
          <h1>Find Colony</h1>
          <p>현재 당신의 협력이 필요한 콜로니를 찾아 보세요.</p>
          <p>당신의 능력을 마음껏 펼쳐보세요.</p>
        </div>
        {findColonyData.length >= 8 ? (
          <Button type={"button"} color={"findColony"} label={"VIEW MORE"} />
        ) : (
          <Button
            type={"button"}
            color={"findColony_disable"}
            label={"VIEW MORE"}
          />
        )}
      </S.FindColonyHeader>
      <ContourLine />
      <S.FindColonyCard>
        {findColonyData.slice(0, 8).map((data, index) => (
          <ColonyCard
            bookmarked={bookmarked}
            key={index}
            title={data.title}
            src={data.src}
            category={data.category}
            stack={data.stack}
            user={data.user}
            view={data.view}
            view_src="/assets/svg/viewCount.svg"
            bookmark_count={data.bookmark}
          />
        ))}
      </S.FindColonyCard>
    </S.FindColonySection>
  );
};

export default FindColonySection;
