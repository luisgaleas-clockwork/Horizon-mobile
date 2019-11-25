import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
	return (
		<nav>
			<div id="mainbox" onClick={Open}>&#9776;</div>
			<div id="menu" className="sidemenu">
				<a className="closebtn" onClick={Close}>&times;</a>
				

				{props.currentUser
					? (
						<div className="redirect">
							<Link className="nav-link" to="/" onClick={Close}>Home <span className="sr-only">(current)</span></Link>
							<Link className="nav-link" to="/products" onClick={Close}>Products</Link>
							<Link className="nav-link" to="/rth" onClick={Close}>RTH</Link>
							<Link className="nav-link" to="/logout" onClick={Close}>Log Out</Link>
						</div>
					)
					: (
						<div className="redirect">
							<Link className="nav-link" to="/" onClick={Close}>Home <span className="sr-only">(current)</span></Link>
							<Link className="nav-link" to="/products" onClick={Close}>Products</Link>
							<Link className="nav-link" to="/contact" onClick={Close}>Contact us</Link>
							<Link className="nav-link" to="/login" onClick={Close}>Log In</Link>
							<Link className="nav-link" to="/signup" onClick={Close}>Sign Up</Link>
						
						</div>
					)
				}
			</div>
		</nav>
	)
}

const Open = () => {
	document.getElementById("menu").classList.add("menu__show")
	document.getElementById("mainbox").classList.add("mainbox__show")
}
const Close = () => {
	document.getElementById("menu").classList.remove("menu__show");
	document.getElementById("mainbox").classList.remove("mainbox__show");
}

export default NavBar