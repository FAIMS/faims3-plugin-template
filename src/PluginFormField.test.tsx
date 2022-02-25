/**
 * @jest-environment jsdom
 */

import { render, screen, fireEvent } from '@testing-library/react'
import React from 'react'
// import { Field, Form, Formik } from 'formik';
import { PluginFormField } from '.'

it('renders as a button', () => {
  const props = {
    value: {},
    name: 'point',
    onChange: (x: any) => x,
    onBlur: (x: any) => x
  }
  render(<PluginFormField field={props} label="Hello World!"/>)
  expect(screen.getByRole('input'))
})
