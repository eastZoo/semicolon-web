"use client"

import * as S from "./line.style"

export type LineProps = {
    label?:string
}

export const Line = ({
    label,
}: LineProps) => {
    return (
        <S.Line>
            <label>
                {label && label}
            </label>
        </S.Line>
    )
}