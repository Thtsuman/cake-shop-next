import Head from "next/head"
import Link from "next/link"

function Home() {
	return (
		<div>
			<Head>
				<title>My page title</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<Link href="/app">App</Link>
		</div>
	)
}

export default Home
