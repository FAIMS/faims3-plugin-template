/**
 * @jest-environment jsdom
 */

import { render, screen, fireEvent } from '@testing-library/react'
import React from 'react'
// import { Field, Form, Formik } from 'formik';
import { MapFormField } from '.'

it('renders as a button', () => {
  const props = {
    value: {},
    name: 'point',
    onChange: (x: any) => x,
    onBlur: (x: any) => x
  }
  render(<MapFormField field={props} featureType='Point' />)
  expect(screen.getByText('Get Point'))
  expect(screen.getByRole('button'))
})

it('creates a map when the button is pressed', async () => {
  const props = {
    value: {},
    name: 'point',
    onChange: jest.fn(),
    onBlur: jest.fn()
  }
  window.scrollTo = jest.fn()
  render(<MapFormField field={props} featureType='Point' />)
  fireEvent.click(screen.getByRole('button'))
  expect(document.querySelector('.ol-viewport'))
})
