import React from "react";
import InputComponent from "./InputComponent";
import DisplayComponent from "./DisplayComponent";

class LiftingStateUp extends React.Component {
    constructor(props) {
        console.log("LIFTING STATEUP CONSTRUCTOR");
        super(props);
        this.state = {
            inputValue: "Type to change"
        };

        this.onChangeInput = this.onChangeInput.bind(this);
    }

    onChangeInput(e) {
        this.setState({
            inputValue: e.target.value
        });
    }

    render() {
        console.log("LIFTING STATEUP RENDER");
        return (
            <>
                {/* SHARING STATE BETWEEN SIBLING BY LIFTING STATEUP INTO NEAREST ANCESTOR */}
                <InputComponent
                    inputValue={this.state.inputValue}
                    onChangeInput={this.onChangeInput}
                />
                <DisplayComponent inputValue={this.state.inputValue} />
            </>
        )
    }
}

export default LiftingStateUp;