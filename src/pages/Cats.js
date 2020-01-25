import React from 'react';
import {Link} from 'react-router-dom';
import cats from '../cats'

//this will save all our array of cats

const Cats = (props) => {
    return(
        <div>
            <h1>Find your kitties</h1>
             {props.cats.map((cat, index)=>{
                 return(
                     <li key={index}>
                     <Link to={`/cats/${cat.id}`}>{cat.name}</Link>
                     </li>
                 )
             }
            )}
        </div>
    )
}

export default Cats;
