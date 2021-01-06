
const filterReducer= (state = [], action) =>{
    
    switch(action.type){  
        case 'ADD_FILTER':
            
           return [...state,action.payload]
        
        default:
            return state ;       
    }
    
   }
   
   export default filterReducer;