import { NoticeList } from "@/components/molcules/ListBlock";
import Link from "next/link";
import * as S from "./NoticeSection.style";

import { noticeData } from "../../../data/dummey";
import { ContourLine } from "@/components/atoms/Line";

export const NoticeSection = () => {
  return (
    <S.NoticeSection>
      <S.NoticeHeader>
        <h1>공지사항</h1>
        <Link href="/">전체보기</Link>
      </S.NoticeHeader>
      <ContourLine />
      <S.NoticeBody>
        {noticeData.data.slice(0, 3).map((data, index) => (
          <div key={index}>
            <NoticeList title={data.title} date={data.date} />
            <ContourLine />
          </div>
        ))}
      </S.NoticeBody>
    </S.NoticeSection>
  );
};

export default NoticeSection;
