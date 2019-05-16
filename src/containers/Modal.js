import { connect } from 'react-redux';
import ModalView from '../components/ModalView';
import { closeModal, nextPicture, prevPicture } from '../actions/actions';

const getShowModal = (pictures) => {
    const x = pictures.filter((item) => item.showInModal);
    console.log(x);
    if(x.length !== 0) {
        return { 
            show: true,
            picture: x[0]
        };
    }
    return {
        show: false,
        picture: {}
    };
}

const mapStateToProps = (state) => getShowModal(state.pictures);

const mapDispatchToProps = (dispatch) => {
    return {
        closeModalClick: () => {
            dispatch(closeModal());
        },
        prevPictureClick: (id) => {
            dispatch(prevPicture(id));
        },
        nextPictureClick: (id) => {
            dispatch(nextPicture(id));
        }
    };
};

const Modal = connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalView);
export default Modal;