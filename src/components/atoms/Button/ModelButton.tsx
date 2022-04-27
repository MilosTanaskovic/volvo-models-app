import React from 'react'

interface Props {
    children: React.ReactNode;
}

export const ModelButton: React.FC<Props> = ({children}) => {
    return (
        <button>
            {children}
        </button>
    )
}
