import Link from 'next/link'
import React from 'react'
import { Block, Text, View } from 'vcc-ui'

export const Footer: React.FC = () => {
    return (
        <View
            as='footer'
            extend={{
                position: 'fixed',
                bottom: 0,
                height: 50,
                backgroundColor: '#FAFAFA',
                width: '100%',             
            }}       
        >
            <Block extend={{ textAlign: 'center' }}>
                <Text variant="bates">Copyright © 2022 Volvo Car Corporation</Text>
                <Link href="https://github.com/MilosTanaskovic">
                    Visit Milos Tanaskovic GitHub Profile
                </Link>
            </Block>
        </View>
    )
}
