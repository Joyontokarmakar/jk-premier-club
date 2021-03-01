import React from 'react';
import './Selected.css'


const Selected = (props) => {
    const selected = props.selected;
    // const {name, email, salary} = props.playerData;
    // console.log(props)


    let total = 0;
    for(let i=0; i<selected.length;i++){
        const player = selected[i];
        total = total + player.salary;
    }

    return (
        <div className="Selection_detail">
            <div className="selection_head">
                <h4 >Selected Team Player</h4>
            </div>
            <hr/>

            <div className="selection_detail">
                <p>Total Number of player: {selected.length}</p>
                <p>Total Budget: ${total}</p>
                <hr/>

                <div className="selected_player">
                    <table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Rank</th>
                                <th>Name</th>
                                <th>Salary</th>
                            </tr>
                        </thead>
                        <tbody>
                            { 
                                selected.map( player => 
                                    <tr>
                                        <td className="text-center">{player.rank}</td>
                                        <td><img src={player.img} alt=""/> {player.name}</td>  
                                        <td className="text-center">${player.salary}</td> 
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div class="watermark">
                        JK Premier Club
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Selected;