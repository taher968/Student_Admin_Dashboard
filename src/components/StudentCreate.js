import React, { useState, useEffect } from 'react';
import {
  Create,
  SimpleForm,
  DateTimeInput,
  SelectInput,
  useNotify,
  useRefresh,
  useRedirect,
  useQuery,
  TextInput,
  NumberInput
} from 'react-admin';

const StudentCreate = (props) => {
  const notify = useNotify();
  const refresh = useRefresh();
  const redirect = useRedirect();

  // const onSuccess = ({ data }) => {
  //   notify(`New Student created `);
  //   redirect(`/students`);
  //   refresh();
  // };


  return (
    <Create {...props} title='Add new Student'>
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
    </Create>
  );
};

export default StudentCreate;