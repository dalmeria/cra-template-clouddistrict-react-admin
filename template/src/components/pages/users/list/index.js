import React from 'react'
import { List, Datagrid, TextField, EmailField, EditButton, Filter, TextInput, DeleteButton } from 'react-admin'

const ListFilters = props => (
  <Filter {...props}>
    <TextInput source='name' autoComplete='off' />
  </Filter>
)

const ListView = props => (
  <List filters={<ListFilters />} {...props}>
    <Datagrid rowClick='show'>
      <TextField source='id' />
      <TextField source='name' />
      <EmailField source='email' />
      <TextField source='phone' />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
)

export default ListView
