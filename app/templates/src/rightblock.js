import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

export default function RightBlock(){

     return( <> <div class="col-3 blog-info">
     <h4>Disease</h4>
     <p class="mt-2">Recommendation about the type of fertilizer best suited for the particular soil
         and the recommended crop</p>
         <Link to="/disease">
         <button className='btn btn-outline-success'>Find Disease</button>
    </Link>
 </div>
 <div className='col-1'></div>

</>
)
}