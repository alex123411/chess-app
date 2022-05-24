import { Component } from 'react';

enum CellColors {
    DARK = "#769656",
    LIGHT = "#eeeed2"
}
type CellsProps = {
    axis: string[];
    ordinate: string[];
};

export class Cells extends Component<CellsProps> {

    getColor(x: number, y: number) {
        if (x % 2 === 0) {
            if (y % 2 === 0) return CellColors.DARK;
            else return CellColors.LIGHT;
        } else {
            if (y % 2 === 0) return CellColors.LIGHT;
            else return CellColors.DARK;
        }
    }

    cells = this.props.axis.map((items, index) => {
        return (
            this.props.ordinate.map((subItems, sIndex) => {
                return (
                    <div
                        key={`${index}${sIndex}`}
                        style={{ background: this.getColor(index, sIndex) }}>
                    </div>
                );
            })
        )
    })

    render() {
        return (
            <div key='cells' className='cells'>
                {this.cells}
            </div>
        )
    }
}