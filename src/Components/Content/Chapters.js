import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class TEST extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: null
        }
    }

    componentWillMount() {
        fetch("http://localhost:4000/readJson", {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(json => {
                this.setState({
                    text: json
                })
                console.log(json)
            })
            .catch(err => {
                console.log("EROARe", err);
            })
    }
    render() {
        if(!this.state.text){
            return <h3>Loading..</h3>
        }
        return (
            <Fragment>
            <div>{this.state.text.text}</div>
            <div>{this.state.text.code}</div>
            </Fragment>
        )
    }
}

export default TEST;