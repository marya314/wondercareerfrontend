export default function FieldsReducer (state=[], action) {

  switch(action.type){
    case 'FETCH_FIELDS':
      return [...state, action.payload]
    case 'REMOVE_FIELDS':
    	return [...state, action.payload]
    default:
      return state
  }

}
