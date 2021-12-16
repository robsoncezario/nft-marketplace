import React from 'react';
import { useSelector } from 'react-redux';
import Toasty from './index';

import { Wrapper, Container } from './container.styles';
import Portal from '../Portal';

export default function ToastyContainer() {
	const toastyList = useSelector((state) => state.toasty.list);

	return (
		<Portal>
			<Wrapper>
				<Container>
					{toastyList.map((t) => (
						<Toasty
							key={t.uuid}
							uuid={t.uuid}
							type={t.type}
							message={t.message}
							duration={t.duration}
						/>
					))}
				</Container>
			</Wrapper>
		</Portal>
	);
}
