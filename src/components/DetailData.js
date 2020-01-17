import React from "react";
import { Card, Badge, Divider, Descriptions } from "antd";

export default function DetailData(props) {
  const { singleuser } = props;
  return (
    <div className="detail">
      <h2 style={{ textAlign: "center" }}> Employee Details</h2>
      <Divider />
      <Card>
        <Descriptions bordered>
          <Descriptions.Item label="ID" span={3}>
            {singleuser.id}
          </Descriptions.Item>
          <Descriptions.Item label="Name" span={3}>
            {singleuser.employee_name}
          </Descriptions.Item>
          <Descriptions.Item label="Age" span={3}>
            {singleuser.employee_age}
          </Descriptions.Item>
          <Descriptions.Item label="Salary" span={3}>
            {singleuser.employee_salary}
          </Descriptions.Item>
          <Descriptions.Item label="Status" span={3}>
            <Badge status="success" text="Verified" />
          </Descriptions.Item>
        </Descriptions>
      </Card>
    </div>
  );
}
