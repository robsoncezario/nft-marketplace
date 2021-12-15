import React from 'react'
import ConnectWallet from '../ConnectWallet/index.jsx'
import Logo from '../Logo/index.jsx'
import {
	Container
} from './styles'

export default function Header() {
	return (
		<Container>
			<Logo />
			<ConnectWallet />
		</Container>
	)
}
