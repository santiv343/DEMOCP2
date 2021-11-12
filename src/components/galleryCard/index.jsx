import './index.css'
import {Link} from 'react-router-dom'

export default function GalleryCard({url, id}){
    return (
        <div className='card'>
            <Link to={`/card/${id}`}><img style={{height:'200px'}} src={url}/></Link>
        </div>
    )
}

