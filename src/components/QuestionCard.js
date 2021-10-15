import React from 'react';
import {Link} from 'react-router-dom';


function convertTimestamp(timestamp) {
    return new Date(timestamp).toString()
}

function questionCard({question, users, card_type}) {
    const user_img = users[question.author].avatarURL;
    return (
        <div className="question-card">
            <div className="qs-header">
                <p>
                    <span className="username">{question.author}</span> asks : <span
                    className="date">{convertTimestamp(question.timestamp)}</span>
                </p>
            </div>
            <div className="info">
                <div className="qs-img-wrapper">
                    <img src={user_img} alt={`${question.author} avatar`}/>
                </div>
                <div className="info-body">
                    <h3>Would you rather </h3>
                    <h4 className="question">{question.optionOne.text}</h4>
                    {
                        card_type === 0 ?
                            <Link to={{
                                pathname: `questions/${question.id}`,
                                state: {question: question, card_type: card_type}
                            }}

                                  className="poll-btn"> Answer Poll</Link>
                            :
                            <Link to={{
                                pathname: `questions/${question.id}`,
                                state: {question: question, card_type: card_type}
                            }}
                                  className="poll-btn"> View Poll Votes </Link>
                    }
                </div>
            </div>
        </div>
    )
}


export default questionCard;