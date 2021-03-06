// i am root component
import React from 'react'
import { hot } from 'react-hot-loader'
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link,
	Redirect,
} from 'react-router-dom'
import store from '@store/index.js'
import { Provider } from 'react-redux'
import DynamicImport from '@modules/DynamicImport'
import Menu from '../Menu'
import Header from '../Header'
import '../styles/base.css'
import './Layout.scss'

const About = DynamicImport(() =>
	import(/* webpackChunkName: "About" */ '../About'),
)
const Category = DynamicImport(() =>
	import(/* webpackChunkName: "Category" */ '../Category'),
)

/* {{DynamicImportChunks}} */

class Layout extends React.Component {
	componentDidMount() {}
	render() {
		return (
			<Provider store={store}>
				<Router>
					<div>
						<Header />
						<section className="content-wrap">
							<div className="content">
								<div className="left-blog">
									<Route
										exact
										path="/"
										component={Category}
									/>
									<Route
										path="/category/:name"
										component={Category}
									/>
									<Route path="/readme" component={About} />
									{/* {{RouteList}} */}
								</div>
								<Menu />
							</div>
						</section>
						<a href="#/" className="back2home">
							<svg viewBox="0 0 1024 1024" width="32" height="32">
								<path
									d="M992 441.6 601.6 38.4C576 12.8 544 0 512 0 480 0 448 12.8 422.4 38.4L32 441.6C-6.4 486.4 0 518.4 6.4 537.6 6.4 544 25.6 576 70.4 576L128 576l0 313.6C128 960 179.2 1024 249.6 1024l64 0 102.4 0 0-70.4 0-256C416 659.2 409.6 640 448 640l64 0 64 0c38.4 0 32 19.2 32 57.6l0 256L608 1024l102.4 0 64 0c70.4 0 121.6-64 121.6-134.4L896 576l57.6 0c44.8 0 64-32 64-38.4C1024 518.4 1030.4 486.4 992 441.6zM953.6 512l-51.2 0-32 0L832 512l0 377.6c0 38.4-25.6 70.4-57.6 70.4l-102.4 0 0-262.4C672 627.2 646.4 576 576 576L512 576 448 576c-70.4 0-96 51.2-96 121.6L352 960 249.6 960C217.6 960 192 921.6 192 889.6L192 512 153.6 512 121.6 512 70.4 512c0 0 0-6.4 0-6.4 0-6.4 6.4-12.8 12.8-19.2l390.4-403.2C480 70.4 499.2 64 512 64c12.8 0 32 6.4 44.8 19.2l390.4 403.2C947.2 492.8 953.6 505.6 953.6 512 953.6 505.6 953.6 512 953.6 512z"
									fill="#8a8a8a"
								/>
							</svg>
						</a>
						<div className="footer">
							Power by{' '}
							<a href="https://github.com/mcdyzg">Mcdyzg</a>
						</div>
					</div>
				</Router>
			</Provider>
		)
	}
}

export default hot(module)(Layout)
