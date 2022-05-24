import { Component } from 'react';


type CoordinatsProps = {
    axis: string[];
    ordinate: string[];
};

export class Coordinats extends Component<CoordinatsProps> {

    ordinate = this.props.ordinate.map((item, index) => {
        return (
            <div key={item}
                className='coordinate-ordinate' style={{ left: `${index * 12.5 + 10}%` }}>{item}
            </div>
        )
    })
    axis = this.props.axis.map((item, index) => {
        return (
            <div key={item}
                className='coordinate-axis' style={{ top: `${index * 12.5}%` }}>{this.props.axis[index]}
            </div>
        )
    })
    
    render() {
        return (
            <div key='coordinats' className='coordinats'>
                {this.axis}
                {this.ordinate}
            </div>
        )
    }
}