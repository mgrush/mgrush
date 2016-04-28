import "./index.less";
import React from "react";
import ReactDOM from "react-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Guide from "../../components/Guide";

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
