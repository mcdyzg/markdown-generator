import React, { Component } from 'react'
import './Header.scss'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import moment from 'moment'

class Header extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { readme = {} } = this.props
		const { buttons = [] } = readme
		return (
			<section className="page-header">
				<div className="page-fixed-bar" />
				<h1 className="project-name">{readme.name}</h1>
				<h2 className="project-tagline">{readme.desc}</h2>
				{buttons.map((item, index) => {
					// 如果是绝对路径，用a标签，如果不是，用Link
					if (item.text.indexOf('http') === -1) {
						return (
							<Link key={index} to={item.link} className="btn">
								{item.text}
							</Link>
						)
					} else {
						;<a key={index} href={item.link} className="btn">
							{item.text}
						</a>
					}
				})}
			</section>
		)
	}
}

const mapStateToProps = state => ({
	readme: state.readme,
})

const mapDispatchToProps = {}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))
