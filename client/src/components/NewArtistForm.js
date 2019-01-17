import React, { Component } from 'react';

class NewArtistForm extends Component {
    render() {
        return (
            <div>
                <form>
                    <input type="text"/>
                    <input type="text"/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default NewArtistForm;