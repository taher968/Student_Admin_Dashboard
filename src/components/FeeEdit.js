import React from 'react';
import {Edit, SimpleForm, TextInput, DateTimeInput, selectInput, DateInput} from 'react-admin';


const FeeEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source='name' />
            <DateInput source='date' />
            <TextInput source='amount' />

        </SimpleForm>
    </Edit>
);

export default FeeEdit;