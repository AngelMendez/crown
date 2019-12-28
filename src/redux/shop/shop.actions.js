import ShopActionTypes from './shop.types';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

export const getCollectionsAction = collectionsMap => ({
    type: ShopActionTypes.GET_COLLECTIONS,
    payload: collectionsMap,
});

export const getCollectionsSucessAction = collectionsMap => ({
    type: ShopActionTypes.GET_COLLECTIONS_SUCCESS,
    payload: collectionsMap,
});

export const getCollectionsFailureAction = errorMessage => ({
    type: ShopActionTypes.GET_COLLECTIONS_FAILURE,
    payload: errorMessage,
});

export const getCollectionsAsyncAction = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(getCollectionsAction());
        collectionRef.get()
            .then(async snapshot => {
                const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
                dispatch(getCollectionsSucessAction(collectionsMap));
            })
            .catch(error => dispatch(getCollectionsFailureAction(error.mesage)));
    };
};
