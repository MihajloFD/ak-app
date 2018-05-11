import React, { Component } from 'react';
import {converters} from './assets/converters';
import './assets/css/App.css';

class App extends Component {
  renderConverter (converter) {
    return (
      <div key={converter.id} className='col-md-3'>      
        <div className='converters'>
          <p className='converter-name'>{converter.name}</p>
          <div className='converter'>
           <img src={converter.jpeg_file_url} className="converter-img" alt={converter.name} />
           <div className='converter-hover'>
              <p alt={converter.pressure_rating} >Rressure rating: {converter.pressure_rating}</p>
              <p>Voltage rating: {converter.voltage_rating}</p>
              <p>Wiregauge: {converter.wiregauge}</p>
              <p>Contacts: {converter.contacts}</p>              
           </div>
          </div>
          <div className='icons-wraper'>
            <div className='icons'>
              <div className="heart"/>
              <div className="right"/>
              <div className="magic"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
  render() {
    console.log(converters);
    return (
      <div className='container'>
        <div className='row'>
        {converters ? converters.map(this.renderConverter) : ''}
        </div>
      </div>
    );
  }
}

export default App;
