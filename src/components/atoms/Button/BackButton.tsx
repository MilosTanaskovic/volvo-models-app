import React from 'react'
import { Button, View } from 'vcc-ui'
import NextLink from 'next/link';

interface Props {
    children: React.ReactNode;
    maxWidth?: string | number;
    path?: any;
    passHref?: boolean;
    collor?: any;

}

export const BackButton: React.FC<Props> = ({children, maxWidth, path, passHref, collor}) => {
    return (
        <View maxWidth={maxWidth}>
            <NextLink href={path} passHref={passHref}>
                <Button intent={collor}>
                    {children}
                </Button>
            </NextLink>
        </View>
    )
}
