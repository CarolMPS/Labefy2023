import React from "react";
import styled from "styled-components";

const PlaylistCardContainer = styled.div`
    margin: 20px;
    display: flex;
    align-items: center;
`

const NameContainer = styled.p`
    margin: 10px;
`

const DeleteButton = styled.p`
    color: red;
`

export default function PlaylistCard(props)  {
    return (
        <PlaylistCardContainer>
            <button onClick={() => props.changePage("playlistDetail", props.playlistId)}>Abrir playlist</button>
            <NameContainer>{props.name}</NameContainer>
            <DeleteButton onClick={() => props.deletePlaylist(props.playlistId)} >X</DeleteButton>
        </PlaylistCardContainer>
    )
}