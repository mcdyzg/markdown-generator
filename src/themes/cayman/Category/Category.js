import React, { PureComponent } from 'react'
import './Category.scss'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { changeState } from '@actions/currentState'
import moment from 'moment'
import Menu from '@themes/cayman/Menu'

class Category extends PureComponent {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="category-wrap">
				<Menu />
			</div>
		)
	}
}

const mapStateToProps = state => ({
	article: state.article,
})

const mapDispatchToProps = {
	changeState: data => changeState(data),
}

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(Category),
)
