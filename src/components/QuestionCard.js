import React from 'react';

function questionCard({question}) {
    return (
        <div className="question-card">
            <div className="qs-header">
                <h3>{question.author} asks: </h3>
            </div>
            <div className="info">
                <div className="qs-img-wrapper">
                    <img src={question.img} alt={`${question.author} avatar`}/>
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