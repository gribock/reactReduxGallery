import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchYandexImages } from '../actions/actions'
import Modal from '../containers/Modal';
import Gallery from '../containers/Gallery';
class App extends Component {

    componentDidMount() {
        //let token = sessionStorage.getItem('token');
        // if (token) {
        const { fetchYandexImages } = this.props; 
        fetchYandexImages();     // dispatch to API
        // } else {
        //     this.props.history.push('/login');
        // }
    }

    render() {
        return ( 
            <div className = "app">
                <Gallery />
                <Modal />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchYandexImages: () => {dispatch(fetchYandexImages());}
    }
};

App = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default withRouter(App);