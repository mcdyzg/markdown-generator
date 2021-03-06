import React,{Component} from 'react'
import '@themes/cayman/Detail/Detail.scss'
import '@themes/cayman/styles/MarkDown.scss'
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'
import {changeState} from '@actions/currentState'
import Menu from '@themes/cayman/Menu'



class Detail extends Component {
    state = {
        md:/* {{MarkdownInfo}} */
    }
    constructor(props){
        super(props)
    }

    componentDidMount(){
        let md = this.state.md
        this.props.changeState({
            type:'article',
            value:{
                title:md.title,
                author:md.author,
                time:md.time,
            }
        })
    }

    render(){
        return (
            <div className="detail-container">
                {/* 左侧导航 */}
                <Menu />

                {/* 右侧md内容 */}
                <div className='detail-wrap'>
                    <div className="markdown-body" dangerouslySetInnerHTML={{
                        __html: `/* {{MarkdownContent}} */`,
                    }}>
                    </div>

                    <div className="detail-info">
                        <div className="author">
                            {this.state.md.author}
                        </div>
                        <div className="time">
                            {this.state.md.time}
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}


const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
    changeState : (data) => changeState(data),
}

export default withRouter(connect(
  	mapStateToProps,
  	mapDispatchToProps
)(Detail))
