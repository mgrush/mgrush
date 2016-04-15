import "./index.less";
import React from "react";
import ReactDOM from "react-dom";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Guide from "../../components/guide";

ReactDOM.render(
	<Header />,
	document.getElementById("header")
);

ReactDOM.render(
	<Guide guideName="WaUI" />,
	document.getElementById("guide")
);

ReactDOM.render(
	<Footer />,
	document.getElementById("footer")
);
