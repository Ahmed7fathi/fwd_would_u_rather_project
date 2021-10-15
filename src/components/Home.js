import React, {Component} from 'react'
import {connect} from 'react-redux';
// components
import QuestionCard from './QuestionCard'


class Home extends Component {

    currentQs = 0;

    changeWindow(n) {
        this.currentQs = n;
        this.forceUpdate();

    }

    render() {
        const questions = this.props.questions;
        const users = this.props.users;

        return (
            <div className="home-page">
                <div className="container">
                    <button className={`switch-btn ${this.currentQs === 0 ? "active-btn" : ""}`} onClick={() => {
                        this.changeWindow(0)
                    }}> Unanswered Questions
                    </button>
                    <button className={`switch-btn ${this.currentQs === 1 ? "active-btn" : ""}`} onClick={() => {
                        this.changeWindow(1)
                    }}>Answered Questions
                    </button>
                    {
                        this.currentQs === 0 ?
                            questions.unanswered.map((question) => {
                                return <QuestionCard key={question.id} question={question} users={users} card_type={this.currentQs}/>
                            }) :
                            questions.answered.map((question) => {
                                return <QuestionCard key={question.id} question={question} users={users} card_type={this.currentQs}/>
                            })
                    }
                </div>
            </div>
        )
    }

}

function mapStateToProps({authedUser, users, questions}) {
    const userAnswersIds = Object.keys(users[authedUser].answers);

    const answered = Object.values(questions)
        .filter((qs) => userAnswersIds.includes(qs.id)).sort((q) => -q.timestamp);

    const unanswered = Object.values(questions)
        .filter((qs) => !userAnswersIds.includes(qs.id)).sort((q) => -q.timestamp);

    return {
        users,
        questions: {
            answered,
            unanswered
        }
    };
}

export default connect(mapStateToProps)(Home);
