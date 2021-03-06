import React, { Component } from 'react';
import axios from 'axios'

class NewArtistForm extends Component {
    state = {
        artist: {
            name: '',
            photo_url: '',
            nationality: ''
        }
    }

    handleChange = (event) => {
        const newState = { ...this.state.artist }
        const userInput = event.target.name
        newState[userInput] = event.target.value
        this.setState({ artist: newState })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const payload = this.state.artist
        axios.post(`/api/artists`, payload)
            .then((res) => {
                console.log('posted')
                this.props.getAllArtists()
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

export default NewArtistForm;