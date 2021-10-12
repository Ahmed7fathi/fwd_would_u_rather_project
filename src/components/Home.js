import React, {Component} from 'react'
import {connect} from 'react-redux';
// components
import QuestionCard from './QuestionCard'


class Home extends Component {

    render() {
        const questions = this.props.questions;

        return (
            <div>
                {
                    Object.keys(questions).map((question) => {
                        return <QuestionCard key={questions[question].id} question={questions[question]}/>
                    })
                }
            </div>
        )
    }

}

function mapStateToProps({questions}) {
    return {
        questions
    }
}

export default connect(mapStateToProps)(Home);
