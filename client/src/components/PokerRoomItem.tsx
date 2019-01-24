import React from 'react'
import { Room } from '../store/rooms/types';
import ParticipantComponent from './ParticipantComponent';

type PookerRoomItem ={
    room:Room
}

export default class PokerRoomItem extends React.Component<PookerRoomItem>{

    public myHandler: React.MouseEventHandler<HTMLDivElement> = (e) => {
        alert(this.props.room.id);
    }

    public render() {
        var roomsList = this.props.room.participants.map(function(p){
            return <span>
                    <ParticipantComponent>{p.name}</ParticipantComponent>
                </span>;
          });

        return <div>
        <div onClick={this.myHandler} className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{this.props.room.name}</h5>
        <small>3 days ago</small>
      </div>
      <p className="mb-1">{roomsList}</p>
      </div>
    }
}
