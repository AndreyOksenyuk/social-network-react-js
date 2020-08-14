const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';

let initialState = {
   dialogs: [{
            id: 1,
            user: 'Andrey',
         },
         {
            id: 2,
            user: 'Sergey',
         },
         {
            id: 3,
            user: 'Pedro',
         },
         {
            id: 4,
            user: 'Max',
         },
         {
            id: 5,
            user: 'Ivan',
         },
         {
            id: 6,
            user: 'Dimon',
         },
         {
            id: 79878779,
            user: 'Roma',
         },
      ],

      message: [{
            id: 1,
            message: 'Hello!!! It is my first message. How are you?',
            date: '13.07.2020 11:33'
         },
         {
            id: 2,
            message: 'Hello! i am ok)',
            date: '13.07.2020 14:23'
         },
         {
            id: 3,
            message: 'Hello!!!',
            date: '13.07.2020 01:24'
         },
         {
            id: 4,
            message: 'Bye!',
            date: '13.07.2020 13:12',
         },
      ],
}

let  MESSAGE_REDUCER = (state = initialState, action) => {
   switch (action.type) {
      case ADD_NEW_MESSAGE:
         let d = new Date()
         let month = 1 + d.getUTCMonth()
         let date = d.getDate() + '.' + month + '.' + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes()
         let message = {
            id: Date.now(),
            message: action.message,
            date: date,
         }
         return{
            ...state,
            message: [...state.message, message],
         }
      default:
         return state;
   } 
}
export let actionCreatorAddMessage = (message) => ({
   type: ADD_NEW_MESSAGE,
   message,
})


export default MESSAGE_REDUCER;