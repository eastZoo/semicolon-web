"use client";

import { Button } from "@/atoms/Button";
import Image from "next/image";
import Link from "next/link";
import * as S from "./ThemeSection.style";
import { ThemeCard } from "@/molcules/Card/ThemeCard";
import BackFalseArrow from "@/assets/icon/before_disable.svg";
import BackArrow from "@/assets/icon/before.svg";
import PrevFalseArrow from "@/assets/icon/next_disable.svg";
import PrevArrow from "@/assets/icon/next.svg";

interface themeSectionProps {
  currentPage: number;
  totalPage: number;
  currentPost: any[];
  handlePrev: () => void;
  handleNext: () => void;
}

const ThemeSection: React.FC<themeSectionProps> = ({
  currentPage,
  totalPage,
  currentPost,
  handlePrev,
  handleNext,
}) => {
  return (
    <S.ThemeSection>
      <S.ThemeHeader>
        <h1>테마별 모음.zip</h1>
        <S.ThemeButton>
          <Link href="/">전체보기</Link>
          <Button
            type={"button"}
            color="themeBtnPrev"
            onClick={handlePrev}
            disabled={currentPage === 1}
          >
            {currentPage === 1 ? (
              // <Image
              //   // src={"/assets/svg/before_disable.svg"}
              //   src={BackArrow.src}
              //   alt="이전"
              //   width="30"
              //   height="30"
              // />
              <BackFalseArrow width={30} height={30} />
            ) : (
              // <Image
              //   src={"/assets/svg/before.svg"}
              //   alt="이전"
              //   width="30"
              //   height="30"
              // />
              <BackArrow width={30} height={30} />
            )}
          </Button>
          <Button
            type={"button"}
            color="themeBtnNext"
            onClick={handleNext}
            disabled={currentPage === totalPage}
          >
            {currentPage === totalPage ? (
              // <Image
              //   src={"/assets/svg/next_disable.svg"}
              //   alt="다음"
              //   width="30"
              //   height="30"
              // />
              <PrevFalseArrow width={30} height={30} />
            ) : (
              // <Image
              //   src={"/assets/svg/next.svg"}
              //   alt="다음"
              //   width="30"
              //   height="30"
              // />
              <PrevArrow width={30} height={30} />
            )}
          </Button>
        </S.ThemeButton>
      </S.ThemeHeader>
      <S.ThemeCard>
        {currentPost.map((themeCard, index) => {
          return (
            <ThemeCard
              key={index}
              title={themeCard.title}
              src={themeCard.src}
            />
          );
        })}
      </S.ThemeCard>
    </S.ThemeSection>
  );
};

export default ThemeSection;
