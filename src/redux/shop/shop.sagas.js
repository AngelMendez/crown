import { takeEvery, call, put } from 'redux-saga/effects';

import ShopActionTypes from './shop.types';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { getCollectionsSucessAction, getCollectionsFailureAction } from './shop.actions';

export function* getCollectionsAsync() {
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(getCollectionsSucessAction(collectionsMap));
    } catch (error) {
        yield put(getCollectionsFailureAction(error.message));
    }
}

export function* getCollectionsStart() {
    yield takeEvery(ShopActionTypes.GET_COLLECTIONS, getCollectionsAsync);
}

export function* shopSagas() {
    yield all([call(getCollectionsStart)]);
}
