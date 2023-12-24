import { useNavigate } from 'react-router-dom';
export default function Back(){
    const navigate = useNavigate()

return(<>
<button className="btn btn-info" onClick={()=>{navigate(-1)}}>Back</button></>)
}