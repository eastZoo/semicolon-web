"use client"
import BannerSection from "../../organisms/BannerSection";
import FindColonySection from "../../organisms/FindColonySection";
import ThemeSection from "../../organisms/ThemeSection";
import NoticeSection from "../../organisms/NoticeSection";
import AdSection from "../../organisms/AdSection";
import * as S from "./MainPage.style";
import { bannerCard, themeCard } from "../../../data/dummey";
import { useState } from "react";

const cardArray = (array: any[], cardSize: number) => {
  const cards = [];
  for (let i = 0; i < array.length; i += 3) {
    cards.push(array.slice(i, i + cardSize));
  }
  return cards;
};

export default function Main() {
  // banner 데이터
  const slideData= cardArray(bannerCard.data, 3);

  // themeCard 페이지네이션
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = Math.ceil(themeCard.data.length / 2);
  const startIndex = (currentPage - 1) * 2;
  const endIndex = Math.min(startIndex + 2, themeCard.data.length);
  const currentPost = themeCard.data.slice(startIndex, endIndex);

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    }
  };

  const handleNext = () => {
    if (currentPage < totalPage) {
      setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPage));
    }
  };

  return (
    <S.MainPage>
      <BannerSection slideData={slideData} />
      <FindColonySection />
      <ThemeSection
        currentPage={currentPage}
        totalPage={totalPage}
        currentPost={currentPost}
        handlePrev={handlePrev}
        handleNext={handleNext}
      />
      <NoticeSection />
      <AdSection />
    </S.MainPage>
  );
}
