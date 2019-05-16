import { combineReducers } from 'redux';

function pictures(state = [], action) {
    switch(action.type) {
        case 'RECEIVE_YANDEX_DISK':
            return action.data.items.map((item, index) => {
                return {
                    id: index,
                    preview: item.preview,
                    image: item.file,
                    showInModal: false
                }
            });
        case 'SHOW_MODAL':
            return state.map((item) => {
                if(item.id === action.id) {
                    return Object.assign({}, item, {
                        showInModal: true
                    });
                }
                return item;
            });
        case 'CLOSE_MODAL':
            return state.map((item) => {
                if(item.showInModal) {
                    return Object.assign({}, item, {
                        showInModal: false
                    });
                }
                return item;
            });
        case 'NEXT_PICTURE':
            return state.map((item) => {
                if(item.showInModal && item.id !== state.length-1) {
                    return Object.assign({}, item, {
                        showInModal: false
                    });
                }
                if(item.id === parseInt(action.id)+1) {
                    return Object.assign({}, item, {
                        showInModal: true
                    });
                }
                return item;
            });
        case 'PREV_PICTURE':
            return state.map((item) => {
                if(item.showInModal && item.id !== 0) {
                    return Object.assign({}, item, {
                        showInModal: false
                    });
                }
                if(item.id === parseInt(action.id)-1) {
                    return Object.assign({}, item, {
                        showInModal: true
                    });
                }
                return item;
            });
        default:
            return state;
    }
}

function dataInLoading(state = false, action) {
    switch(action.type) {
        case 'REQUEST_YANDEX_DISK':
            return true;
        case 'RECEIVE_YANDEX_DISK':
            return false;
        default:
            return state;
    }
}

function userName(state = '', action) {
    switch(action.type) {
        case 'SET_USER_NAME':
            return action.name;
        default:
            return state;
    }
}

const rootReducer = combineReducers(
    {
        userName,
        dataInLoading,
        pictures
    }
);

export default rootReducer;
