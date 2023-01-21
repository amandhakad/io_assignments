import { Button, Form, Input, message } from 'antd';
import { useState, useEffect } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { setError } from '../redux/slices/authSlice';
import { loginUser } from '../redux/actions/authActions'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {

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
    dispatch(loginUser(values));
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
          className="auth_form"
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
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
            Not existing user? <Link to="/register">Register here</Link>
          </div>
        </Form>
    </div>
  );
}

export default Login;