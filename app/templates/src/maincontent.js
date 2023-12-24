import React from 'react';
import LeftBlock from './LeftBlock'
import RightBlock from './rightblock'
import CentreBlock from './centreblock'


export default function MainContent(){
    return(
   <>
   <div className='row main-content'>
    <br/>
    <LeftBlock/>
    <CentreBlock/>
    <RightBlock/>
   </div>
   </>       
    )
}