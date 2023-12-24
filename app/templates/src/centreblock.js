import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
export default function CentreBlock(){
     return( <> <div class="col-3 blog-info">
     <h4>Fertilizer</h4>
     <p class="mt-2">Recommendation about the type of fertilizer best suited for the particular soil
         and the recommended crop</p>
         <Link to="/fertilizer">
         <button className='btn btn-outline-success'>See Fertilizer</button>
    </Link>
 </div>
</>
)
}