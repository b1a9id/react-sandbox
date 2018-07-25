import React from 'react';
import ReactDom from 'react-dom';

class LikeButton extends React.Component {
	render() {
		return (
			<span>イイネボタン予定地</span>
		);
	}
}

ReactDom.render(
	<LikeButton/>,
	document.getElementById('root')
);