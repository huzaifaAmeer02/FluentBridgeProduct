import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as Action from "../Redux/Question_Reducer";
import { getServerData } from "../Helper/helper";

export const useFetchQestion = () => {
    const dispatch = useDispatch();   
    const [getData, setGetData] = useState({ isLoading : false, apiData : [], serverError: null});

    useEffect(() => {
        setGetData(prev => ({...prev, isLoading : true}));

        /** async function fetch backend data */
        (async () => {
            try {
                const [{ questions, answers }] = await getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/questions`, (data) => data)
                
                if(questions.length > 0){
                    setGetData(prev => ({...prev, isLoading : false}));
                    setGetData(prev => ({...prev, apiData : questions}));

                    /** dispatch an action */
                    dispatch(Action.startExamAction({ question : questions, answers }))

                } else{
                    throw new Error("No Question Avalibale");
                }
            } catch (error) {
                setGetData(prev => ({...prev, isLoading : false}));
                setGetData(prev => ({...prev, serverError : error}));
            }
        })();
    }, [dispatch]);

    return [getData, setGetData];
}


/* move action dispatch function */
export const MoveNextQuestion = () => async(dispatch) => {
    try{
        dispatch(Action.moveNextAction())
    }catch (error){
        console.log(error)
    }
}
/* PreviousAction action dispatch function */
export const MovePreviousQuestion = () => async(dispatch) => {
    try{
        dispatch(Action.movePreviousAction())
    }catch (error){
        console.log(error)
    }
}