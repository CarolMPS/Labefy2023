import './App.css';
import React from "react"
import {useState} from "react";
import styled from "styled-components";
import axios from "axios"
import { baseUrl, axiosConfig } from "../../constants";

const PlaylistCreationFormContainer = styled.div`
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const PlaylistCreationForm = styled.form`   
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`


export default function CadastrarPlay(){
    const [inputNameValue, setInputNameValue] = useState("")

    const changeInputNameValue = (e) => {
        setInputNameValue([...inputNameValue, e.target.value])
    }
    const createPlaylist = (e) => {
        e.preventDefault();
        const body = {
            name: setInputNameValue(inputNameValue)
        };
        axios.post(baseUrl, body, axiosConfig).then(()=>{
            alert("Playlist cadastrada com sucesso!")
        }).catch(error =>{
            console.log(error)
        });
        setInputNameValue({inputNameValue: ""});
    }
    return(
    <>
        <PlaylistCreationFormContainer>
            <h2>Cadastrar nova Playlist</h2>
            <PlaylistCreationForm>
                <label>Nova playlist</label>
                <input 
                placeholder="Nome da Playlist"
                type="text"
                value={inputNameValue}
                onChange={changeInputNameValue}
                />
                <button type="submit">Cadastrar Playlist</button>
            </PlaylistCreationForm>
        </PlaylistCreationFormContainer>
    </>
    )
}