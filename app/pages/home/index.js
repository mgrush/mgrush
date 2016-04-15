import "./index.less";
import React from "react";
import ReactDOM from "react-dom";
import Header from "../../components/header";
import FullPage from "../../components/fullpage";

ReactDOM.render(
	<Header />,
	document.getElementById("header")
);

$("#fullpage").fullpage({
	menu : "#menu",
	anchors : ["firstPage", "secondPage", "thirdPage"],
});
