const initialState = 0;

const changeNumber = (state = initialState, action) =>{
        switch (action.type){
                case "INCREMENT_NUMBER": return state + action.payload;
                case "DECREMENT_NUMBER": return state - action.payload;
                default: return state; 
        }
}

export default changeNumber;