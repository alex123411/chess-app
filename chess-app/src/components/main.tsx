import {Board} from './board';
import Header from './header';
import { useState, useEffect, useRef } from "react";

function Main() {
  return (
    <div className="row">
      <div className="col-1">
        1
      </div>
      <div className="middle col-8">
        <div className='d-flex mb-2'>
          <div className='avatar'>

          </div>
          <div className='profile-info'>
            <div className='rating'>
              600
            </div>
            <div className='nickname'>
              Alex
            </div>
          </div>
        </div>

        <Board />

        <div className='d-flex mt-2'>
          <div className='avatar'>

          </div>
          <div className='profile-info'>
            <div className='rating'>
              600
            </div>
            <div className='nickname'>
              Alex
            </div>
          </div>

        </div>
      </div>
      <div className="col-3">
        1
      </div>
    </div>
  );
}

export default Main;