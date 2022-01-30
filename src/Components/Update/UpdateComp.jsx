import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import './UpdateComp';

const UpdateComp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [checkbox, setCheckBox] = useState(false);
  const [id, setId] = useState(null);

  let history = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem('ID'));
    setFirstName(localStorage.getItem('First Name'));
    setLastName(localStorage.getItem('Last Name'));
    setCheckBox(localStorage.getItem('Checkbox value'));
  }, []);

  const updateApiData = () => {
    axios
      .put(`https://61f3ea3f10f0f7001768c73e.mockapi.io/fakeData/${id}`, {
        firstName,
        lastName,
        checkbox,
      })
      .then(() => {
        history('/read');
      });
  };

  // onChange
  const changeFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const changeLastName = (e) => {
    setLastName(e.target.value);
  };
  const changeCheckbox = (e) => {
    setCheckBox(!checkbox);
  };
  return (
    <>
      <Form className="create-form">
        <Form.Field>
          <label>First Name</label>
          <input
            placeholder="First Name"
            value={firstName}
            onChange={changeFirstName}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            placeholder="Last Name"
            value={lastName}
            onChange={changeLastName}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="I agree to the Terms and Conditions"
            checked={checkbox}
            onChange={changeCheckbox}
          />
        </Form.Field>
        <Button type="submit" onClick={updateApiData}>
          Update
        </Button>
      </Form>
    </>
  );
};

export default UpdateComp;
