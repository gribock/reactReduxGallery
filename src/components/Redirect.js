import React, { Component } from 'react';

class Redirect extends Component {
    componentDidMount() {
        let token;
        try {
            token = /access_token=([^&]+)/.exec(document.location.hash)[1];
        } catch(err) {
            console.log(err);
            this.props.history.push('/login');
            return;
        }
                
        sessionStorage.setItem('token', token);
        this.props.history.push('/');
        
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Redirect;