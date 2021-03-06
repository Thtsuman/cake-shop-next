import Link from "next/link"
import React from "react"

const ProductCard = ({ item }) => {
	return (
		<Link href="/category/[id]" as={`/category/${item.id}`}>
			<div className="shadow rounded-lg d-flex align-items-center cursor-pointer" style={{ minHeight: "100px" }}>
				<div className="d-flex align-items-center">
					<div className="img-wrapper">
						{item.image_url.length < 1 ? (
							<span className="word-wrapper">{item.product_name.split(" ")[0].split("")[0].toUpperCase()}</span>
						) : (
							<img src={item.image_url} className="rounded-lg img-fluid" alt={`${item.name} image`} />
						)}
					</div>
					<div className="card-body">
						<span className="h6 word-wrap">{item.product_name}</span>
					</div>
				</div>
			</div>
		</Link>
	)
}

export default ProductCard
