import React from 'react'
import { Edit, SimpleForm, TextInput, required, email } from 'react-admin'

const EditView = props => (
  <Edit {...props}>
    <SimpleForm redirect='show'>
      <TextInput source='name' validate={[required()]} />
      <TextInput source='email' validate={[required(), email()]} />
      <TextInput source='phone' />
    </SimpleForm>
  </Edit>
)

export default EditView
