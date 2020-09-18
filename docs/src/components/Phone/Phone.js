import React from 'react';
import phone from '../../assets/image/IphonePro.PNG';

const Phone = ({ children }) => {
	return (
		<div>
			<div
				style={{ width: '280px', height: '570px' }}
				className="position-absolute px-4 py-5 d-flex flex-column align-items-center justify-content-center"
			>
				{children}
			</div>
			<img style={{ width: '280px' }} src={phone} alt="Iphone" />
		</div>
	);
};

export default Phone;
