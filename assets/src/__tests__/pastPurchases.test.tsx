//Yaksh Kataria, 1330354

import React from 'react';
import ReactDOM from 'react-dom';
import PastPurchases from '../modules/pastPurchases/PastPurchases';

test('Past Purchases renders without crashing.', () =>
{
    //Used proveded test 'App.test.tsx' as a template.

    const div = document.createElement('div');      //Create a 'div' to contain the file we want to test.
    ReactDOM.render(<PastPurchases />, div)     //Open and "run" the file within the 'div' created above.
    ReactDOM.unmountComponentAtNode(div);       //Remove (close) 'div' and clean up the handlers. Exit gracefully.
})