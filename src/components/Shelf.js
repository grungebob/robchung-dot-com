import React from 'react';
import ShelfRow from './ShelfRow.js';


const Shelf = (props) => (
  <table id="table1">
    <tbody>  
        <tr>
            <th>Name</th>
            <th>Application</th>
        </tr>
        { props.shelf.map((row) => <ShelfRow key={row.row} row={row} handleClick={props.handleClick}/> )}
    </tbody>
  </table>
)

export default Shelf;