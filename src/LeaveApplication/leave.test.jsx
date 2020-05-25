import React from 'react';
import {render} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";


import LeaveApplication from './leave';

describe("The Empty Leave Application form ",() =>{
    test('render the empty LeaveApplication form',() =>{
        const {getByText,getByLabelText } = render(<LeaveApplication/>);
    });
});