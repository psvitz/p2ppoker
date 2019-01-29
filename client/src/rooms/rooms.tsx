import React from 'react'

import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { RouteComponentProps, Route, Switch } from 'react-router-dom'

import { ApplicationState, ConnectedReduxProps } from '../store'

import PokerRoomItem from '../components/PokerRoomItem';
import { RoomsState, Room, RoomsActions } from '../store/rooms/types';
import { ParticipantTypes } from '../store/pokerSession/types';
import { getRooms } from '../store/rooms/actions';
import { EmptyAction } from 'typesafe-actions/dist/types';
import { AnyAction } from 'redux';

interface PropsFromState {
    loading: boolean
    data: Room[]
    errors?: string
}

interface PropsFromDispatch {
    getRoomsRequest: typeof getRooms
  }

type AllProps = PropsFromState& PropsFromDispatch& ConnectedReduxProps

class RoomsComponent extends React.Component<AllProps>{

    public componentDidMount(){
    }

    public render() {
        const { data } = this.props;
        var roomsList = null;

        roomsList = data.map(function (r) {
            return <li className="list-group-item list-group-item-action flex-column">
                <PokerRoomItem room={r}></PokerRoomItem>
            </li>;
        })
        
        var background = { backgroundImage: `url('/img/bg` + (Math.floor(Math.random() * 7) + 1) + `.jpg')` };

        return <div>
            <div className="page-header header-filter" data-parallax="true" style={background}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 ml-auto mr-auto">
                            <div className="brand text-center">
                                <div className="form-group has-default bmd-form-group">
                                    <input type="text" className="form-control" placeholder="Enter Room #" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main main-raised">
                <div className="container">
                    <div className="section text-center">
                        <div className="row"></div>
                        <div className="col-md-8 ml-auto mr-auto">
                            <h2 className="text-center title">Available Rooms</h2>
                            <ul className="list-group">
                                {roomsList}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    }
}

const mapStateToProps = ({ rooms }: ApplicationState) => ({
    data:rooms.rooms
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getRoomsRequest: () => dispatch(getRooms())
  })

export default connect(mapStateToProps,mapDispatchToProps)(RoomsComponent)
