import { NoticeList } from "@/components/molcules/ListBlock";
import Link from "next/link";
import * as S from "./NoticeSection.style"

function NoticeSection({ }: any): React.JSX.Element{
    return (
        <S.NoticeSection>
            <S.NoticeHeader>
                <h1>공지사항</h1>
                <Link href="/">전체보기</Link>
            </S.NoticeHeader>
            <div style={{borderTop: "1px solid #DFDFDF", margin:"13px 0px"}}/>
            <S.NoticeBody>
                <NoticeList title={"공지사항 입니다."} date="23-01-27"/>
                <div style={{ borderTop: "1px solid #DFDFDF", margin: "13px 0px" }} />
                <NoticeList title={"공지사항 입니다."} date="23-01-27"/>
                <div style={{ borderTop: "1px solid #DFDFDF", margin: "13px 0px" }} />
                <NoticeList title={"공지사항 입니다."} date="23-01-27"/>
                <div style={{borderTop: "1px solid #DFDFDF", margin:"13px 0px"}}/>
            </S.NoticeBody>
        </S.NoticeSection>


    )
}

export default NoticeSection;