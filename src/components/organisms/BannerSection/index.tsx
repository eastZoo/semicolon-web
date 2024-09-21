"use client";

import * as S from "./BannerSection.style";
import { Card } from "@/molcules/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export type BannerSection_props = {
  subtitle: string;
  title: string;
  children: any;
  className: string | any;
};

interface BannerSectionProps {
  slideData: any[][];
}

const BannerSection: React.FC<BannerSectionProps> = ({ slideData }) => {
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
                <Card
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
