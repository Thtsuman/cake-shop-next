import Link from "next/link"
import React from "react"
import { Navbar } from "react-bootstrap"
import Emoji from "../Emoji/Emoji"

const Nav = () => {
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<div className="container">
				<Link href="/app">
					<Navbar.Brand>
						Cake Shop <Emoji symbol="🧁" label="cupcake" />
					</Navbar.Brand>
				</Link>
			</div>
		</Navbar>
	)
}

export default Nav
