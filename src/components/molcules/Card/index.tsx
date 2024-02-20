import { ViewImageBox, BookmarkImageBox } from "../ImageBox"
import * as S from "./card.style"

interface Card{
    width?: string;
    height?: string;
    title?: string;
    subtitle?: string;
    src?: any;
    category?: string;
    user?: string;
    stack?: string;
    view?: string
    view_src?: any;
    bookmark?: string;
    book_src?: any;
    children?: any;
    label?: string;
    className?: string;
}

export const ThemeCard = ({
    title,
    src,
}: Card) => {
    return (
        <S.ThemeCard >
            <p>{title}</p>
            <img src={src} />
        </S.ThemeCard>
    )
}

export const ColonyCard = ({
    width,
    height,
    title,
    src,
    category,
    user,
    stack,
    view,
    view_src,
    bookmark,
    book_src,
}: Card) => {
    return (
        <S.colonyCardSection>
            <S.colonyCard width={width} height={height}>
                <div >
                    <ViewImageBox text={view} src={view_src} className="viewImage"/>
                    <img src={src} className="mainImage" />
                </div>
                <div>
                    {category && <p style={{  marginBottom:'10px', height: "15px"}}>{category}</p>}
                    {title && <p style={{ fontWeight: '500',  height: "33px" }}>{title}</p>}
                    <p style={{ color: "#BDBDBD",  height: "20px"}}>{stack}</p>
                </div>
                <div style={{
                    display: "flex", justifyContent: "space-between", height: "30px", lineHeight:"30px"}}>
                    <p>by {user && <span style={{ fontSize: '15px', fontWeight: '450' }}>{user}</span>}</p>
                    <BookmarkImageBox text={bookmark} src={book_src}/>
                </div>
            </S.colonyCard>
        </S.colonyCardSection>
    )
}

export const BannerCard = ({
    width,
    height,
    title,
    subtitle,
    className,
}: Card) => {
    return (
        <S.bannerCardSection width={width} height={height} className={className}>
            <S.bannerCard>
                {subtitle && <p style={{ fontSize: '12px', marginBottom:'10px' }}>{subtitle}</p>}
                {title && <p style={{ fontSize: '13px', fontWeight: '530' }}>{title}</p>}
            </S.bannerCard>
        </S.bannerCardSection>
        
    )
}