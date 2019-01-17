import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

class ArtistList extends Component {
    state = {
        artists: [{}]
    }

    componentDidMount() {
        this.getAllArtists()
    }

    getAllArtists = () => {
        axios.get('/api/artists')
        .then((res) => {
            this.setState({ artists: res.data })
        })

    }

    render() {
        return (
            <div>
                <h1>Hey from artists index</h1>
                {this.state.artists.map((artist) => (
                    <div key={artist.id}>
                        <Link to={`/artists/${artist.id}`}><h1>{artist.name}</h1></Link>
                    </div>
                ))}
            </div>
        );
    }
}

export default ArtistList;