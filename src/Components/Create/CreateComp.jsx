import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Checkbox, Form } from 'semantic-ui-react';

import './CreateComp.css';

const CreateComp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [checkbox, setCheckbox] = useState(false);

  let history = useNavigate();

  const onChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const onChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  const onChangeCheckbox = (e) => {
    setCheckbox(!checkbox);
  };

  const onSubmitData = async () => {
    await axios
      .post('https://61f3ea3f10f0f7001768c73e.mockapi.io/fakeData', {
        firstName,
        lastName,
        checkbox,
      })
      .then(() => {
        history('/read');
      });
  };

  return (
    <>
      <Form className="create-form">
        <Form.Field>
          <label>First Name</label>
          <input placeholder="First Name" onChange={onChangeFirstName} />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder="Last Name" onChange={onChangeLastName} />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="I agree to the Terms and Conditions"
            onChange={onChangeCheckbox}
          />
        </Form.Field>
        <Button type="submit" onClick={onSubmitData}>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default CreateComp;
