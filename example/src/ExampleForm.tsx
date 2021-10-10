import React from 'react';
import { Field, Form, Formik } from 'formik';
import {MapFormField} from 'faims3-map-input'
import Button from '@material-ui/core/Button'
import './ExampleForm.css'

const ExampleForm = () => {

  return (
      <Formik
        initialValues={{ circle: {}, point: {}, polygon: {}, linestring: {} }}
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
            <Field name="circle" featureType="Circle" component={MapFormField} />

            <Field name="point" featureType="Point" component={MapFormField} />

            <Field name="polygon" featureType="Polygon" component={MapFormField} />

            <Field name="linestring" featureType="LineString" component={MapFormField} />

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