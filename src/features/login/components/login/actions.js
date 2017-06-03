import * as types from './types';

const loginStart = (userInfo) => ( {
    type: types.LOGINSTART,
    payload: userInfo
} );

const success = ( ) => ( {
    type: types.SUCCCESS    
} );

const error = (err) => ( {
    type: types.ERROR,
    payload:err   
} );

export default {
	loginStart,
	success,
	error
}