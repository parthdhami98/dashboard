import React from "react";
import {
  Card,
  Upload,
  message,
  Button,
  Icon,
  Divider,
  Descriptions
} from "antd";

export default function DetailData(props) {
  const { singleuser } = props;

  const fileprops = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text"
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    }
  };

  return (
    <div className="detail">
      <h2 style={{ textAlign: "center" }}> Article Details</h2>
      <Divider />
      <Card>
        <Descriptions bordered>
          <Descriptions.Item label="Article Code" span={3}>
            {"Art -" + singleuser.id}
          </Descriptions.Item>
          <Descriptions.Item label="Topic" span={3}>
            {singleuser.topic}
          </Descriptions.Item>
          <Descriptions.Item label="Words" span={3}>
            {singleuser.words}
          </Descriptions.Item>
          <Descriptions.Item label="Deadline" span={3}>
            {singleuser.deadline}
          </Descriptions.Item>
          <Descriptions.Item label="Genre" span={3}>
            {singleuser.Genre}
          </Descriptions.Item>
          <Descriptions.Item label="Vertical" span={3}>
            {singleuser.vertical}
          </Descriptions.Item>
          <Descriptions.Item label="Description" span={3}>
            {singleuser.paragraph}
          </Descriptions.Item>
          <Descriptions.Item label="File Upload" span={3}>
            <Upload {...fileprops}>
              <Button>
                <Icon type="upload" /> Click to Upload
              </Button>
            </Upload>
          </Descriptions.Item>
        </Descriptions>
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 10 }}
        >
          <Button>Accept</Button>
          <Button style={{ marginLeft: 5 }}>Reject</Button>
        </div>
      </Card>
    </div>
  );
}
