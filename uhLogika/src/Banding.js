import React, { Component } from "react";

class Banding extends Component {
    constructor() {
        super();
        this.state = {
            first: 0,
            second: 0,
            output: 0
        }
    }

    Hitung = () => {
        let first = this.state.first;
        let second = this.state.second;
        let output = this.state.output;
        if (first < second) {
            output = second;
        }
        else if (first > second) {
            output = first;
        }
        this.setState({
            output
        });
    }

    changeFirst = (event) => {
        this.setState({
            first: event.target.value
        });
    }

    changeSecond = (event) => {
        this.setState({
            second: event.target.value
        });
    }


    render() {
        return (
            <div className="container col-md-4">
                <br/>
                <div className="card">
                    <div className="card-header bg-primary text-center text-white">
                        <h3>Perbandingan</h3>
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <label>Pertama</label>
                            <input type="text" className="form-control" onChange={this.changeFirst}></input>
                        </div>
                        <div className="form-group">
                            <label>Kedua</label>
                            <input type="text" className="form-control" onChange={this.changeSecond}></input>
                        </div>
                        <br/>
                        <div className="form-group">
                            <button className="btn btn-primary form-control" onClick={this.Hitung}>Hitung</button>
                        </div>
                        <br/>
                        <h5 className="p-3 form-control text-center">{this.state.output}</h5>                   
                    </div>
                </div>
                <br/>
            </div>
        );
    }
}

export default Banding;