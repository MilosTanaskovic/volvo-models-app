
import Link from 'next/link'
import React from 'react'
import { Link as VCCLink } from 'vcc-ui'

interface Props {
    children: React.ReactNode;
    path?: any;
    arrow?: any | undefined;
}

export const ModelButton: React.FC<Props> = ({children, path, arrow}) => {
    return (
        <Link href={path}>
            <VCCLink
                arrow={arrow}
            >
                {children}
            </VCCLink>
        </Link>
        
    )
}
