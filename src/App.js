import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './component/chart';
import Charts from './component/charts';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      chartData:[],
      value:'Bar',
      selectedMeasure:'Private Assets (BN)',
      selectedDataType:'Global Locations',
      items: this.getItems('Global Locations'),
     itemsData: this.getItemsData('Global Locations')
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleChangedMeasure = this.handleChangedMeasure.bind(this)
    this.handleChangedLocation = this.handleChangedLocation.bind(this)
  }
  getItems (dataType) {
    return(dataType === 'Global Locations'?['Country','Private Assets (BN)',
    '% Assets','Funds','% Funds'] : ['Fund Type', 'Assets (BN)', '% Assets', 'Funds', '% Funds', 'Average Size (BN)'])
  }
  getItemsData (dataType) {
    return (dataType === 'Global Locations'?
          [{'a':'United States', 'b':963, 'c': 42, 'd':3000, e:32},
          {'a':'Cayman Islands', 'b':640, 'c': 31, 'd':45, e:21},
          {'a':'Multi Jurisdicional', 'b':458, 'c': 20.5, 'd':37, e:9.5},
          {'a':'China', 'b':26, 'c': 2, 'd':45, e:5},
          {'a':'Bermuda', 'b':23, 'c': 1, 'd':57, e:2},
          {'a':'Ireland', 'b':23.5, 'c': 1.5, 'd':67, e:4.5},
          {'a':'Canada', 'b':22.5, 'c': 2.5, 'd':56, e:6.5},
          {'a':'Singapore', 'b':4, 'c': 0.5, 'd':89, e:1.5},
          {'a':'United Kingdom', 'b':6, 'c': 0.4, 'd':56, e:7.4}] : 
          [{'a':'Hedge', 'b':773, 'c': 80, 'd':3000, e:32, f:0.3},
          {'a':'Private Enquiry', 'b':238, 'c': 10, 'd':45, e:21, f:0.5},
          {'a':'Real Estate', 'b':28.5, 'c': 1.5, 'd':37, e:19.5, f:0.7},
          {'a':'Venture Capital', 'b':24, 'c': 2, 'd':45, e:5, f:0.2},
          {'a':'Asset Backend Securities', 'b':0.30, 'c': 1, 'd':57, e:2, f:0.45},
          {'a':'Liquidity', 'b':6.5, 'c': 1.5, 'd':67, e:4.5, f:0.34},
          {'a':'Others', 'b':67.5, 'c': 2.5, 'd':56, e:6.5, f:0.8}] )
  }
  handleChange (event) {
    const value = event.target.value
    this.setState({
      value,
      selectedMeasure:'Private Assets (BN)',
      chartData:this.getChartData('Private Assets (BN)','Global Locations')
    })
  }
  handleChangedMeasure (event) {
    const selectedMeasure = event.target.value
    this.setState({
      selectedMeasure,
      chartData:this.getChartData(selectedMeasure, this.state.selectedDataType)
    })
  }
  handleChangedLocation (event) {
    const selectedDataType = event.target.value
    const selectedMeasure =  selectedDataType === 'Global Locations' ? 'Private Assets (BN)': 'Assets (BN)'
    this.setState({
      selectedDataType,
      value:'Bar',
      selectedMeasure,
      items: this.getItems(selectedDataType),
      itemsData: this.getItemsData(selectedDataType),
      chartData:this.getChartData( selectedMeasure, selectedDataType)
    })
  }
  componentWillMount(){
    this.setState({
      chartData:this.getChartData('Private Assets (BN)', 'Global Locations')
    })
  }

  getChartData(measure, dataType){
    //ajax calls here
{
   return(  {
     labels: dataType === 'Global Locations' ? ['United States', 'Cayman Islands', 'MultiJurisdicional', 'China', 'Bermuda', 'Ireland',
     'Canada','Singapore','United Kingdom'] :
      ['Hedge', 'Private Enquiry', 'Real Estate', 'Venture Capital', 'Asset Backend Securities', 'Liquidity','Others'],
      datasets: [
        {
          label: measure,
          backgroundColor: ['rgba(255,99,132,0.6)',
          'rgba(54,162,235,0.6)',
          'rgba(255,206,86,0.6)',
          'rgba(75,192,192,0.6)',
          'rgba(153,102,255,0.6)',
          'rgba(255,159,64,0.6)',
          'rgba(255,207,64,0.6)',
          'rgba(255,208,64,0.6)',
          'rgba(255,209,64,0.6)'],
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: dataType === 'Global Locations' ?  measure === 'Private Assets (BN)'? [963,640,458,26,23,23.5,22.5,4,6] : measure === '% Assets'?
          [42, 31, 20.5, 2, 1, 1.5, 2.5,0.5,0.4] : measure === 'Funds'?
           [3000,45,37,45,57,67,56,89,56]: [32, 21, 19.5, 5, 2, 4.5, 6.5,1.5,7.4] :
           measure === 'Assets (BN)'? [773,238,28.5,24,0.30,6.5,67.5] : measure === '% Assets'?
           [80, 10, 1.5, 2, 1, 1.5, 2.5] : measure === 'Funds'?
            [3000,45,37,45,57,67,56]: measure === '% Funds'?
            [32, 21, 19.5, 5, 2, 4.5, 6.5] : [0.3,0.5,0.7,0.2,0.45,0.34,0.8]
        }
      ]
  })
}
  }
  render() {
    const {
    value,
    selectedMeasure,
    selectedDataType,
    chartData,
    items,
    itemsData
    } = this.state
    return (
      <table>
        <tr>
        <td>
      <div className="App">
      <h3> Select DataType </h3>
        
        <select value={selectedDataType} onChange={this.handleChangedLocation}>
                  <option value='Global Locations' >Global Locations</option>
                  <option value='Private Fund Types'>Private Fund Types</option>
         </select>
              
         
      <table>
        <tr>
          <td>
          <h4> Select Chart Type </h4>
          </td>
          <td>
        <select value={value} onChange={this.handleChange}>
                  <option value='Pie' >Pie</option>
                  <option value='Line'>Line</option>
                  <option value='Bar'>Bar</option>
                </select>
                </td>
                <td>
          <h4> Select Measure </h4>
          </td>
                <td>
                { selectedDataType === 'Global Locations' ? <select value={selectedMeasure} onChange={this.handleChangedMeasure}>
                  <option value='Private Assets (BN)'>Private Assets (BN)</option>
                  <option value='% Assets'>% Assets</option>
                  <option value='Funds'>Funds</option>
                  <option value='% Funds'>% Funds</option>
                </select> :
                <select value={selectedMeasure} onChange={this.handleChangedMeasure}>
                  <option value='Assets (BN)'>Assets (BN)</option>
                  <option value='% Assets'>% Assets</option>
                  <option value='Funds'>Funds</option>
                  <option value='% Funds'>% Funds</option>
                  <option value='Average Size (BN)'>Average Size (BN)</option>
              </select>  }        
                </td>
          </tr>
                </table>
        {/*   <Chart chartData={this.state.chartData} text={'exp'}legendPosition='bottom' fontSize={25}/> */}
          <Charts chartType = {value} chartData={chartData} text={selectedDataType} legendPosition='top' fontSize={15}/>
        </div>
        </td>
        <td>
          <div>
          <h3> Report </h3>
          <table border={1}>
          <thead >
            <tr>
            {Object.keys(items).map((key, i) => {
              return (<th>{items[key]}</th>)
            }) }
            </tr>
          </thead>
          <tbody>
             {Object.keys(itemsData).map((key, i) => {
              return (<tr data-qa={`tr${key}`} key={i}>
                <td>{itemsData[key].a}</td>
                <td>{itemsData[key].b}</td>
                <td>{itemsData[key].c}</td>
                <td>{itemsData[key].d}</td>
                <td>{itemsData[key].e}</td>
                {itemsData[key].f &&  <td>{itemsData[key].f}</td>}
              </tr>)
            })}
          </tbody>
        </table>
</div>
          </td>
        </tr>
        </table>
    );
  }
}

export default App;
