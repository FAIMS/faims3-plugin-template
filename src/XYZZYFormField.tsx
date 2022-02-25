/*
 * Copyright 2021 Macquarie University
 *
 * Licensed under the Apache License Version 2.0 (the, "License");
 * you may not use, this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing software
 * distributed under the License is distributed on an "AS IS" BASIS
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND either express or implied.
 * See, the License, for the specific language governing permissions and
 * limitations under the License.
 *
 * Filename: MapFormField.tsx
 * Description:
 *   Implement MapFormField for entry of data via maps in FAIMS
 */

import React, { useState } from 'react'
import './XYZZYFormField.css'
import Input from '@material-ui/core/Input'

import { FieldProps } from 'formik'
export interface XYZZYFieldProps extends FieldProps {
  label?: string
}

export function XYZZYFormField({
  field,
  form,
  ...props
}: XYZZYFieldProps): JSX.Element {
  // get previous form state if available
  let initialValue = ''
  if (form.values[field.name]) {
    initialValue = form.values[field.name]
  }
  const [state, setState] = useState(initialValue)

  const pluginCallback = (event: any) => {
    setState(event.target.value)
    form.setFieldValue(field.name, event.target.value)
  }

  // a string version of the value to display below the form field
  const valueText = state.toString()

  return (
    <div>
      <Input
        placeholder={props.label}
        name={field.name}
        value={state}
        onChange={pluginCallback}
      ></Input>
      <div>{valueText}</div>
    </div>
  )
}
