import React from 'react';
import ReactDOM from 'react-dom';
import PastPurchases from '../modules/pastPurchases/PastPurchases';

test('Past Purchases renders without crashing.', () =>
{
    //Used proveded test 'App.test.tsx' as a template.
    const div = document.createElement('div');
    ReactDOM.render(<PastPurchases />, div)
    ReactDOM.unmountComponentAtNode(div);
})