"use client";

import { Button } from "@/components/atoms/Button";
import { ThemeCard } from "@/components/molcules/Card";
import Image from "next/image";
import Link from "next/link";
import * as S from "./ThemeSection.style";
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
              <Image
                src={"/assets/svg/before_disable.svg"}
                alt="이전"
                width="30"
                height="30"
              />
            ) : (
              <Image
                src={"/assets/svg/before.svg"}
                alt="이전"
                width="30"
                height="30"
              />
            )}
          </Button>
          <Button
            type={"button"}
            color="themeBtnNext"
            onClick={handleNext}
            disabled={currentPage === totalPage}
          >
            {currentPage === totalPage ? (
              <Image
                src={"/assets/svg/next_disable.svg"}
                alt="다음"
                width="30"
                height="30"
              />
            ) : (
              <Image
                src={"/assets/svg/next.svg"}
                alt="다음"
                width="30"
                height="30"
              />
            )}
          </Button>
        </S.ThemeButton>
      </S.ThemeHeader>
      <S.ThemeCard>
        {currentPost.map((themeCard, index) => (
          <ThemeCard key={index} title={themeCard.title} src={themeCard.src} />
        ))}
      </S.ThemeCard>
    </S.ThemeSection>
  );
};

export default ThemeSection;
