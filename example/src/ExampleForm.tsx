// @ts-ignore
import React from 'react';
import { Field, Form, Formik } from 'formik';
import {MapFormField} from 'faims3-map-input'
import Button from '@material-ui/core/Button'
import './ExampleForm.css'

const ExampleForm = () => {

  const center = [151.21409960967713,-33.85543752567224]

  return (
      <Formik
        initialValues={{ point: {}, polygon: {}, linestring: {} }}
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

            <p>First button does not specify featureType so defaults to Point</p>
            <Field name="point" center={center} component={MapFormField} />

            <p></p>
            <Field name="point" center={center} featureType="Point" component={MapFormField} />
            <p></p>
            <Field name="polygon" zoom={10} featureType="Polygon" component={MapFormField} />
            <p></p>
            <Field name="linestring" featureType="LineString" component={MapFormField} />
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