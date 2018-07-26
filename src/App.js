import React, { Component } from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

class LikeButton extends Component {
	render() {
		return (
			<Button color="danger">Danger!</Button>
		);
	}
}

ReactDom.render(
	<LikeButton/>,
	document.getElementById('root')
);