import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import httpClient from './httpClient'

import NavBar from './Components/Utility/NavBar'
import LogIn from './pages /LogIn'
import LogOut from './pages /LogOut'
import SignUp from './pages /SignUp'
import RTH from './pages /RTH'
//
import Home from './pages /Home'
import Product from './pages /ProductPage'
import Contact from './pages /ContactPage'
import Footer from './Components/Utility/Footer'

class App extends React.Component {
	state = { currentUser: httpClient.getCurrentUser() }

	onLoginSuccess(user) {
		this.setState({ currentUser: httpClient.getCurrentUser() })
	}

	logOut() {
		httpClient.logOut()
		this.setState({ currentUser: null })
	}

	render() {
		const { currentUser } = this.state
		return (
			<div className='App'>

				<NavBar currentUser={currentUser} />

				<Switch>

					<Route path="/login" render={(props) => {
						return <LogIn {...props} onLoginSuccess={this.onLoginSuccess.bind(this)} />
					}} />

					<Route path="/logout" render={(props) => {
						return <LogOut onLogOut={this.logOut.bind(this)} />
					}} />

					{/* the sign up component takes an 'onSignUpSuccess' prop which will perform the same thing as onLoginSuccess: set the state to contain the currentUser */}
					<Route path="/signup" render={(props) => {
						return <SignUp {...props} onSignUpSuccess={this.onLoginSuccess.bind(this)} />
					}} />

					<Route path="/rth" render={() => {
						return currentUser
							? <RTH />
							: <Redirect to="/login" />
					}} />

					<Route exact path="/" component={Home} />

					<Route path="/products" component={Product} />
					<Route path="/contact" component={Contact} />

				</Switch>

				<Footer />
			</div>
		)
	}
}

export default App