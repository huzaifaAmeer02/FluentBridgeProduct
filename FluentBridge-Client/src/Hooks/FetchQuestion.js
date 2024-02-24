import { useEffect, useState } from "react";
import data from "../Database/Data";
import { useDispatch } from "react-redux";
import * as Action from "../Redux/Question_Reducer";

export const useFetchQuestion = () => {
    const dispatch = useDispatch();
    const [getData, setGetData] = useState({ isLoading: false, apiData: [], serverError: null });

    useEffect(() => {
        setGetData(prev => ({ ...prev, isLoading: true }));

        const fetchData = async () => {
            try {
                let question = await data;

                if (question.length > 0) {
                    setGetData(prev => ({ ...prev, isLoading: false }));
                    setGetData(prev => ({ ...prev, apiData: question }));

                    dispatch(Action.startExamAction(question));
                } else {
                    throw new Error("No Questions Available !");
                }
            } catch (error) {
                setGetData(prev => ({ ...prev, isLoading: false}));
                setGetData(prev => ({ ...prev, serverError: error}));
            }
        };

        fetchData();

    }, [dispatch]);

    return [getData, setGetData];
};

/* move action dispatch function */

export const MoveNextQuestion = () => async(dispatch) => {
    try{
        dispatch(Action.moveNextAction())
    }catch (error){
        console.log(error)
    }
}