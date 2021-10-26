import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import {GetUsersData, saveQuestionAnswer} from '../actions/shared'

class QuestionDetail extends Component {
    question_id = this.props.computedMatch.params['question_id'];


    state = {
        userOption: null,
        submit_redirect: false,
        card_type: typeof (this.props.location.state) !== 'undefined' ? this.props.location.state.card_type : 1,
        question: this.props.questions[this.question_id],

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

        setTimeout(() => {
            // change card_type to poll votes card, updating question answers
            // todo: add action creator promise maybe ? or destruct question from computedMatch in render function
            this.setState({card_type: 1, question: this.props.questions[this.question_id]})
        }, 600);
    };

    get_percentage = (option) => {
        const question = this.state.question;
        const all_votes = question.optionOne.votes.length + question.optionTwo.votes.length;
        const votes = option.votes.length;
        return {
            all_votes,
            votes,
            percentage: ((100 * votes) / all_votes).toFixed(1)
        };
    };


    render() {
        // console.warn('location state: ', this.props.location.state,
        //     'local state: ', this.state,
        //     'valid path ', this.question_id, this.state.question);

        if (!this.state.question) {
            return (<Redirect to="/404"/>)
        }


        let card_type = this.state.card_type;
        let question = this.state.question;

        const {userOption} = this.state;
        const {authedUser, users} = this.props;


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