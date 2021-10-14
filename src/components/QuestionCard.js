import React from 'react';

function questionCard({question, users}) {
    const user_img =  users[question.author].avatarURL;
    return (
        <div className="question-card">
            <div className="qs-header">
                <h3>{question.author} asks: </h3>
            </div>
            <div className="info">
                <div className="qs-img-wrapper">
                    <img src={user_img} alt={`${question.author} avatar`}/>
                </div>
                <div className="info-body">
                    <h4>Would you rather </h4>
                    <p>{question.optionOne.text}</p>
                    <button className="poll-btn">View Poll</button>
                </div>
            </div>
        </div>
    )
}


export default questionCard;