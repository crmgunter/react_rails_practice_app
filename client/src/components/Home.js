import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home page</h1>
                <Link to="/artists">Go to artists</Link>
            </div>
        );
    }
}

export default Home;