import axios from "axios";
import {useState} from "react";
import PlaylistCard from "./playlistCard";

export default function Playlists(){
    const [playlists, setPlaylists] = useState([])
    componentDidMount = () => {
        setPlaylists(fetchPlaylists())
    }
    const fetchPlaylists = () => {
        axios.get(baseUrl, axiosConfig).then(response => {
            setPlaylists({playlists: response.data.result.list})
        }).catch(error =>{
            console.log(error)
        })
    };
    const deletePlaylist = (playlistId) => {
        axios.delete(`${baseUrl}/${playlistId}`, axiosConfig).then(response => {
            setPlaylists(fetchPlaylists())
        }).catch(error =>{
            console.log(error)
        })
    };
    const playlistsVar = playlists.map(playlist =>{
        return <PlaylistCard 
        key={playlist.id}
        changePage={props.changePage}
        name={playlist.name}
        playlistId={playlist.id}
        deletePlaylist={deletePlaylist}      
        />
    })
    return(
        <>
        {playlistsVar}
        </>
    )
}