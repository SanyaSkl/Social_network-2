import {InferActionsTypes} from "./redux-store"

const SEND_MESSAGE = 'SN/DIALOGS/SEND_MESSAGE'

type DialogType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}

let initialState = {
    dialogs: [
        {id: 1, name: 'Sasha'},
        {id: 2, name: 'Olya'},
        {id: 3, name: 'Alisa'},
        {id: 4, name: 'Misha'},
        {id: 5, name: 'Denis'},
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
    ] as Array<MessageType>
};

const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case 'SN/DIALOGS/SEND_MESSAGE':
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
}

export const actions = {
SendMessageCreator: (newMessageBody: string) => ({type: 'SN/DIALOGS/SEND_MESSAGE', newMessageBody} as const)
}

export default dialogsReducer;

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>