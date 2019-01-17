import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

class ArtistShow extends Component {
    state = {
        artist: {

        }
    }

    componentDidMount() {
        this.getSingleArtist()
    }

    getSingleArtist = () => {
        axios.get(`/api/artists/${this.props.match.params.id}`)
        .then((res) => {
            this.setState({ artist: res.data })
        })
    }

    render() {
        return (
            <div>
                <h1>hey from artist page</h1>
                <div>{this.state.artist.name}</div>
                <div>{this.state.artist.nationality}</div>
                <Link to={`/artists/${this.props.match.params.id}/song`}><button>Songs</button></Link>
                <div><img src={this.state.artist.photo_url} alt={this.state.artist.name}/></div>
                
            </div>
        );
    }
}

export default ArtistShow;