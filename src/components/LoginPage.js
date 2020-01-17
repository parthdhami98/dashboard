import React from "react";
import { Form, Input, Card, Button } from "antd";
import "./Assignment.css";

export default function LoginPage(props) {
  const { onSubmit, onChange, password, username } = props;

  return (
    <div className="MainComponent">
      <Form className="Login-form" onSubmit={onSubmit}>
        <Card size="small">
          <h2 style={{ textAlign: "center" }}>Login</h2>
          <Form.Item label="Username">
            <Input
              placeholder="Username"
              name="username"
              onChange={onChange("username")}
              value={username}
            />
          </Form.Item>
          <Form.Item label="Password">
            <Input
              placeholder="password"
              onChange={onChange("password")}
              value={password}
            />
          </Form.Item>
          <p>Note: Use bob as username and password to login</p>

          <Button htmlType="submit" className="login-btn" type="primary">
            Login
          </Button>
        </Card>
      </Form>
    </div>
  );
}
