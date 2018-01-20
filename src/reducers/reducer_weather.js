import { FETCH_WEATHER } from '../actions/index';

export default function(state=[], action){
    switch (action.type){
        case FETCH_WEATHER:
            // Don't mutate state in-place, return new, fresh state
            // return state.concat([ action.payload.data ]);
            return [ action.payload.data, ...state ];
    }

    return state;
}