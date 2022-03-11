import React, {Component} from 'react';  
import './App.css';  
import Alert from './component/Alert';
// import element Alert yang telah dibuat  
  
class App extends Component {  
  render(){  
    return (  
        <div className="App container col-sm-4">    
          <br/>
          <h4>Body Mass Index</h4>  
          <br /><br/>
          <b className="text-left">Berat</b>  
          <input type="text" className="form-control" value=""/>
          <br/>
          <b className="text-left">Tinggi</b>  
          <input type="text" className="form-control" value=""/>  
          <br/>
          <button className="btn btn-info">Hitung</button>
            
          <br/><br/>
          <h3>Hasil</h3>
          <Alert type={this.state.type} header={this.state.header}>  
            {this.state.content}  
          </Alert>
        </div>  
    );    
  } 
  
  constructor(){  
    super();  
    this.state = {  
      type: "danger",  
      header: "Anda Gemuk",  
      content: ""  
    }  
  } 
  
  // fungsi untuk mengubah tipe  
  changeTypeAlert = (event) =>{  
  this.setState({type: event.target.value});  
  }  
  // fungsi untuk mengubah header  
  changeHeaderAlert = (event) => {  
  this.setState({header: event.target.value});  
  }  
  // fungsi untuk mengubah content  

}  
export default App;
