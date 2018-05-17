import React, { Component } from 'react'
import './Menu.scss'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Menu extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { category, article } = this.props
		return (
			<div className="menu-wrap">
				{category.map((item, index) => (
					<div key={index}>
						<Link to={`/category/${item}`}>
							<h5 className="menu-title">{item}</h5>
						</Link>

						<div className="menu-content">
							{article.map((item2, index2) => {
								if (item2.category === item) {
									return (
										<Link
											key={index2}
											to={`/${item}/${item2.mdName.slice(
												0,
												-3,
											)}`}
										>
											<div>{item2.title}</div>
										</Link>
									)
								}
							})}
						</div>
					</div>
				))}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	category: state.readme.docs || state.category || [],
	article: state.article || [],
})

const mapDispatchToProps = {}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Menu))
