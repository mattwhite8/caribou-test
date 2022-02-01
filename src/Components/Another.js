import React, { Component } from "react";

class Another extends Component {
    componentDidMount() {
        console.log("hello again")
    }

    render() {
        return ( 
            <div>Here is another old school component.</div>
        );
    }
}

export default Another;