"use strict";

import "./index.less";
import React from "react";

export default class Logo extends React.Component {
	state = { }
	
	constructor( props ) {
		super( props );
	}

	render() {
		return (
			<div className="m-logo"></div>	
		);
	}
};
