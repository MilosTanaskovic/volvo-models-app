
import Link from 'next/link'
import React from 'react'
import { Link as VCCLink } from 'vcc-ui'

interface Props {
    children: React.ReactNode;
    modelId?: string;
}

export const ModelButton: React.FC<Props> = ({children, modelId}) => {
    return (
        <Link href={`learn/${modelId}`}>
            <VCCLink
                arrow='right'
            >
                {children}
            </VCCLink>
        </Link>
        
    )
}
