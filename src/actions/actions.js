import axios from 'axios';

const token = ''; //Put here dev token from yandex OAuth

export function showModal(id) { //src??
    return { type: 'SHOW_MODAL', id }
}

export function closeModal() {
    return { type: 'CLOSE_MODAL' }
}

export function requestYandexDisk() {
    return { type: 'REQUEST_YANDEX_DISK' }
}

export function receiveYandexDisk(data) {
    return { type: 'RECEIVE_YANDEX_DISK', data }
}

export function nextPicture(id) {
    return { type: 'NEXT_PICTURE', id }
}

export function prevPicture(id) {
    return { type: 'PREV_PICTURE', id }
}

export function setUserName(name) {
    return { type: 'SET_USER_NAME', name }
}

export function fetchYandexInfo(url) {
    return function (dispatch) {
        dispatch(requestYandexDisk());
        return axios.get(url)
                .then((response) => {
                    dispatch(setUserName(response.data.username));
                })
                .catch((e) => console.log(e));
    }
}

export function fetchYandexImages() {
    return function (dispatch) {
        dispatch(requestYandexDisk());
        return axios.get(
            'https://cloud-api.yandex.net/v1/disk/resources/files?fields=items.file%2C%20items.preview&limit=80&media_type=image&preview_crop=true&preview_size=M', 
            { headers: { Authorization: `OAuth ${token}` } }
    ).then((response) => {
                    dispatch(receiveYandexDisk(response.data));
                })
    }
}