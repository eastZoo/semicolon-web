"use client";

import * as S from "./BannerSection.style";
import { BannerCard } from "../../molcules/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { bannerCard } from "../../../data/dummey";

export type BannerSection_props = {
  subtitle?: string;
  title?: string;
  children?: any;
  className?: string | any;
};

const BannerSection = () => {
  const cardArray = (array: any[], cardSize: number) => {
    const cards = [];
    for (let i = 0; i < array.length; i += 3) {
      cards.push(array.slice(i, i + cardSize));
    }
    return cards;
  };

  const slideData = cardArray(bannerCard.data, 3);

  return (
    <S.BannerSection>
      <S.BannerCard>
        <Swiper
          pagination={true}
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          loop={true}
          speed={400}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
        >
          {slideData.map((slide, index) => (
            <SwiperSlide key={index}>
              {slide.map((card, cardIndex) => (
                <BannerCard
                  key={cardIndex}
                  title={card.title}
                  subtitle={card.subtitle}
                />
              ))}
            </SwiperSlide>
          ))}
        </Swiper>
      </S.BannerCard>
    </S.BannerSection>
  );
};

export default BannerSection;
