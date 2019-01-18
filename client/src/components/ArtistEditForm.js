import React, { Component } from 'react';
import axios from 'axios'

class ArtistEditForm extends Component {
    state = {
        artist: {
            name: this.props.artist.name,
            photo_url: this.props.artist.photo_url,
            nationality: this.props.artist.nationality
        }
    }

    handleChange = (event) => {
        const updatedState = { ...this.state.artist }
        const userInput = event.target.name
        updatedState[userInput] = event.target.value
        this.setState({ artist: updatedState })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const payload = this.state.artist
        axios.patch(`/api/artists/${this.props.artist.id}`, payload).then(() => {
            this.props.getSingleArtist()
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input onChange={this.handleChange} type="text" name="name" placeholder="name" value={this.state.artist.name} />
                    </div>
                    <div>
                        <input onChange={this.handleChange} type="text" name="photo_url" placeholder="photo url" value={this.state.artist.photo_url} />
                    </div>
                    <div>
                        <input onChange={this.handleChange} type="text" name="nationality" placeholder="nationality" value={this.state.artist.nationality} />
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default ArtistEditForm;