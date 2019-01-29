import { action } from 'typesafe-actions';
import { RoomsActions, Room } from "./types";

export const updateRoom = (roomDetails:Room) => action(RoomsActions.UPDATE_ROOM, roomDetails);
export const makeNewRoom = (roomName:string) => action(RoomsActions.MAKE_ROOM, roomName);
export const joinRoom = (roomName:string) => action(RoomsActions.JOIN_ROOM, roomName);
export const getRooms = () => action(RoomsActions.GET_ROOMS);