import { connect } from 'react-redux'

import {Link, useParams} from 'react-router-dom'

function GalleryCardDetail(props) {
    
    const params = useParams()

    const array = props.imagen.filter(i => i.id === params.id)
    
    const imgId = array[0]

    return (
        <div>
            <Link to='/'>HOME</Link>
            <h1>Author: {imgId.author}</h1>
            <img style={{height:'200px'}} src={imgId.download_url}></img>
            <h4>Id: {imgId.id}</h4>
            <h4>Width: {imgId.width}</h4>
            <h4>Height: {imgId.height}</h4>
        </div>
    )
}


function mapStateToProps(state) {
    return {
        imagen: state.pictures
    }
}



export default connect(mapStateToProps)(GalleryCardDetail)