import React from "react";
import styled from "styled-components";
import axios from "axios";
import TrackCard from "../TrackCard/TrackCard";
import { baseUrl, axiosConfig } from "../../constants";
import {useState} from "react"

const PlaylistDetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const TrackCreationForm = styled.form`
    width: 100vw;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    div {
        display: flex;
        flex-direction: column;
    }
`

export default function VisualizarPlay(){
    const [tracks, setTracks] = useState([]);
    const [trackName, setTrackName] = useState("");
    const [artist, setArtist] = useState("");
    const [url, setUrl] = useState("");

    componentDidMount = () => {
        fetchTracks()
    }
    const fetchTracks = () => {
        axios.get(`${baseUrl}/${props.playlistId}/tracks`,axiosConfig).then(response =>{
            setTracks([tracks, response.data.results])
        }).catch(error =>{
            alert(error)
        })
    }
    const removeTrackFromPlaylist = (trackId) => {
        axios.delete(`${baseUrl}/${this.props.playlistId}/tracks/${trackId}`, axiosConfig).then(() => {
            this.fetchTracks();
        }).catch(err => {
            console.log(err);
        });
    };
    
    return(
    <>
        <h1>VisualizarPlay</h1> 
    </>
    )
}