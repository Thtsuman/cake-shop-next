import Head from "next/head"
import Link from "next/link"

function Home() {
	return (
		<div>
			<Head>
				<title>Cake Shop</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<div className="container my-4">
				<h2>Cake Shop</h2>
				<p>Created by Thtsuman</p>

				<p>Tech Used: Next.js, Bootstrap, react-bootstrap</p>

				<h4>To Application =></h4>
				<div className="shadow rounded-lg w-50">
					<div className="card-body">
						<Link href="/app">App</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
