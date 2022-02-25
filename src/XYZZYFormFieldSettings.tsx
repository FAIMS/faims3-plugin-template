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

export const XYZZYFieldUISpec = {
  'component-namespace': 'xxxxx-plugin', // this says what web component to use to render/acquire value from
  'component-name': 'XYZZYFormField',
  'type-returned': 'faims-core::String', // matches a type in the Project Model
  'component-parameters': {
    name: 'radio-group-field',
    id: 'radio-group-field',
    variant: 'outlined',
    required: false,
    label: '',
    FormLabelProps: {
      children: 'Input a value here'
    }
  },
  validationSchema: [['yup.string']],
  initialValue: '1'
}

export const XYZZYFieldUISetting = (defaultSetting: ProjectUIModel) => {
  const newuiSetting = Object.assign({}, defaultSetting)

  return newuiSetting
}
