import { Button } from "@/components/atoms/Button";
import { ContourLine, Line } from "@/components/atoms/Line";
import { ColonyData } from "../../../data/dummey";
import * as S from "./colonyDetail.style";

interface ColonyDetailProps {
  colony: ColonyData;
}

export const ColonyDetail: React.FC<ColonyDetailProps> = ({ colony }) => {
  return (
    <S.ColonyDetailPage>
      <S.ColonyDetailMain>
        <S.decSection>
          <S.decMain>
            <h1>{colony.title}</h1>
            <p>{colony.team}</p>
            <div>
              {colony.tag?.map((tag, index) => {
                return (
                  <Button
                    key={index}
                    type="button"
                    label={`# ` + tag}
                    color="tagButton"
                  />
                );
              })}
            </div>
          </S.decMain>
          <ContourLine />
          <S.decSub>
            <div>
              <h2>기술스택</h2>
              <p>{colony.stack}</p>
            </div>
            <div>
              <h2>프로젝트 설명</h2>
              <p>{colony.dec}</p>
            </div>
            <div>
              <h2>모집인원</h2>
              <p>{colony.people}</p>
            </div>
            <div>
              <h2>지원 시 확인 사항</h2>
              <p>{colony.check}</p>
            </div>
          </S.decSub>
        </S.decSection>
      </S.ColonyDetailMain>
    </S.ColonyDetailPage>
  );
};

export default ColonyDetail;
