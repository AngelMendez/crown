import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { getCollectionsAction } from '../../redux/shop/shop.actions';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';

const ShopPage = ({ getCollectionsAction, match }) => {

    useEffect(() => {
        getCollectionsAction();
    }, [getCollectionsAction]);

    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={ CollectionsOverviewContainer } />
            <Route path={`${match.path}/:collectionId`} component={ CollectionPageContainer } />
        </div>
    )   
};

const mapDispatchToProps = dispatch => ({
    getCollectionsAction: () => dispatch(getCollectionsAction()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
