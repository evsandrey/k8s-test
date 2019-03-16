import React, { Component } from 'react';
import axios from 'axios';


class TesterPage extends Component {
    state = {
        index: ""
    };

    componentDidMount() {
        this.getSession();
    }

    async getSession() {
        const resp = await axios.get("http://localhost:8080/newSession");
        this.setState({index : resp})
    }

    handleSubmit = async(event) =>  {
        this.setState({index : ""})
        this.getSession();
    }

    render() {
        return (
            <div>
                {this.state.index}
                <form onSubmit={this.handleSubmit}>
                    <label>reget session</label>
                    <input></input>
                    <button>Submit</button>
            </form>
            </div>
        );
    }
}

export default TesterPage;