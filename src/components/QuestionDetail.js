import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import {GetUsersData, saveQuestionAnswer} from '../actions/shared'

class QuestionDetail extends Component {
    state = {
        userOption: null,
        submit_redirect: false
    };

    handleChange = (e) => this.setState({userOption: e.target.value});


    handleAnswer = () => {
        const authedUser = this.props.authedUser;
        const qid = this.props.location.state.question.id;
        const answers = this.state.userOption;

        this.props.dispatch(saveQuestionAnswer(
            authedUser,
            qid,
            answers
        ));
               this.props.dispatch(GetUsersData());


        this.setState({submit_redirect: true})

    };


    render() {
        const {question, card_type} = this.props.location.state;
        const {userOption} = this.state;

        if (this.state.submit_redirect) {
            return (<Redirect to="/"/>)

        }


        return (
            <div className="question-details-page">
                {
                    card_type === 0 ? (
                            <div>
                                <div className="question-card">
                                    <div className="qs-header">
                                        <p>
                                            <span className="username">{question.author}</span> asks :
                                        </p>
                                    </div>
                                    <div className="info">
                                        <div className="qs-img-wrapper">
                                            <img src={question.avatarURL} alt={`${question.author} avatar`}/>
                                        </div>
                                        <div className="info-body">
                                            <h3>Would you rather </h3>
                                            <div className="detailed-question">
                                                <input type="radio" id="optionOne" name="qs"
                                                       value="optionOne"
                                                       onChange={this.handleChange}/>
                                                <label htmlFor="optionOne">{question.optionOne.text}</label>
                                                <h4 id="or">OR</h4>
                                                <input type="radio" id="optionTwo" name="qs"
                                                       value="optionTwo"
                                                       onChange={this.handleChange}/>
                                                <label htmlFor="optionTwo">{question.optionTwo.text}</label>
                                            </div>
                                            <button
                                                className={userOption ? "poll-btn" : "disabled-btn"}
                                                onClick={() => this.handleAnswer()}
                                                disabled={!userOption}
                                            > Answer
                                            </button>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        ) :
                        (
                            <h1>details</h1>

                        )

                }
            </div>
        )
    }
}

function mapStateToProps({authedUser}) {
    return {
        authedUser
    }
}


export default connect(mapStateToProps)(QuestionDetail);