# faims3-xyzzy-input

> Template project for new input widget plugins for FAIMS3

[![NPM](https://img.shields.io/npm/v/@faims-project/faims3-xyzzy-input.svg)](https://www.npmjs.com/package/@faims-project/faims3-xyzzy-input) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

This repository contains a simple form field component structured as a plugin
for FAIMS3. It is intended to be the basis for future plugins. 

Replace 'XYZZY' or 'xyzzy' everywhere with the name of your plugin field. 


## Install

```bash
npm install --save @faims-project/faims3-map-input
```

## Usage

```tsx
import React, { Component } from 'react'
import { Field, Form, Formik } from 'formik';
import XYZZYFormField from '@faims-project/faims3-xyzzy-input'

class Example extends Component {
  render() {
      return <Formik>
                <Form>
                  <Field name="circle" featureType="Circle" component={XYZZYFormField} />
                </Form>
             </Formik>
  }
}
```

## License

[Apache2](http://www.apache.org/licenses/LICENSE-2.0) © [stevecassidy](https://github.com/stevecassidy)
