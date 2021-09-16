import React, { Component } from "react";

import "./App.css";

class App extends Component {
    state = {
        result: "",
    };

    press = (e) => {
        this.setState({ result: this.state.result + e.target.name });
    };
    clear = () => {
        this.setState({ result: "" });
    };
    calc = () => {
        try {
            this.setState({ result: eval(this.state.result) });
        } catch (error) {
            this.setState({ result: "Not valid equation" });
        }
    };
    render() {
        return (
            <div className="main">
                <div className="screen">
                    <input
                        type="text"
                        value={this.state.result}
                        id="screen"
                        readOnly
                    />
                </div>
                <div className="keyboard">
                    <button onClick={this.clear} id="clear">
                        C
                    </button>
                    <button onClick={this.press} name="/">
                        /
                    </button>
                    <button onClick={this.press} name="*">
                        *
                    </button>
                    <button onClick={this.press} name="-">
                        -
                    </button>
                    <button onClick={this.press} name="7">
                        7
                    </button>
                    <button onClick={this.press} name="8">
                        8
                    </button>
                    <button onClick={this.press} name="9">
                        9
                    </button>
                    <button onClick={this.press} name="+">
                        +
                    </button>
                    <button onClick={this.press} name="4">
                        4
                    </button>
                    <button onClick={this.press} name="5">
                        5
                    </button>
                    <button onClick={this.press} name="6">
                        6
                    </button>
                    <button onClick={this.press} name="1">
                        1
                    </button>
                    <button onClick={this.press} name="2">
                        2
                    </button>
                    <button onClick={this.press} name="3">
                        3
                    </button>
                    <button onClick={this.calc} name="=">
                        =
                    </button>
                    <button onClick={this.press} name="0">
                        0
                    </button>
                    <button onClick={this.press} name=".">
                        .
                    </button>
                </div>
            </div>
        );
    }
}

export default App;
