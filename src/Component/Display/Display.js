import React, { useEffect, useState } from 'react';
import playerData from '../Data/playerData'
import Player from '../PlayerList/Player'
import Selected from '../Selected/Selected'
import './Display.css'

const Display = () => {
    const first15 = playerData.slice(15);
    const [players, setPlayers] = useState(first15)
    const [selected, setSelected] = useState([])
    useEffect (() => {
        setPlayers(playerData)
    }, [])


    const handleAddPlayer = (playerData) =>{
        const newSelected = [...selected, playerData]
        setSelected(newSelected)
    }

    return (
        <div>
            <div className="club_container mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="player_container">
                                <div sticky-top>
                                    <h4 className="text-center pt-3">The Pending Player List </h4>
                                </div>
                                <hr/>
                                <div className="row justify-content-center ">
                                    {
                                        players.map(plr => <Player handleAddPlayer={handleAddPlayer} playerData={plr}></Player>)
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="selected_container p-4">
                                <Selected selected={selected}></Selected>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Display;