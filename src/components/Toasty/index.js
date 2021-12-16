import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { TOASTY_REMOVE } from '../../store/toasty/types';

import { Container, Icon, Description, Close } from './styles';

export default function Toasty({
	uuid,
	message,
	type = 'info',
	duration = 5000,
}) {
	const dispatch = useDispatch();
	const remove = () =>
		dispatch({
			type: TOASTY_REMOVE,
			payload: {
				uuid: uuid,
			},
		});

	const handleDidMount = () => {
		const timeoutId = setTimeout(remove, duration);

		return () => {
			clearTimeout(timeoutId);
		};
	};

	useEffect(handleDidMount, []);

	const getIcon = () => {
		switch (type) {
			case 'info':
				return 'fad fa-info-circle';
			case 'success':
				return 'fad fa-check-circle';
			case 'error':
				return 'fad fa-times-circle';
		}
	};
	const icon = getIcon();

	const getColor = () => {
		switch (type) {
			case 'info':
				return 'rgb(59, 130, 246)';
			case 'success':
				return 'rgb(36, 197, 95)';
			case 'error':
				return 'rgb(239, 69, 69)';
		}
	};
	const color = getColor();

	return (
		<Container color={color}>
			<Icon className={icon} />
			<Description>{message}</Description>
			<Close className="fad fa-times-circle" onClick={remove} />
		</Container>
	);
}
