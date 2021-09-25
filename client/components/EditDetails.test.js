import React from 'react'
import '@testing-library/jest-dom'
import { screen } from '@testing-library/react'

import { renderWithRedux } from '../testUtils'

import EditDetails from './EditDetails'


test('The correct header is displayed', () => {
    renderWithRedux(<EditDetails />)
    const header = screen.getByRole('heading', { level: 2 })
    expect(header.textContent).toMatch('Update your details below')
})

test('Input fields display pre-populated data', () => {
    const props = {
        details: {
            firstName: 'Test',
            lastName: 'Test',
            businessName: 'Test Cafe',
            addressStreet: '123 Test Street',
            addressSuburb: 'Testfield',
            addressCity: 'Testland',
            product: 'Oil',
            containers: 'Drum'
        }
    }
    renderWithRedux(<EditDetails props={props} />)
    const input = screen.getByRole('textbox', { name: "Business Name:" })
    expect(input).toHaveAttribute('value', 'Test Cafe')
})
