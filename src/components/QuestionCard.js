import React from 'react';

function convertTimestamp(timestamp){
    return  new Date(timestamp).toString()
}

function questionCard({question, users}) {
    const user_img =  users[question.author].avatarURL;
    return (
        <div className="question-card">
            <div className="qs-header">
                <p><span className="username">{question.author}</span> asks : <span className="date">{convertTimestamp(question.timestamp)}</span></p>
            </div>
            <div className="info">
                <div className="qs-img-wrapper">
                    <img src={user_img} alt={`${question.author} avatar`}/>
                </div>
                <div className="info-body">
                    <h3>Would you rather </h3>
                    <h4 className="question">{question.optionOne.text}</h4>
                    <button className="poll-btn">View Poll</button>
                </div>
            </div>
        </div>
    )
}


export default questionCard;