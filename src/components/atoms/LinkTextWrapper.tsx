import {Variant} from "@material-ui/core/styles/createTypography";
import {Link, Typography} from "@material-ui/core";
import React from "react";

interface Props {
    text: string
    url?: string
    variant: Variant
    opacity?: number
    fontWeight?: 'normal' | 'bold'
}

export const TextWrapper:React.FC<Props>= (props: Props) => {
    return (
        <Link href={props.url} style={{ color: 'black' }}>
            <Typography
                variant={props.variant}
                style={{ opacity: props.opacity, fontWeight: props.fontWeight }}
            >
                {props.text}
            </Typography>
        </Link>
    )
}
