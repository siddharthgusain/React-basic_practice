import React from "react";

class InputComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log("InputComponent RENDER")
        return (
            <>
                <input
                    value={this.props.inputValue}
                    onChange={(e) => this.props.onChangeInput(e)}
                />
            </>
        )
    }

}

export default InputComponent;