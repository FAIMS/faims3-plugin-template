# faims3-map-input

> Map based input widget for FAIMS3

[![NPM](https://img.shields.io/npm/v/faims3-map-input.svg)](https://www.npmjs.com/package/faims3-map-input) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save faims3-map-input
```

## Usage

```tsx
import React, { Component } from 'react'
import { Field, Form, Formik } from 'formik';
import MapFormField from 'faims3-map-input'

class Example extends Component {
  render() {
      return <Formik>
                <Form>
                  <Field name="circle" featureType="Circle" component={MapFormField} />
                </Form>
             </Formik>
  }
}
```

## License

MIT © [stevecassidy](https://github.com/stevecassidy)
