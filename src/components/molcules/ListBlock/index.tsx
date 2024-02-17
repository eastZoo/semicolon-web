import * as S from "./ListBlock.style"

interface ListBlock{
    title?: string;
    user?: string;
    date?: any;
}

export const NoticeList = ({
    title,
    date,
}: ListBlock) => {
    return (
        <S.NoticeList>
            <p>{title}</p>
            <p>{date}</p>
        </S.NoticeList>

    )
}