import React from 'react'
import { Room } from '../store/rooms/types';

type PookerRoomItem ={
    room:Room
}

export default class PokerRoomItem extends React.Component<PookerRoomItem>{

    public myHandler: React.MouseEventHandler<HTMLDivElement> = (e) => {
        alert(this.props.room.id);
    }

    public render() {
        return <div onClick={this.myHandler}>Hello {this.props.room.name}</div>
    }
}
