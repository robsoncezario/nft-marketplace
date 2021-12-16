import React, { useState, useEffect } from 'react';
import fileSize from 'filesize';

import Upload from '../Upload/index.jsx';

import { Container, Header, Close } from './styles';

export default function MintModal({ onClose }) {
	const [file, setFile] = useState();

	const clearEverything = () => {
		return () => {
			if (file) {
				URL.revokeObjectURL(file.preview);
			}
		};
	};

	useEffect(clearEverything, []);

	const handleUpload = (fileList) => {
		const lastFile = fileList[0];
		const data = {
			file: lastFile,
			name: lastFile.name,
			readableSize: fileSize(lastFile.size),
			preview: URL.createObjectURL(lastFile),
			progress: 0,
			uploaded: false,
		};

		setFile(data);
	};

	const handleDiscard = () => {
		URL.revokeObjectURL(file.preview);
		setFile();
	};

	return (
		<Container>
			<Header>
				<h4>Mint your own NFT</h4>
				<Close className="fas fa-times" onClick={onClose} />
			</Header>

			<Upload onUpload={handleUpload} file={file} onDiscard={handleDiscard} />
		</Container>
	);
}
