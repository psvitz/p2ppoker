import React from 'react'

import PokerRoomItem from '../components/PokerRoomItem';
import { RoomsState, Room } from '../store/rooms/types';


export default class RoomsComponent extends React.Component<{},RoomsState>{
    defaultRooms:Room[] =[{id:"1",name:"Room 1",participants:[{id:"1",name:"John"},{id:"2",name:"Jane"},{id:"3",name:"Pete"}]},{id:"2",name:"Room 2",participants:[{id:"1",name:"John"},{id:"2",name:"Jane"},{id:"3",name:"Pete"}]}];

    componentWillMount() {
        this.setState({rooms: this.defaultRooms});
    }

    public render() {
        var roomsList = this.state.rooms.map(function(r){
            return <li className="list-group-item list-group-item-action flex-column">
                    <PokerRoomItem room={r}></PokerRoomItem>
                </li>;
          })
        var background = { backgroundImage: `url('/img/bg`+(Math.floor(Math.random() * 7) + 1)+`.jpg')` };

        return <div>
        <div className="page-header header-filter" data-parallax="true" style={background}>
            <div className="container">
            <div className="row">
                <div className="col-md-8 ml-auto mr-auto">
                <div className="brand text-center">
                    <div className="form-group has-default bmd-form-group">
                        <input type="text" className="form-control" placeholder="Enter Room #"/>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="main main-raised">
            <div className="container">
            <div className="section text-center">
                <ul className="list-group">
                    {roomsList}
                </ul>
            </div>
            </div>
        </div>
      </div>
        
        
    }
}
