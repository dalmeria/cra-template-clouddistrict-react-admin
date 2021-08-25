import React from 'react'
import { Show, TextField, SimpleShowLayout, EmailField, UrlField } from 'react-admin'

const ShowView = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source='name' />
      <EmailField source='email' />
      <TextField source='phone' />
      <UrlField source='website' />
    </SimpleShowLayout>
  </Show>
)

export default ShowView
