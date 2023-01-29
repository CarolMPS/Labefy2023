export default function HeaderPlay(props){
    return(
    <>
        <header>
            <div>
                <h1>Labefy</h1> 
            </div>
            <div>
                <button onClick={()=> props.changePage("playlistCreationPage")}>CADASTRAR PLAYLIST</button>
                <button onClick={()=> props.changePage("playlistManagerPage")}>GERENCIAR PLAYLIST</button>
            </div>
        </header>
    </>
    )
}