import React from 'react';
import {
    Datagrid,
    List,
    Show,
    Create,
    Edit,
    SimpleShowLayout,
    SimpleForm,
    TextField,
    TextInput,
    NumberField,
    TopToolbar,
    ShowButton,
    EditButton,
    DeleteButton,
    SearchInput,
  } from "react-admin";
import { ImportButton } from "@blackbox-vision/react-admin-import-csv";
import { CreateButton, ExportButton } from "ra-ui-materialui";
import StandardFilter from './StandardFilter';
import { Card as MuiCard, CardContent, withStyles } from '@material-ui/core';

// const StudentFilter = (props) => (
//   <Filter {...props}>
//     <SearchInput placeholder='Student Name' source='name' resettable alwaysOn />
//   </Filter>
// )

const Card = withStyles(theme => ({
  root: {
      [theme.breakpoints.up('sm')]: {
          order: -1, // display on the left rather than on the right of the list
          width: '15em',
          marginRight: '1em',
      },
      [theme.breakpoints.down('sm')]: {
          display: 'none',
      },
  },
}))(MuiCard);

const FilterSidebar = () => (
  <Card>
      <CardContent>
        <StandardFilter />
      </CardContent>
  </Card>
);

const studentFilters = [
  <SearchInput source="q" alwaysOn />
]

const ListActions = (props) => {
    const {
      className,
      basePath,
      total,
      resource,
      currentSort,
      filterValues,
      exporter,
    } = props;
    const config = {
      logging: true,
      validateRow: async (row) => {
        console.log(row);
        if (row.id) {
          // throw new Error("AAAA");
        }
      },
      postCommitCallback: reportItems => {
        console.log('reportItems', {reportItems});
      },
      // disableImportNew: true,
      // disableImportOverwrite: true,
    };

    return (
      <TopToolbar className={className}>
        <CreateButton basePath={basePath} />
        <ExportButton
          disabled={total === 0}
          resource={resource}
          sort={currentSort}
          filter={filterValues}
          exporter={exporter}
        />
        <ImportButton {...props} {...config} parseConfig={{dynamicTyping: true}} />
      </TopToolbar>
    );
  };
  


const postFilters = [
  <TextInput label="Search" source="name" resettable alwaysOn />
]
function StudentList(props) {
    return (
        <List {...props} actions={<ListActions />} filters={studentFilters} aside={<FilterSidebar />}  >
            <Datagrid>
                <NumberField source='sno' label='SNO' />
                <TextField source='std' label='Standard' />
                <TextField source='name' label='Name' />
                <NumberField source='balance' label='Balance' />
                <EditButton basePath='/students' />
                <DeleteButton basePath='/students' />
            </Datagrid>
        </List>
    );
}

export default StudentList;