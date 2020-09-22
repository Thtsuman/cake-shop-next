import React from "react"
import fetch from "isomorphic-unfetch"
import Nav from "../components/Nav/Nav"
import Card from "../components/Card/Card"
import LayoutWrapper from "../components/LayoutWrapper/LayoutWrapper"
import Link from "next/link"

const App = (props) => {
	return (
		<LayoutWrapper>
			<div className="container py-4">
				<div className="h3 font-weight-bold mb-4">Categories</div>
				<div className="card">
					<div className="card-body">
						<div className="row">
							{props.category?.map((item, i) => (
								<div className="col-md-4 col-6 my-2" key={i}>
									<Card item={item} />
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</LayoutWrapper>
	)
}

App.getInitialProps = async () => {
	const response = await fetch("https://testing.pogo91.com/api/online-store/category/?store_prefix=cake-shop")

	const data = await response.json()

	return { category: data.category }
}

export default App
