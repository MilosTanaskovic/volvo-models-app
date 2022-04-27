
import React from 'react'
import { Link } from 'vcc-ui'

interface Props {
    children: React.ReactNode;
}

export const ModelButton: React.FC<Props> = ({children}) => {
    return (
        <Link
            arrow='right'
        >
            {children}
        </Link>
    )
}
