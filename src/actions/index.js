import streams from '../apis/stream';

export const signIn = (userId) =>{
    return {
        type:'SIGN_IN',
        payload:userId
    };
}

export const signOut = () => {
    return{
        type:'SIGN_OUT'
    }
}

export const createStream = formValues => dispatch => {
    streams.post('/api/streams',formValues);
};
