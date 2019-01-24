import React from 'react'
import { Room } from '../store/rooms/types';

//import style from './pokerSession.css';

type PokerSessionParams = {
    room: Room
}

export default class PokerSessionComponent extends React.Component<PokerSessionParams>{

    public myHandler: React.MouseEventHandler<HTMLDivElement> = (e) => {
        alert(this.props.room.id);
    }

    public render() {
        var background = { backgroundImage: `url('/img/bg` + (Math.floor(Math.random() * 7) + 1) + `.jpg')` };

        return <div className="profile-page">
            <div className="page-header header-filter" data-parallax="true" style={background}></div>
            <div className="main main-raised">
                <div className="container">
                    <div className="section text-center">

                    </div>
                </div>
            </div>
        </div>
    }
}
