export const MapFieldUISpec = {
  'component-namespace': 'mapping-plugin', // this says what web component to use to render/acquire value from
  'component-name': 'MapFormField',
  'type-returned': 'faims-core::JSON', // matches a type in the Project Model
  'component-parameters': {
    name: 'map-field',
    id: 'map-field'
  },
  validationSchema: [
    ['yup.object'],
    ['yup.nullable'],
    [
      'yup.shape',
      {
        type: [['yup.string'], ['yup.required']],
        features: [['yup.object'], ['yup.nullable']]
      }
    ]
  ],
  initialValue: {}
}

// should really be imported from the main project
interface ProjectUIModel {
  _id?: string // optional as we may want to include the raw json in places
  _rev?: string // optional as we may want to include the raw json in places
  fields: { [key: string]: any }
  views: {
    [key: string]: {
      label?: string
      fields: string[]
      uidesign?: string
      next_label?: string
    }
  }
  viewsets: {
    [type: string]: {
      label?: string
      views: string[]
      submit_label?: string
    }
  }
  visible_types: string[]
}

export const MapFieldUISetting = (defaultSetting: ProjectUIModel) => {
  const newuiSetting = Object.assign({}, defaultSetting)
  newuiSetting['viewsets'] = {
    settings: {
      views: [],
      label: 'settings'
    }
  }
  return newuiSetting
}


// const MapFormFieldUISetting = {
//   namespace: 'faims-custom',
//   componentName: 'TemplatedStringField',
//   type_return: 'faims-core::String',
//   required: true,
//   validationSchema: [['yup.string'], ['yup.required']],
//   type: 'text',
//   template: 'αβγ {{str-field}}-{{basic-autoincrementer-field}}'
// }

// registerComponent(
//   'faims-custom',
//   'TemplatedStringField',
//   setupComponentProperties(
//     'Map Input Field',
//     'Input Geo Data via a map',
//     'Maps',
//     MapFormField,
//     MapFormFieldUISetting /* FAIMSUISpec */,
//     MapFormFieldSetting /* Array<FAIMSUISpec> */,
//     MapFormFieldComponentSetting /* builder_component */
//     /* FAIMSBuilderIcon */
//   )
// )
