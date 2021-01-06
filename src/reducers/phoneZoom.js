const phoneZoomReducer= (state = [], action) =>{
     
    switch(action.type){  
        case 'ADD_ZOOM':
            console.log(action.payload)
            
            return action.payload
        default:
            return state ;       
    }
   }
   
   export default phoneZoomReducer;