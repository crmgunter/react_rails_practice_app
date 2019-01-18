import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import ArtistEditForm from './ArtistEditForm'

class ArtistShow extends Component {
    state = {
        artist: {},
        editToggle: false
    }

    componentDidMount() {
        this.getSingleArtist()
    }

    getSingleArtist = () => {
        console.log(this.props.match.params.id)
        axios.get(`/api/artists/${this.props.match.params.id}`)
        .then((res) => {
            this.setState({ artist: res.data })
        })
    }

    removeArtist = () => {
        axios.delete(`/api/artists/${this.props.match.params.id}`)
        .then((res) => {
            this.props.history.goBack()
        })
    }

    editFormToggle = () => {
        this.setState({ editToggle: !this.state.editToggle })
    }

    render() {

        const editForm = this.state.editToggle ? 
        <ArtistEditForm
        artist={this.state.artist}
        getSingleArtist={this.getSingleArtist}/> : null

        return (
            <div>
                <h1>hey from artist page</h1>
                <div>
                    <button onClick={this.editFormToggle}>Edit Artist</button>
                </div>
                {editForm}
                <div>{this.state.artist.name}</div>
                <div>{this.state.artist.nationality}</div>
                <Link to={`/artists/${this.props.match.params.id}/song`}><button>Songs</button></Link>
                <div><img src={this.state.artist.photo_url} alt={this.state.artist.name}/></div>
                <div>
                    <button onClick={this.removeArtist}>Delete Artist</button>
                </div>
            </div>
        );
    }
}

export default ArtistShow;