import { Button } from "@/components/atoms/Button"
import { ColonyCard } from "@/components/molcules/Card"
import * as S from "./FindColonySection.style"

function FindColonySection({ }: any): React.JSX.Element{
    return (
        <S.FindColonySection>
            <S.FindColonyHeader>
                <div>
                    <h1>Find Colony</h1>
                    <p>현재 당신의 협력이 필요한 콜로니를 찾아 보세요.</p>
                    <p>당신의 능력을 마음껏  펼쳐보세요.</p>
                </div>
                <Button type={"button"} color={"findColony"} label={"VIEW MORE ➡️"}/>
            </S.FindColonyHeader>
            <div style={{borderTop: "1px solid #DFDFDF", margin:"30px 0px"}}/>
            <S.FindColonyCard>
                <ColonyCard title="전국 7만여개의 전기차 충전소를 한눈에! 플러그파인더" cate="developer" user="coco" bookmark="300" stack={"HTML5 , CSS3, JavaScript, TypeScript"} src="/assets/svg/colonyCard.png"/>
                <ColonyCard title="전국 7만여개의 전기차 충전소를 한눈에! 플러그파인더" cate="developer" user="coco" bookmark="300" stack={"HTML5 , CSS3, JavaScript, TypeScript"} src="/assets/svg/colonyCard.png"/>
                <ColonyCard title="전국 7만여개의 전기차 충전소를 한눈에! 플러그파인더" cate="developer" user="coco" bookmark="300" stack={"HTML5 , CSS3, JavaScript, TypeScript"} src="/assets/svg/colonyCard.png"/>
                <ColonyCard title="전국 7만여개의 전기차 충전소를 한눈에! 플러그파인더" cate="developer" user="coco" bookmark="300" stack={"HTML5 , CSS3, JavaScript, TypeScript"} src="/assets/svg/colonyCard.png"/>
                <ColonyCard title="전국 7만여개의 전기차 충전소를 한눈에! 플러그파인더" cate="developer" user="coco" bookmark="300" stack={"HTML5 , CSS3, JavaScript, TypeScript"} src="/assets/svg/colonyCard.png"/>
                <ColonyCard title="전국 7만여개의 전기차 충전소를 한눈에! 플러그파인더" cate="developer" user="coco" bookmark="300" stack={"HTML5 , CSS3, JavaScript, TypeScript"} src="/assets/svg/colonyCard.png"/>
                <ColonyCard title="전국 7만여개의 전기차 충전소를 한눈에! 플러그파인더" cate="developer" user="coco" bookmark="300" stack={"HTML5 , CSS3, JavaScript, TypeScript"} src="/assets/svg/colonyCard.png"/>
            </S.FindColonyCard>

        </S.FindColonySection>

    )
}

export default FindColonySection;