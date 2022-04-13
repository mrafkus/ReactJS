import React, { Component } from "react";

class Maksimum extends Component {
    constructor() {
        super();
        this.state = {
            satu: 0,
            dua: 0,
            tiga: 0,
            empat: 0,
            lima: 0,
            output: 0
        }
    }

    Hitung = () => {
        let satu = this.state.satu;
        let dua = this.state.dua;
        let tiga = this.state.tiga;
        let empat = this.state.empat;
        let lima = this.state.lima;
        let output = this.state.output;
        if (satu > dua && satu > tiga && satu > empat && satu > lima) {
            output = satu;
        }
        else if (dua > satu && dua > tiga && dua > empat && dua > lima) {
            output = dua;
        }
        else if (tiga > satu && tiga > dua && tiga > empat && tiga > lima) {
            output = tiga;
        }
        else if (empat > satu && empat > dua && empat > tiga && empat > lima) {
            output = empat;
        }
        else if (lima > satu && lima > dua && lima > tiga && lima > empat) {
            output = lima;
        }
        this.setState({
            output
        });
    }

    changeSatu = (event) => {
        this.setState({
            satu: event.target.value
        });
    }

    changeDua = (event) => {
        this.setState({
            dua: event.target.value
        });
    }

    changeTiga = (event) => {
        this.setState({
            tiga: event.target.value
        });
    }

    changeEmpat = (event) => {
        this.setState({
            empat: event.target.value
        });
    }

    changeLima = (event) => {
        this.setState({
            lima: event.target.value
        });
    }


    render() {
        return (
            <div className="container col-md-4">
                <br/>
                <div className="card">
                    <div className="card-header bg-success text-center text-white">
                        <h3>Nilai Maksimum</h3>
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <label>Pertama</label>
                            <input type="number" className="form-control" onChange={this.changeSatu}></input>
                        </div>
                        <div className="form-group">
                            <label>Kedua</label>
                            <input type="number" className="form-control" onChange={this.changeDua}></input>
                        </div>
                        <div className="form-group">
                            <label>Ketiga</label>
                            <input type="number" className="form-control" onChange={this.changeTiga}></input>
                        </div>
                        <div className="form-group">
                            <label>Keempat</label>
                            <input type="number" className="form-control" onChange={this.changeEmpat}></input>
                        </div>
                        <div className="form-group">
                            <label>Kelima</label>
                            <input type="number" className="form-control" onChange={this.changeLima}></input>
                        </div>
                        <br/>
                        <div className="form-group">
                            <button className="btn btn-success form-control" onClick={this.Hitung}>Hitung</button>
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

export default Maksimum;