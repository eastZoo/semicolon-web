"use client"

import * as S from "./line.style"

export type LineProps = {
    className?: string|any
    label?:string
}

export const Line = ({
    className,
    label,
}: LineProps) => {
    return (
        <S.Line 
        className={className}>
            <label>
                {label && label}

            </label>
        </S.Line>
    )
}