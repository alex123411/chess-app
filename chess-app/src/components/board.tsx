import React from 'react';
import { useState, useEffect, useRef, Component } from "react";

import {Cells} from "./cells"
import {Coordinats} from "./coordinats"

type BoardProps = {

}

export class Board extends Component<BoardProps>{

  private axcis = ['1', '2', '3', '4', '5', '6', '7', '8'];
  private ordinate = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

  render() {
    return (
    <div className='board-container'>
      <div className='board'>
        <Cells ordinate={this.ordinate} axis={this.axcis}/>
        <Coordinats ordinate={this.ordinate} axis={this.axcis}/>
      </div>
    </div>
    )
  }
}