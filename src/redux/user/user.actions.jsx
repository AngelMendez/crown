import UserActionTypes from './user.types';

export const setCurrentUserAction = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user,
});

export const googleSignIn = () => ({
    type: UserActionTypes.GOOGLE_SIGN_IN,
});

export const signInSuccess = user => ({
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: user,
});

export const signInFailure = error => ({
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload: error,
});

export const emailSignIn = emailAndPassword => ({
    type: UserActionTypes.EMAIL_SIGN_IN,
    payload: emailAndPassword,
});

export const checkUserSession = () => ({
    type: UserActionTypes.CHECK_USER_SESSION,
});

export const signOut = () => ({
    type: UserActionTypes.SIGN_OUT,
});

export const signOutSuccess = () => ({
    type: UserActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = error => ({
    type: UserActionTypes.SIGN_OUT_FAILURE,
    payload: error,
});

export const signUp = userCredentials => ({
    type: UserActionTypes.SIGN_UP,
    payload: userCredentials,
});

export const signUpSuccess = ({ user, additionalData }) => ({
    type: UserActionTypes.SIGN_UP_SUCCESS,
    payload: { user, additionalData },
});

export const signUpFailure = error => ({
    type: UserActionTypes.SIGN_UP_FAILURE,
    payload: error,
});
