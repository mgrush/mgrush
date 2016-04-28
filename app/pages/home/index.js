import "./index.less";
import React from "react";
import ReactDOM from "react-dom";
import Header from "../../components/Header";
import FullPage from "../../components/Fullpage";

ReactDOM.render(
	<Header />,
	document.getElementById("header")
);

$("#fullpage").fullpage({
	menu : "#menu",
	anchors : ["firstPage", "secondPage", "thirdPage"],
});
