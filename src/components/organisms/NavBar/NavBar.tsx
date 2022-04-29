import React from 'react'
import { Nav } from 'vcc-ui'
import { LogoVolvo } from '../../atoms/Logo'

export const NavBar: React.FC = () => {
    return (
        <Nav>
            <LogoVolvo padding={2} height={8} type={"spreadmark"}  />
        </Nav>
    )
}
