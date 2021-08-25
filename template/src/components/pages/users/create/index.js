import React from 'react'
import { Create, SimpleForm, TextInput, required, email } from 'react-admin'

const CreateView = props => (
  <Create {...props}>
    <SimpleForm redirect='list'>
      <TextInput source='name' validate={[required()]} />
      <TextInput source='email' validate={[required(), email()]} />
      <TextInput source='phone' />
    </SimpleForm>
  </Create>
)

export default CreateView
