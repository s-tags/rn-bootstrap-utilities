import React from 'react';

const Code = ({ style, children = ' ... ' }) => {
	return (
		<div>
			<code className="text-info">{`<View `}</code>
			<code className="text-primary">{`style={`}</code>
			<code className="text-danger">{style}</code>
			<code className="text-primary">{`}>`}</code>
			<code className="text-dark">{children}</code>
			<code className="text-info">{`</View>`}</code>
		</div>
	);
};

export default Code;
