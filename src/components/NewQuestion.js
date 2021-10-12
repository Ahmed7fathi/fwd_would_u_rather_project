import React, {Component} from 'react'

class NewQuestion extends Component {
    render() {
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
                        <input type="text" placeholder="Enter Option One Text here"/>
                        <h2 id="or"><span> OR </span></h2>
                        <input type="text" placeholder="Enter Option One Text here"/>
                        <button className="new-qs-btn">Submit</button>
                    </div>
                </div>
            </div>
        )
    }

}

export default NewQuestion;
