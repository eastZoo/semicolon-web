"use client";

import { Button } from "@/atoms/Button";
import { ThemeCard } from "@/molcules/Card";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import * as S from "./ThemeSection.style";
import { themeCard } from "../../../data/dummey";

function ThemeSection(): React.JSX.Element {
  const [currnetPage, setCurrentPage] = useState(1);
  const [prevButtonDisable, setPrevButtonDisable] = useState(false);
  const [nextButtonDisable, setNextButtonDisable] = useState(false);
  const postPage = 2;
  const totalPosts = themeCard.data.length;
  const totalPage = Math.ceil(totalPosts / postPage);
  const startIndex = (currnetPage - 1) * postPage;
  const endIndex = Math.min(startIndex + postPage, totalPosts);
  const currentPost = themeCard.data.slice(startIndex, endIndex);

  useEffect(() => {
    setPrevButtonDisable(currnetPage === 1);
    setNextButtonDisable(currnetPage === totalPage);
  }, [currnetPage, totalPage]);

  const handlePrev = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPage));
  };

  return (
    <S.ThemeSection>
      <S.ThemeHeader>
        <h1>테마별 모음.zip</h1>
        <S.ThemeButton>
          <Link href="/">전체보기</Link>
          <Button
            type={"button"}
            color="themeBtn"
            onClick={handlePrev}
            disabled={prevButtonDisable}
          >
            {prevButtonDisable ? (
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
          <Button type={"button"} color="themeBtn" onClick={handleNext}>
            {nextButtonDisable ? (
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
}

export default ThemeSection;
