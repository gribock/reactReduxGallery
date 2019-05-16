import { connect } from 'react-redux';
import GalleryView from '../components/GalleryView'
import { showModal } from '../actions/actions';

const mapStateToProps = (state) => {
    return {
        pictures: state.pictures
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        showModalClick: (id) => {
            dispatch(showModal(id))
        }
    };
};

const Gallery = connect(
    mapStateToProps,
    mapDispatchToProps
)(GalleryView);
export default Gallery;