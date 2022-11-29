import React from "react";

class Composition extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        return <div>
            {this.props.value}
            {this.props.children}
        </div>
    }
}

export default Composition;