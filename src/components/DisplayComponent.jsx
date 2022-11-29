import React from "react";

class DisplayComponent extends React.Component {
    constructor(props) {
        console.log("DisplayComponent CONSTRUCTOR")
        super(props);
    }

    render() {
        console.log("DisplayComponent RENDER");
        return <h1>{this.props.inputValue}</h1>
    }
}

export default DisplayComponent;