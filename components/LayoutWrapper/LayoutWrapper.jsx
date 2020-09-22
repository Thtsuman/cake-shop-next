import React from "react"
import Nav from "../Nav/Nav"

const LayoutWrapper = (props) => {
	return (
		<div className="layout-wrapper">
			<Nav />
			{props.children}
		</div>
	)
}

export default LayoutWrapper
