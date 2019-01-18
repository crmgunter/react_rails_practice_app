import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import NewArtistForm from './NewArtistForm';

class ArtistList extends Component {
    state = {
        artists: [{}],
        toggleFormView: false
    }

    componentDidMount() {
        this.getAllArtists()
    }

    getAllArtists = async () => {
        const res = await axios.get('/api/artists')
        this.setState({ artists: res.data })
    }

    toggleFormView = () => {
        this.setState({ toggleFormView: !this.state.toggleFormView })
    }

    render() {
        const formComponent = this.state.toggleFormView ? <NewArtistForm getAllArtists={this.getAllArtists}/> : null

        return (
            <div>
                <h1>Hey from artists index</h1>
                <button onClick={this.toggleFormView}>Add new artist</button>
                {formComponent}
                {this.state.artists.map((artist, i) => (
                    <div key={i}>
                        <Link to={`/artists/${artist.id}`}><h1>{artist.name}</h1></Link>
                    </div>
                ))}
            </div>
        );
    }
}

export default ArtistList;