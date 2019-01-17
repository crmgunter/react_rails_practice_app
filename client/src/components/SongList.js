import React, { Component } from 'react';
import axios from 'axios'

class SongList extends Component {
    state = {
        songs: [{}]
    }

    componentDidMount() {
        this.getAllSongs()
    }

    getAllSongs = () => {
        axios.get(`/api/artists/${this.props.match.params.id}/song`)
        .then((res) => {
            this.setState({ songs: res.data })
        })
    }



    render() {
        return (
            <div>
                <h1>Song list</h1>
                {this.state.songs.map((song, i) => (
                    <div key={i}>
                    <div>{song.title}</div>
                    </div>
                ))}
            </div>
        );
    }
}

export default SongList;