import React from 'react'
import { Participant } from '../store/pokerSession/types';


export default class ParticipantComponent extends React.Component<{}>{
    

    getColor(){
        var colorOptions=[
            "badge-secondary",
            "badge-primary",
            "badge-info",
            "badge-success",
            "badge-warning",
            "badge-danger",
            "badge-rose"
        ];

        var index = (Math.floor(Math.random() * colorOptions.length));

        return colorOptions[index];
    }

    public render() {
        return <div className={"badge badge-pill "+this.getColor()}>{this.props.children}</div>
    }
}
