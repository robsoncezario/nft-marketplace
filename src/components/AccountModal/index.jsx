import React from 'react';
import { useWeb3React } from '@web3-react/core';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import {
	Container,
	Header,
	Close,
	Label,
	Spacer,
	Connector,
	InputContainer,
	Input,
	CopyButton,
	Balance,
	Redirect,
	DisconnectButton,
} from './styles';
import getConnectorData from '../../methods/getCurrentConnector';
import ToastyService from '../../services/ToastyService';
import useETHBalance from '../../hooks/useETHBalance';

export default function AccountModal({ onClose }) {
	const { deactivate, active, account, connector } = useWeb3React();
	const balance = useETHBalance();

	if (!active) {
		return null;
	}

	const connectorData = getConnectorData(connector);

	const handleOnCopy = () => {
		ToastyService.success('Copied');
	};

	const openEtherscan = () => {
		window.open(`https://etherscan.io/address/${account}`);
	};

	const disconnectWallet = () => {
		deactivate();
		onClose();
	};

	return (
		<Container>
			<Header>
				<h4>Your wallet</h4>
				<Close className="fas fa-times" onClick={onClose} />
			</Header>

			{connectorData && (
				<>
					<Label>Connected with</Label>
					<Connector>
						<img
							src={
								require('../../assets/images/wallets/' + connectorData.icon)
									.default
							}
						/>
						<div className="name">{connectorData.name}</div>
					</Connector>
					<Spacer />
				</>
			)}

			<Label>Your address</Label>
			<InputContainer>
				<Input
					value={account}
					readonly
					spellCheck={false}
					autoComplete={false}
				/>
				<CopyToClipboard text={account} onCopy={handleOnCopy}>
					<CopyButton className="fad fa-copy" />
				</CopyToClipboard>
			</InputContainer>

			<Spacer />
			<Balance>
				<div className="asset">ETH Balance</div>
				<div className="amount">{(balance && balance) || 0}</div>
			</Balance>

			<Spacer />
			<Redirect onClick={openEtherscan}>
				<i className="fad fa-external-link" />
				View on explorer
			</Redirect>

			<Spacer />

			<DisconnectButton onClick={disconnectWallet}>
				Disconnect wallet <i className="fad fa-sign-out" />
			</DisconnectButton>
		</Container>
	);
}
