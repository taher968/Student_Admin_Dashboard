import React from 'react';
import {Edit, SimpleForm, TextInput, NumberInput,  SelectInput} from 'react-admin';


const StudentEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <NumberInput source='sno' />
            <SelectInput source='std' choices={[
                { id: 'KG', name: 'KG' },
                { id: '1st', name: '1st' },
                { id: '2nd', name: '2nd' },
                { id: '3rd', name: '3rd' },
                { id: '4th', name: '4th' },
                { id: '5th', name: '6th' },
                { id: '7th', name: '7th' },
                { id: '8th', name: '8th' },
                { id: '9th', name: '9th' },
                { id: '10th', name: '10th' }
            ]} />
            <TextInput source='name' />
            <NumberInput source='balance' />

        </SimpleForm>
    </Edit>
);

export default StudentEdit;