import React from 'react'
import { Room } from '../store/rooms/types';

type PokerSessionParams ={
    room:Room
}

export default class PokerSessionComponent extends React.Component<PokerSessionParams>{

    public myHandler: React.MouseEventHandler<HTMLDivElement> = (e) => {
        alert(this.props.room.id);
    }

    public render() {
        return <div>Currrent Session</div>
    }
}
