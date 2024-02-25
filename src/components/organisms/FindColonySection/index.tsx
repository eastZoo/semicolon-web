import { Button } from "@/components/atoms/Button"
import { ColonyCard } from "@/components/molcules/Card"
import * as S from "./FindColonySection.style"

import { findColonyData } from "../../../data/dummey";

export const FindColonySection = () => {

    return (
        <S.FindColonySection>
            <S.FindColonyHeader>
                <div>
                    <h1>Find Colony</h1>
                    <p>현재 당신의 협력이 필요한 콜로니를 찾아 보세요.</p>
                    <p>당신의 능력을 마음껏  펼쳐보세요.</p>
                </div>
                {findColonyData.data.length >= 8 ? (
                    <Button type={"button"} color={"findColony"} label={"VIEW MORE"}/>
                ): <Button type={"button"} color={"findColony_disable"} label={"VIEW MORE"}/>}
            </S.FindColonyHeader>
            <div style={{borderTop: "1px solid #DFDFDF", margin:"30px 0px"}}/>
            <S.FindColonyCard>
                {findColonyData.data.slice(0, 8).map((data, index) => (
                    <ColonyCard
                        key={index}
                        title={data.title}
                        src={data.src}
                        category={data.category}
                        stack={data.stack}
                        user={data.user}
                        view={data.view}
                        view_src="/assets/svg/viewCount.svg"
                        bookmark={data.bookmark}
                        book_src="/assets/svg/bookmark_disable.svg"/>
                ))}
            </S.FindColonyCard>

        </S.FindColonySection>

    )
}

export default FindColonySection;