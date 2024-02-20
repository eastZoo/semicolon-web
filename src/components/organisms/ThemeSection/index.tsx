import { Button } from "@/components/atoms/Button";
import { ThemeCard } from "@/components/molcules/Card";
import Image from "next/image";
import Link from 'next/link'
import * as S from "./ThemeSection.style"

function ThemeSection({ }: any): React.JSX.Element{
    return (
        <S.ThemeSection>
            <S.ThemeHeader>
                <h1>테마별 모음.zip</h1>
                <S.ThemeButton>
                    <Link href="/">전체보기</Link>
                    <Button type={"button"} color="themeBtn">
                        <Image src={"/assets/svg/before.svg"} alt="이전" width="30" height="30"/>
                    </Button>
                    <Button type={"button"} color="themeBtn">
                        <Image src={"/assets/svg/after.svg"} alt="다음" width="30" height="30"/>
                    </Button>
                </S.ThemeButton>
            </S.ThemeHeader>
            <S.ThemeCard>
                <ThemeCard title="UI/UX 맛깔나는 디자이너 찾는중" src="/assets/svg/paintkit.svg" />
                <ThemeCard title="UI/UX 맛깔나는 디자이너 찾는중" src="/assets/svg/paintkit.svg"/>
            </S.ThemeCard>
        </S.ThemeSection>


    )
}

export default ThemeSection;