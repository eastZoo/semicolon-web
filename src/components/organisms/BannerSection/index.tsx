"use client";

import * as S from "./BannerSection.style";
import { BannerCard } from "../../molcules/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export type BannerSection_props = {
  subtitle?: string;
  title?: string;
  children?: any;
  className?: string | any;
};

const BannerSection = () => {
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
          <SwiperSlide>
            <BannerCard
              title="오디션 자동신청 프로젝트 함께하실 프론트 구합니다.오디션 자동신청 프로젝트 함께하실 프론트 구합니다."
              className="bannerCard"
              subtitle="현재 가장 많은 신청자가 몰린 콜로니"
            />
            <BannerCard
              title="오디션 자동신청 프로젝트 함께하실 프론트 구합니다."
              className="bannerCard"
              subtitle="현재 가장 많은 신청자가 몰린 콜로니"
            />
            <BannerCard
              title="오디션 자동신청 프로젝트 함께하실 프론트 구합니다."
              className="bannerCard"
              subtitle="현재 가장 많은 신청자가 몰린 콜로니"
            />
          </SwiperSlide>
          <SwiperSlide>
            <BannerCard
              title="오디션 자동신청 프로젝트 함께하실 프론트 구합니다.오디션 자동신청 프로젝트 함께하실 프론트 구합니다."
              className="bannerCard"
              subtitle="현재 가장 많은 신청자가 몰린 콜로니"
            />
            <BannerCard
              title="오디션 자동신청 프로젝트 함께하실 프론트 구합니다."
              className="bannerCard"
              subtitle="현재 가장 많은 신청자가 몰린 콜로니"
            />
            <BannerCard
              title="오디션 자동신청 프로젝트 함께하실 프론트 구합니다."
              className="bannerCard"
              subtitle="현재 가장 많은 신청자가 몰린 콜로니"
            />
          </SwiperSlide>
        </Swiper>
      </S.BannerCard>
    </S.BannerSection>
  );
};

export default BannerSection;
