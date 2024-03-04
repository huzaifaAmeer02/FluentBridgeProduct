import * as Action from "../Redux/Result_Reducer"

export const pushAnswer = (result) => async (dispatch)=> {
    try {
        await dispatch(Action.pushResultAction(result))
    }catch (error){
        console.log(error)
    }
}
export const updateResult = (index) => async (dispatch) =>{
    try{
        dispatch(Action.updateresultAction(index))
    }catch (err){
        console.log(err)
    }
}