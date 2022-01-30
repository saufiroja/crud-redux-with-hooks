import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Table } from 'semantic-ui-react';

const ReadComp = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get('https://61f3ea3f10f0f7001768c73e.mockapi.io/fakeData')
      .then((res) => {
        setUser(res.data);
      });
  }, []);

  const getData = () => {
    axios
      .get('https://61f3ea3f10f0f7001768c73e.mockapi.io/fakeData')
      .then((getData) => {
        setUser(getData.data);
      });
  };
  // onClick
  const setData = (data) => {
    let { id, firstName, lastName, checkbox } = data;
    localStorage.setItem('ID', id);
    localStorage.setItem('First Name', firstName);
    localStorage.setItem('Last Name', lastName);
    localStorage.setItem('Checkbox value', checkbox);
  };

  const onDelete = (id) => {
    axios
      .delete(`https://61f3ea3f10f0f7001768c73e.mockapi.io/fakeData/${id}`)
      .then(() => getData());
  };

  return (
    <>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Cheked</Table.HeaderCell>
            <Table.HeaderCell>Edit</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {user.map((data) => {
            return (
              <Table.Row key={data.id}>
                <Table.Cell>{data.firstName}</Table.Cell>
                <Table.Cell> {data.lastName} </Table.Cell>
                <Table.Cell>
                  {data.checkbox ? 'Chacked' : 'Unchacked'}
                </Table.Cell>
                <Link to="/update">
                  <Table.Cell>
                    <Button onClick={() => setData(data)}>Edit</Button>
                  </Table.Cell>
                </Link>
                <Table.Cell>
                  <Button onClick={() => onDelete(data.id)}>Delete</Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </>
  );
};

export default ReadComp;
