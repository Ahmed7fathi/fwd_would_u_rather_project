import React, {Component} from 'react'
import {connect} from 'react-redux'


class LeaderBoard extends Component {

    render() {
        const users = this.props.users_score;

        return (
            <div className="leaderBoard-page">
                {
                    users.map(user => (

                        <div className="score-card" key={user.id}>

                            <div className="info">
                                <div className="img-wrapper">
                                    <img src={user.avatar} alt={`${user.name} avatar`}/>
                                </div>
                                <div className="info-body">
                                    <h3>
                                        {user.name}
                                    </h3>
                                    <p> Answered questions {user.answers}</p>
                                    <hr/>
                                    <p>Created questions {user.questions}</p>
                                </div>
                                <div className="total-score">
                                    <h3 className="header">
                                        Score
                                    </h3>

                                    <div className="score-num">
                                        <p>{user.score}</p>
                                    </div>

                                </div>
                            </div>
                        </div>


                    ))
                }
            </div>
        )
    }

}

function mapStateToProps({users}) {
    const users_score = Object.values(users).map((u) => {
        return {
            id: u.id,
            name: u.name,
            avatar: u.avatarURL,
            answers: Object.keys(u.answers).length,
            questions: u.questions.length,
            score: Object.keys(u.answers).length + u.questions.length
        }
    });
    users_score.sort((a, b) => {
        return b.score - a.score
    });
    return {
        users_score
    }
}

export default connect(mapStateToProps)(LeaderBoard);
