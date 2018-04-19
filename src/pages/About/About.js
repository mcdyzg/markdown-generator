// i am about component
import React, { Component } from 'react'
import './About.scss'
import '@pages/Detail/MarkDown.scss'

class About extends Component {
	state = {}
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="about-wrap">
				<div
					className="markdown-body"
					dangerouslySetInnerHTML={{
						__html: `/* {{ReadmeContent}} */`,
					}}
				/>
			</div>
		)
	}
}

export default About
