import React, { Component } from 'react';

import axios from "axios"

import Spinner from "../Layout/spinner"

import { Link } from "react-router-dom"

class Lyrics extends Component {
    
    state = {
        tracks: {},
        lyrics: {},
    }
    
    componentDidMount () {
        axios
            .get(
                 `http://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_KK_KEY}`
            )
            .then(res => {
                //console.log(res.data);
                this.setState({lyrics: res.data.message.body.lyrics});

                return axios
                .get(
                     `http://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_KK_KEY}`
                )
            })
            .then(res => {
                console.log(res.data);
                this.setState({track: res.data.message.body.track});
            })
            .catch(error => console.log(error));
    }

    render() {
        const {track, lyrics} = this.state;
        //console.log(track);
        if(track === undefined || 
            lyrics === undefined || 
            Object.keys(track).length === 0 || 
            Object.keys(lyrics).length === 0
        ) { 
            return <Spinner/>
        } else {
            return (
                <React.Fragment>
                    <Link to = "/" className = "btn btn-dark btn-sm mb-4 ">Go Back</Link>
                    <div className = "Card">
                        <h5 className = "Card-Header">
                            {track.track_name} by { ' ' } <span className = " text-secondary">{track.artist_name}</span>
                        </h5>
                        <div className = "card-Body">
                             <p className = "card-text">{lyrics.lyrics_body}</p>
                        </div>
                    </div>

                    <ul className = "List-Group mt-3">
                        
                        <li className = "list-group-item">
                            <strong>Album ID: </strong> {track.album_id}
                        </li>
                        
                        <li className = "list-group-item">
                            <strong>Song Genre: </strong>
                            {
                                track.primary_genres.music_genre_list[0].music_genre.music_genre_name
                            }
                        </li>
                        
                        <li className = "list-group-item">
                            <strong>Song Genre-ID: </strong>
                            {
                                track.primary_genres.music_genre_list[0].music_genre.music_genre_id
                            }
                        </li>
                        
                        <li className= "list-group-item">
                            <strong>Explicit Words: </strong>
                            {
                                track.explict === 0 ? 'no' : 'yes'
                            }
                        </li>
                        
                        <li className= "list-group-item">
                            <strong>Favourites: </strong>{track.num_favourite}
                        </li>
                        
                    </ul>


                </React.Fragment>);
        }
    }
}

export default Lyrics;