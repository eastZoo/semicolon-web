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
                <div className="viewImageP">
                    <ViewImageBox text={view} src={view_src} className="viewImage"/>
                    <img src={src} className="mainImage" />
                </div>
                <div>
                    <S.Category>{category}</S.Category>
                    <S.Title>{title}</S.Title>
                    <S.Stack>{stack}</S.Stack>
                </div>
                <div className="bookmarkP">
                    <p>by <S.User>{user}</S.User></p>
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
                <S.Subtitle>{subtitle}</S.Subtitle>
                <S.Title>{title}</S.Title>
            </S.bannerCard>
        </S.bannerCardSection>
        
    )
}