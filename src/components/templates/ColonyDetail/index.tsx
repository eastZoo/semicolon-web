import { Button, IconButton } from "@/components/atoms/Button";
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
              <div className="stackGroup">
                {colony.stack?.map((stack, index) => {
                  return (
                    <IconButton
                      key={index}
                      src={`/assets/svg/` + stack + `.svg`}
                      type="button"
                      text={stack}
                      className="logoBtn"
                    />
                  );
                })}
              </div>
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
        <S.applySection>
          <S.apySection>
            <S.btnSection>
              <img src="/assets/svg/profile.svg" />
              <h2>{colony.title}</h2>
              <p>{colony.team}</p>
              <div className="btnGroup">
                <Button type="button" label="지원하기" color="applyButton" />
                <Button type="button" label="문의하기" color="noticeButton" />
              </div>
              <div className="iconGroup">
                <IconButton
                  type="button"
                  src="/assets/svg/icon_share.svg"
                  text="공유"
                  className="share_like"
                />
                <p>|</p>
                <IconButton
                  type="button"
                  src="/assets/svg/icon_like.svg"
                  text="좋아요"
                  className="share_like"
                />
              </div>
            </S.btnSection>
            <S.adSection></S.adSection>
          </S.apySection>
        </S.applySection>
      </S.ColonyDetailMain>
    </S.ColonyDetailPage>
  );
};

export default ColonyDetail;
