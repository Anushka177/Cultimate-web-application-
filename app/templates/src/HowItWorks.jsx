import React from 'react';
import './index.css';
import Back from './back';

export default function CentreBlock(){
     return( <>   <Back/>
     <div class="col-3 blog-info">
     <h4>Fertilizer</h4>
     <p class="mt-2">How it Works Page</p>
    <button className='btn btn-outline-success'>See Fertilizer</button>
 </div>
</>
)
}