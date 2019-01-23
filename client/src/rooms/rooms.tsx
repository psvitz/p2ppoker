import React from 'react'

import PokerRoomItem from '../components/PokerRoomItem';
import { RoomsState, Room } from '../store/rooms/types';


export default class RoomsComponent extends React.Component<{},RoomsState>{
    defaultRooms:Room[] =[{id:"1",name:"Room 1"},{id:"2",name:"Room 2"}];

    componentWillMount() {
        this.setState({rooms: this.defaultRooms});
    }

    public render() {
        var roomsList = this.state.rooms.map(function(r){
            return <li><PokerRoomItem room={r}></PokerRoomItem></li>;
          })

        return <ul>
            {roomsList}
        </ul>
    }
}
