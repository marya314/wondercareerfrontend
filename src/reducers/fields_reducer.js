export default function FieldsReducer (state=[], action) {
  switch(action.type){
    case 'FETCH_FIELDS':
      return action.payload
    default:
      return state
  }

}
