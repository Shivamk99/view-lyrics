import React, { Component } from 'react';

import axios from  "axios"

import {Consumer} from "../../Context"

class Search extends Component {

    state = {
        tracktitle: ''
    }

    findTrack = (dispatch, e) => {
        e.preventdefault();
        axios
            .get(
                 `http://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.tracktitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_KK_KEY}`
            )
            .then(res => {
                dispatch({
                    type: 'SEARCH_TRACKS',
                    payload: res.data.message.body.track_list
                });

                this.setState({tracktitle: ' '})
            })
            .catch(error => console.log(error));
            
        
    }
    

    onChange= e => {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return (
            <Consumer>
                {value => {
                    console.log(value);
                    const {dispatch} = value;
                    return (
                            <div className="card card-body mb-4 p-4 bg-secondary text-warning">
                                <h1 className = "diaplay-4 text-center">
                                    <i className="fas fa-music"></i> Search for a Song
                                </h1>
                                    <p className="Lead text-center"> Get The Lyrics For the Songs Listed Below </p>
                                    <form onSubmit={this.findTrack.bind(this, dispatch)}>
                                        <div className="Form-Group">
                                            <input type="text" className="form-control form-control-lg" 
                                            placeholder="Song Title..."
                                            name="tracktitle"
                                            value={this.state.tracktitle}
                                            onChange={this.onChange}/>
                                        </div>
                                    </form>
                                        
                                    <button className="btn btn-danger mt-3 btn-lg " type="Submit"> Track Lyrics </button>
                            </div>
                    );
                }}
            </Consumer>
        );
    }
}

export default Search;