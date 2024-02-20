"use client"

import { LinkWrapper } from "./link.style"

export type LinkProps = {
    color?: string
    children?: any
    href?: any|string
    className?: string|any
    label?:string
}

export const Link = ({
    color,
    children,
    className,
    href,
    label,
}: LinkProps) => {
    return (
        <LinkWrapper
        color={color}
        className={className}
        href={href}>
            {label && label}
        </LinkWrapper>
    )
}