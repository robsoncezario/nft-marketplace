import React, { useState, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';

export default function useETHBalance() {
	const { account, library, chainId } = useWeb3React();
	const [balance, setBalance] = useState();

	const fetchBalance = () => {
		if (!!account && !!library) {
			let stale = false;

			library.eth
				.getBalance(account)
				.then((balance) => {
					if (!stale) {
						setBalance(library.utils.fromWei(balance, 'ether'));
					}
				})
				.catch(() => {
					if (!stale) {
						setBalance(null);
					}
				});

			return () => {
				stale = true;
				setBalance(undefined);
			};
		}
	};

	useEffect(fetchBalance, [account, library, chainId]);

	return balance;
}
