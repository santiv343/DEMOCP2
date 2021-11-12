import { connect , useSelector, useDispatch } from 'react-redux';
import GalleryCard from '../galleryCard';
import {getPictures} from '../../redux/actions';
import { useEffect} from 'react';


//author: dannyverm
export default function Gallery() {

    const dispatch = useDispatch()
    const pictures = useSelector(state => state.pictures)

    useEffect(()=>{
        dispatch(getPictures())
    }, [])

    return (
        <div>
            {pictures && pictures.map(p =>  <GalleryCard
                key={p.id}
                url={p.download_url}
                id={p.id}
            />)}
        </div>
        )
}

//como me salgo?
