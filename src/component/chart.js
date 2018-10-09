import React,{Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component {
    constructor(props){
        super(props)
        this.state = {
            chartData:props.chartData
    }
}
static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
    text:'months data',
    fontSize:25
}
    render() {
        return(
            <div className="chart">
            <Bar
	data={this.state.chartData}
    height='120'
    width='600'
	options={{
		title:{
            display:this.props.displayTitle,
            text:this.props.text,
            fontSize:this.props.fontSize
        },
        legend:{
            display:this.props.displayLegend,
            position:this.props.legendPosition

        }
	}}
/>
<table className="chart">
    <tr>
        <td>
<Line
	data={this.state.chartData}
    height='250'
    width='600'
	options={{
		title:{
            display:this.props.displayTitle,
            text:this.props.text,
            fontSize:this.props.fontSize
        },
        legend:{
            display:this.props.displayLegend,
            position:this.props.legendPosition

        }
	}}
/>
</td>
<td>
<Pie
	data={this.state.chartData}
    height='300'
    width='600'
	options={{
		title:{
            display:this.props.displayTitle,
            text:this.props.text,
            fontSize:this.props.fontSize
        },
        legend:{
            display:this.props.displayLegend,
            position:this.props.legendPosition

        }
	}}
/>
</td>
</tr>
</table>
            </div>
        )
    }
    
}

export default Chart;