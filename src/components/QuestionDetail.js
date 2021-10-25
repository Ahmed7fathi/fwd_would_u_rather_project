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

    get_percentage = (option) => {
        const {question} = this.props.location.state;
        const all_votes = question.optionOne.votes.length + question.optionTwo.votes.length;
        const votes = option.votes.length;
        return {
            all_votes,
            votes,
            percentage: ((100 * votes) / all_votes).toFixed(1)
        };
    };


    render() {
        if ( !this.props.location.state){
            return (<Redirect to="/404"/>)
        }

        const {question, card_type} = this.props.location.state;
        const {userOption} = this.state;
        const {authedUser, users} = this.props;

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
                                            <img src={users[question.author].avatarURL} alt={`${question.author} avatar`}/>
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
                            <div>
                                <div className="details-card">
                                    <div className="card-header">
                                        <p>
                                            Asked by
                                            <span className="username"> {question.author}</span>
                                        </p>
                                    </div>
                                    <div className="info">
                                        <div className="qs-img-wrapper">
                                            <img src={users[question.author].avatarURL}
                                                 alt={`${question.author} avatar`}/>
                                        </div>
                                        <div className="info-body">
                                            <h1>Results : </h1>

                                            <div className={
                                                question.optionOne.votes.includes(authedUser) ?
                                                    'question selected' : 'question'
                                            }
                                            >
                                                <h4> {question.optionOne.text} </h4>
                                                <div className="bar-holder">
                                                    <div
                                                        className="bar"
                                                        style={{width: `${this.get_percentage(question.optionOne).percentage}%`}}
                                                    >
                                                        {this.get_percentage(question.optionOne).percentage}
                                                    </div>
                                                </div>
                                                <p className="votes">
                                                    {this.get_percentage(question.optionOne).votes}
                                                    <span className="out"> out of </span>
                                                    {this.get_percentage(question.optionOne).all_votes}
                                                </p>
                                                {
                                                    question.optionOne.votes.includes(authedUser) && (
                                                        <p className="user-vote"> Your vote </p>
                                                    )
                                                }
                                            </div>

                                            <div className={
                                                question.optionTwo.votes.includes(authedUser) ?
                                                    'question selected' : 'question'
                                            }>
                                                <h4> {question.optionTwo.text} </h4>
                                                <div className="bar-holder">
                                                    <div
                                                        className="bar"
                                                        style={{width: `${this.get_percentage(question.optionTwo).percentage}%`}}
                                                    >
                                                        {this.get_percentage(question.optionTwo).percentage}
                                                    </div>
                                                </div>
                                                <p className="votes">
                                                    {this.get_percentage(question.optionTwo).votes}
                                                    <span className="out"> out of </span>
                                                    {this.get_percentage(question.optionTwo).all_votes}
                                                </p>
                                                {
                                                    question.optionTwo.votes.includes(authedUser) && (
                                                        <p className="user-vote"> Your vote </p>
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                }
            </div>
        )
    }
}

function mapStateToProps({authedUser, users, questions}) {
    return {
        authedUser,
        users,
        questions
    }
}


export default connect(mapStateToProps)(QuestionDetail);