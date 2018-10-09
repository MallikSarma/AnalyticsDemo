import React,{Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Charts extends Component {
    constructor(props){
        super(props)
        this.state = {
            chartData:props.chartData
    }
}

componentWillReceiveProps(nextProps){
          this.setState({
              chartData:nextProps.chartData
          })
}
static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
    text:'months data',
    fontSize:20,
    chartType:'Line'
}
getChartProperties(chartType) {
    return( {
         title:{
             display:this.props.displayTitle,
             text:this.props.text,
             fontSize:this.props.fontSize
         },
         responsive:true,
         scaleShowValues: chartType !== 'Pie' ? true: false,
         scales: chartType !== 'Pie' ? {
           yAxes: [{
             ticks: {
               beginAtZero: true
             }
           }],
           xAxes: [{
             ticks: {
               autoSkip: false
             }
           }]
         } : {},
         legend:{
             display:this.props.displayLegend,
             position:this.props.legendPosition
 
         }
     })
 }
    render() {
        return(
            <div className="chart" width='200' height='200'>
     { this.props.chartType === 'Bar' ? <Bar
	data={this.state.chartData}
    height={300}
    width={700}
	options= {this.getChartProperties('Bar')}
/>
: this.props.chartType === 'Line' ?
<Line
	data={this.state.chartData}
    height={300}
    width={700}
	options={this.getChartProperties('Line')}
/>
:
<Pie
	data={this.state.chartData}
    height={300}
    width={700}
	options= {this.getChartProperties('Pie')}
/>
     }
</div>
        )
    }
    
}

export default Charts;