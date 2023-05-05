const initialState = {
        mtState:null,
        cartValue:''
}

const changeNumber = (state = initialState, action) =>{
        let newState = { ...state }
        switch (action.type){
                case "INCREMENT_NUMBER": 
                newState.mtState = newState.mtState + action.payload;
                return newState;

                case "DECREMENT_NUMBER": 
                newState.mtState = newState.mtState - action.payload;
                return newState;

                case "CART_VALUE": 
                newState.cartValue = action.payload;
                return newState;

                default: return state;
        }
}

export default changeNumber;