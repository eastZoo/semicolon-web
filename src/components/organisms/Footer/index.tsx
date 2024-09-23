import Image from "next/image";
import Link from "next/link";
import * as S from "./footer.style";

export const Footer = () => {
  return (
    <S.Footer>
      <S.FooterContainer>
        <Image
          src="/assets/svg/sample_logo.svg"
          alt="samleLogo"
          width="200"
          height="50"
        />
        <S.FooterBox>
          <S.FooterInfo>
            <p>
              세미콜론 고객센터: 051-124-4567 (평일 9:00-18:00, 점심시간
              12:00-13:00, 주말/공휴일 휴무)
            </p>
            <p>이메일: help@semicolon.co.kr</p>
            <S.Copyright>
              Copyright (c) (주) 세미콜론. All rights reserved
            </S.Copyright>
          </S.FooterInfo>
          <S.FooterLink>
            <S.FooterLinkUl>
              <S.FooterLinkLi>
                <Link href="/">서비스 소개</Link>
              </S.FooterLinkLi>
              <S.FooterLinkLi>
                <Link href="/">기업 서비스</Link>
              </S.FooterLinkLi>
              <S.FooterLinkLi>
                <Link href="/">세미콜론 Team</Link>
              </S.FooterLinkLi>
            </S.FooterLinkUl>
            <S.FooterLinkUl>
              <S.FooterLinkLi>
                <Link href="/">이용 약관</Link>
              </S.FooterLinkLi>
              <S.FooterLinkLi>
                <Link href="/">개인정보처리방침</Link>
              </S.FooterLinkLi>
              <S.FooterLinkLi>
                <Link href="/">자주묻는질문 FAQ</Link>
              </S.FooterLinkLi>
            </S.FooterLinkUl>
          </S.FooterLink>
        </S.FooterBox>
      </S.FooterContainer>
    </S.Footer>
  );
};
