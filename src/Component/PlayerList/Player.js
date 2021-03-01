import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './Player.css';

const Player = (props) => {
    // console.log(props)
    const {name, img, club, salary, rank} = props.playerData;

    const [btnDisable, setBtnDisable] = useState(false);

    return (
            <div className="col-md-4 player">
                <div className="player_image">
                    <img src={img} alt=""/>
                </div>
                <div className="player_details">
                    <h4 className="player_name text-center">{name}</h4>
                    <hr/>
                    <p><b>Club</b>   : <small>{club}</small></p>
                    <p><b>Demand</b> : <small>$ {salary}</small></p>
                    <p><b>Rank</b>   : <small>{rank}</small>  </p>
                    <hr/>
                    <button className={btnDisable ? "player_add_btn disabled" : "player_add_btn"} onClick={() => {props.handleAddPlayer(props.playerData); setBtnDisable(true)}}><FontAwesomeIcon icon={faUserPlus} /> Add to Player List</button>
                </div>
            </div>
    );
};

export default Player;