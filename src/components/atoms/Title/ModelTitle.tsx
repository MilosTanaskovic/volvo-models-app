import React from 'react'
import { Block, Text } from 'vcc-ui'

interface Props {
    children: React.ReactNode;
    extend?: any;
    variant?: any;
    subStyle?: any;

}

export const ModelTitle: React.FC<Props> = ({children, extend, variant, subStyle}) => {
    return (
        <Block extend={extend}>
            <Text variant={variant} subStyle={subStyle}>
                {children}
            </Text>
        </Block>
    )
}
