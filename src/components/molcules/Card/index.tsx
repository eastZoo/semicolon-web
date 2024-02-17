import * as S from "./card.style"

interface Card{
    width?: string;
    height?: string;
    title?: string;
    subtitle?: string;
    src?: any;
    cate?: string;
    user?: string;
    stack?: string;
    view?: string;
    bookmark?: string;
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
    cate,
    user,
    stack,
    view,
    className,
}: Card) => {
    return (
        <S.colonyCardSection>
            <S.colonyCard width={width} height={height}>
                <img src={src} />
                <div>
                    {cate && <p style={{  marginBottom:'10px' }}>{cate}</p>}
                    {title && <p style={{ fontWeight: '530' }}>{title}</p>}
                    <p style={{ color: "#BDBDBD" }}>{stack}</p>
                    <p>by {user && <span style={{ fontSize: '15px', fontWeight: '530'}}>{user}</span>}</p>
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