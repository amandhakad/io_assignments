import { Button, Form, Input, message, Row, Col } from 'antd';
import { useState, useEffect } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { setError } from '../redux/slices/authSlice';
import { registerUser } from '../redux/actions/authActions'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Register() {

  const dispatch = useDispatch();

  const authState = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if(authState.error) {
      message.error(authState.error);
      dispatch(setError(null));
    }
  }, [authState.error]);

  useEffect(() => {
    if(authState.authToken) {
      message.success("Logged in!");
      return navigate("/");
    }
  }, [authState.authToken]);

  const onFinish = (values) => {
    dispatch(registerUser(values));
    dispatch(setError(null));
  };

  return (
    <div
        style={{
          padding: '5px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
       <Form
            name="basic"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
           >
            <Form.Item
              label="Full name"
              name="name"
              rules={[{ required: true, message: 'Please input your name!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Email address"
              name="email"
              rules={[{ required: true, type: 'email', message: 'Please input valid email address!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Unique username"
              name="username"
              rules={[{ required: true, pattern: new RegExp(/^[A-Za-z][A-Za-z0-9]*$/), message: 'Please input valid username!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                {authState.loading ? <LoadingOutlined/> : <></>}Submit
              </Button>
            </Form.Item>
            <div style={{textAlign: 'center'}}>
              Existing user? <Link to="/login">Login here</Link>
            </div>
          </Form>
        </div>
  );
}

export default Register;