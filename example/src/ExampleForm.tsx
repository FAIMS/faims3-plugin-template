// @ts-ignore
import React from 'react';
import { Field, Form, Formik } from 'formik';
import {XYZZYFormField} from 'faims3-xyzzy-input'
import Button from '@material-ui/core/Button'
import './ExampleForm.css'

const ExampleForm = () => {

  return (
      <Formik
        initialValues={{ sample: '' }}
        onSubmit={(values: any, actions: any) => {
            console.log(values)
            actions.setSubmitting(false);
        }}
      >
        {(formProps) => (
          <div id="demoformcontainer">
            <div id="theform">
                  <h1>Test Form</h1>
          <Form>

            <p>Sample form field</p>
            <Field label="This label was set explicitly" name="sample" component={XYZZYFormField} />
            <p></p>
            <Button variant='contained' color='primary' type="submit">Submit</Button>
          </Form>

            </div>
              <div id="formvaluedisplay">
                <pre>
                {JSON.stringify(formProps.values, null, 2)}
                </pre>
              </div>
              </div>
        )}
      </Formik>
)
};


export default ExampleForm;