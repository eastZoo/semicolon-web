import * as S from "./BannerSection.style"
import {BannerCard} from "../../molcules/Card"
export type BannerSection_props = {
    subtitle?: string;
    title?:string;
    children?: any;
    className?: string | any;
}

const BannerSection = () => {
    return (
        <S.BannerSection>
            <S.BannerCard>
                <BannerCard title="오디션 자동신청 프로젝트 함께하실 프론트 구합니다.오디션 자동신청 프로젝트 함께하실 프론트 구합니다." className="bannerCard" subtitle="현재 가장 많은 신청자가 몰린 콜로니" />
                <BannerCard title="오디션 자동신청 프로젝트 함께하실 프론트 구합니다." className="bannerCard" subtitle="현재 가장 많은 신청자가 몰린 콜로니" />
                <BannerCard title="오디션 자동신청 프로젝트 함께하실 프론트 구합니다." className="bannerCard" subtitle="현재 가장 많은 신청자가 몰린 콜로니"/>
            </S.BannerCard>
        </S.BannerSection>
    )
}

export default BannerSection;