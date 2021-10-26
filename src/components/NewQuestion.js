import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import {addNewQuestion} from '../actions/shared'

class NewQuestion extends Component {

    state = {
      redirect: false
    };

    addQuestion() {
        const opOneDom = document.getElementById('option-one');
        const opTwoDom = document.getElementById('option-two');
        const authedUser = this.props.authedUser;

        const question = {
            author: authedUser,
            optionOneText: opOneDom.value,
            optionTwoText: opTwoDom.value,
        };
        opOneDom.value = '';
        opTwoDom.value = '';

        this.props.dispatch(addNewQuestion(authedUser, question));
        this.setState({redirect: true})
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/"/>;
        }
        return (
            <div className="new-question-page">
                <div className="card">
                    <div className="card-header">
                        <h2>Create A new Question</h2>
                    </div>
                    <div className="card-body">
                        <p>Complete the Question: </p>
                        <br/>
                        <h5>Would you rather ....</h5>
                        <br/>
                        <input type="text" id="option-one" placeholder="Enter Option One Text here"/>
                        <h2 id="or"><span> OR </span></h2>
                        <input type="text" id="option-two" placeholder="Enter Option One Text here"/>
                        <button className="new-qs-btn" onClick={() => {
                            this.addQuestion()
                        }}>Submit
                        </button>
                    </div>
                </div>
            </div>
        )
    }

}

function mapStateToProps({authedUser}) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(NewQuestion);
