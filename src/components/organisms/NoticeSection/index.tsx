import { NoticeList } from "@/molcules/ListBlock";
import Link from "next/link";
import * as S from "./NoticeSection.style";

import { noticeData } from "../../../data/dummey";

function NoticeSection({}: any): React.JSX.Element {
  const showNotice = 3;

  return (
    <S.NoticeSection>
      <S.NoticeHeader>
        <h1>공지사항</h1>
        <Link href="/">전체보기</Link>
      </S.NoticeHeader>
      <div style={{ borderTop: "1px solid #DFDFDF", margin: "13px 0px" }} />
      <S.NoticeBody>
        {noticeData.data.slice(0, showNotice).map((data, index) => (
          <div key={index}>
            <NoticeList title={data.title} date={data.date} />
            <div
              style={{ borderTop: "1px solid #DFDFDF", margin: "13px 0px" }}
            />
          </div>
        ))}
      </S.NoticeBody>
    </S.NoticeSection>
  );
}

export default NoticeSection;
