import React from 'react';
import {List, Datagrid, TextField, EditButton, DeleteButton, TextInput} from 'react-admin';

// const StudentFilter = (props) => (
//   <Filter {...props}>
//     <SearchInput placeholder='Student Name' source='name' resettable alwaysOn />
//   </Filter>
// )
const postFilters = [
  <TextInput label="Search" source="name" resettable alwaysOn />
]
function FeeList(props) {
    return (
        <List {...props} filters={postFilters}>
            <Datagrid>
                <TextField source='name' label='Name' />
                <TextField source='date' label='Date' />
                <TextField source='amount' label='Amount' />
                <EditButton basePath='/fees' />
                <DeleteButton basePath='/fees' />
            </Datagrid>
        </List>
    );
}

export default FeeList;