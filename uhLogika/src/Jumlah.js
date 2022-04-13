import React, { Component } from "react";

class Jumlah extends Component {
    constructor() {
        super();
        this.state = {
            sum: 0,
            num: 0,
            total: 0
        }
    }

    Cek = () => {
        let sum = this.state.sum;
        let num = this.state.num;
        let total = this.state.total;
        for (const i=1; i<=num; i++){
            sum += 1;
            if(i < num){
                total = i + "";
            }else if(i == num){
                total = i;
            }
        }
        this.setState({
            total
        });
    }

    changeSum = (event) => {
        this.setState({
            sum: event.target.value
        });
    }

    changeNum = (event) => {
        this.setState({
            num: event.target.value
        });
    }

    render() {
        return (
            <div className="container col-md-4">
                <br/>
                <div className="card">
                    <div className="card-header bg-success text-center text-white">
                        <h3>Penjumlahan</h3>
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <label>Pertama</label>
                            <input type="number" className="form-control" onChange={this.changeSum}></input>
                        </div>
                        <br/>
                        <div className="form-group">
                            <button className="btn btn-success form-control" onClick={this.Cek}>Cek</button>
                        </div>
                        <br/>
                        <h5 className="p-3 form-control text-center">{this.state.total}</h5>                   
                    </div>
                </div>
                <br/>
            </div>
        );
    }
}

export default Jumlah;