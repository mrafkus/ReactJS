import React, { Component } from "react";

class GanGen extends Component {
    constructor() {
        super();
        this.state = {
            first: 0,
            output: 0
        }
    }

    Cek = () => {
        let first = this.state.first;
        let output = this.state.output;
        if (first % 2 == 0) {
            output = "Genap";
        }
        else{
            output = "Ganjil";
        }
        this.setState({
            output
        });
    }

    changefirst = (event) => {
        this.setState({
            first: event.target.value
        });
    }

    render() {
        return (
            <div className="container col-md-4">
                <br/>
                <div className="card">
                    <div className="card-header bg-success text-center text-white">
                        <h3>Ganjil Genap</h3>
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <label>Pertama</label>
                            <input type="number" className="form-control" onChange={this.changefirst}></input>
                        </div>
                        <br/>
                        <div className="form-group">
                            <button className="btn btn-success form-control" onClick={this.Cek}>Cek</button>
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

export default GanGen;