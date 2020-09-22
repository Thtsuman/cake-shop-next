import React from "react"
import fetch from "isomorphic-unfetch"
import { useRouter } from "next/router"
import LayoutWrapper from "../../components/LayoutWrapper/LayoutWrapper"
import ProductCard from "../../components/ProductCard/ProductCard"

const category = (props) => {
	return (
		<LayoutWrapper>
			<div className="container py-4">
				<div className="h3 font-weight-bold mb-4">Products</div>
				<div className="card">
					<div className="card-body">
						<div className="row">
							{props.products?.length < 1 ? (
								<span className="text-center w-100 text-muted">No Products Available</span>
							) : (
								props.products?.map((item, i) => (
									<div className="col-md-4 col-6 my-2" key={i}>
										<ProductCard item={item} />
									</div>
								))
							)}
						</div>
					</div>
				</div>
			</div>
		</LayoutWrapper>
	)
}

category.getInitialProps = async ({ query }) => {
	// const { categoryId } = query
	console.log("Hello", query.id)
	const response = await fetch(
		`https://testing.pogo91.com/api/online-store/category/product/?store_prefix=cake-shop&category_id=${query.id}`
	)

	const data = await response.json()

	return { products: data.products }
}

export default category
