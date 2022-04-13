import React, { Component } from "react";

class GanGen2 extends Component {
    constructor() {
        super();
        this.state = {
            a: 0,
            b: 0,
            c: 0,
            d: 0,
            e: 0,
            output: 0
        }
    }

    Cek = () => {
        let a = this.state.a;
        let b = this.state.b;
        let c = this.state.c;
        let d = this.state.d;
        let e = this.state.e;
        let output = this.state.output;
        if (a % 2 === 0 && b % 2 == 0 && c % 2 == 0 && d % 2 == 0 && e % 2 == 0) {
            output = "Genap, Genap, Genap, Genap, Genap";
        }
        else if(a % 1 === 0 && b % 1 === 0 && c % 1 === 0 && d % 1 === 0 && e % 1 === 0){
            output = "Ganjil, Ganjil, Ganjil, Ganjil, Ganjil";
        }
        else if(a % 1 === 0 && b % 2 === 0 && c % 1 === 0 && d % 2 === 0 && e % 1 === 0){
            output = "Ganjil, Genap, Ganjil, Genap, Ganjil";
        }
        else if(a % 2 === 0 && b % 1 === 0 && c % 2 === 0 && d % 1 === 0 && e % 2 === 0){
            output = "Genap, Ganjil, Genap, Ganjil, Genap";
        }
        else if(a % 1 === 0 && b % 1 === 0 && c % 2 === 0 && d % 2 === 0 && e % 2 === 0){
            output = "Ganjil, Ganjil, Genap, Genap, Genap";
        }
        else if(a % 2 === 0 && b % 2 === 0 && c % 1 === 0 && d % 1 === 0 && e % 1 === 0){
            output = "Genap, Genap, Ganjil, Ganjil, Ganjil";
        }
        this.setState({
            output
        });
    }

    changeA = (event) => {
        this.setState({
            a: event.target.value
        });
    }
    changeB = (event) => {
        this.setState({
            b: event.target.value
        });
    }
    changeC = (event) => {
        this.setState({
            c: event.target.value
        });
    }
    changeD = (event) => {
        this.setState({
            d: event.target.value
        });
    }
    changeE = (event) => {
        this.setState({
            e: event.target.value
        });
    }

    render() {
        return (
            <div className="container col-md-4">
                <br/>
                <div className="card">
                    <div className="card-header bg-danger text-center text-white">
                        <h3>Ganjil Genap Part 2</h3>
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <label>Pertama</label>
                            <input type="text" className="form-control" onChange={this.changeA}></input>
                        </div>
                        <div className="form-group">
                            <label>Kedua</label>
                            <input type="text" className="form-control" onChange={this.changeB}></input>
                        </div>
                        <div className="form-group">
                            <label>Ketiga</label>
                            <input type="text" className="form-control" onChange={this.changeC}></input>
                        </div>
                        <div className="form-group">
                            <label>Keempat</label>
                            <input type="text" className="form-control" onChange={this.changeD}></input>
                        </div>
                        <div className="form-group">
                            <label>Kelima</label>
                            <input type="text" className="form-control" onChange={this.changeE}></input>
                        </div>
                        <br/>
                        <div className="form-group">
                            <button className="btn btn-danger form-control" onClick={this.Cek}>Cek</button>
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

export default GanGen2;