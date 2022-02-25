import {combineReducers} from 'redux'
import { dataReducer } from './dataReducer';

import {userReducer} from "./userReducer";
import { videoReducer } from './videoReducer';
export const rootReducer = combineReducers({
     userState: userReducer,
     dataState: dataReducer,
     videoState: videoReducer
})
