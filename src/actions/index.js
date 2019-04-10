// we'll need axios
import axios from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const FETCH = 'FETCH';
export const SUCCESS = 'SUCCESS';
export const FAIL = 'FAIL';
// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

export const fetchCharacters = () => dispatch => {
    dispatch({type: FETCH});
    axios
        .get(`https://swapi.co/api/people/`)
        .then(res => {
            dispatch({
                type: SUCCESS, 
                payload: res.data
            });
        })
        .catch(err => {
            console.log(err);
            dispatch({
                type: FAIL, 
                payload: 'These are not the characters you are looking for'
            });
        });
}