import React from 'react'
import { Logo, View } from 'vcc-ui'

interface Props {
    padding?: number | undefined;
    height?: number | undefined;
    type?: any | undefined;
}

export const LogoVolvo: React.FC<Props> = ({padding, height, type}) => {
    return (
        <View padding={padding}>
            <Logo type={type} height={height} />
        </View>
    )
}
