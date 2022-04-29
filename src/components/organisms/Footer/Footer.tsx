import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants'
import Link from 'next/link'
import React from 'react'
import { Block, Text, View } from 'vcc-ui'

export const Footer: React.FC = () => {
    return (
        <View
            as='footer'
            extend={{
                position: 'absolute',
                bottom: 0,
                height: 50,
                backgroundColor: '#FAFAFA',
                width: '100%',
                paddingTop: 10,
            }}
            
        >
            <Block extend={{ textAlign: 'center' }}>
                <Text variant="bates">Copyright © 2022 Volvo Car Corporation
                    <Text subStyle="inline-link">
                        (<Link href="https://github.com/MilosTanaskovic">
                            Visit Milos Tanaskovic GitHub Profile
                        </Link>).
                    </Text>
                </Text>
            </Block>
        </View>
    )
}
