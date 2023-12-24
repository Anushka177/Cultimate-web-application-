import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

export default function LeftBlock(){
    return(<>
	<div className='col-1'></div>
        <div class="col-3  blog-info">
						<h4>CropS</h4>
						<p class="mt-2">Recommendation about the type of Crops best suited for the particular soil
							and the recommended crop</p>
							<Link to="/crop">
							<button className='btn btn-outline-success'>See Crops</button>
    						</Link>
					</div>
					</>
   )
}