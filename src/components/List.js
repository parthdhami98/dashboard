import React, { useState, useEffect } from "react";
import DetailData from "./DetailData";
import axios from "axios";
import "./Assignment.css";
import { Card, Spin, Menu, Layout, Icon, Row, Col } from "antd";
import { Table } from "react-bootstrap";
import Pagination from "./Pagination";

const { Header, Content, Sider } = Layout;

const List = props => {
  const [userdata, setuserdata] = useState([]);
  const [singleuser, setsingleuser] = useState();
  const [showdetails, setshowdetails] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [currentpage, setcurrentpage] = useState(1);
  const [postperpage] = useState(10);

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    let error;
    const url = "http://dummy.restapiexample.com/api/v1/employees";
    try {
      let response = await axios.get(url);
      if (response.status !== 200) {
        throw new error("something went wrong");
      }
      const data = response.data.data;

      setuserdata(data);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  const showdata = user => {
    setshowdetails(true);
    setsingleuser(user);
  };

  const indexOfflastpost = currentpage * postperpage;
  const indexOffirstpost = indexOfflastpost - postperpage;
  const currentpost = userdata.slice(indexOffirstpost, indexOfflastpost);
  const paginate = pageNumber => setcurrentpage(pageNumber);

  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Icon type="user" />
            <span className="nav-text">Profile</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="video-camera" />
            <span className="nav-text">Project</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="upload" />
            <span className="nav-text">Payment</span>
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="user" />
            <span className="nav-text">Feedback</span>
          </Menu.Item>
          <Menu.Item key="5">
            <Icon type="user" />
            <span className="nav-text">Message Center</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: "rgb(0,21,41)", height: 69 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <Row>
            <Col span={12}>
              <div className="list">
                <Card>
                  <Spin spinning={Loading}>
                    <Table striped bordered hover size="sm">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Name</th>
                        </tr>
                      </thead>
                      <tbody>
                        {currentpost.map((user, index) =>
                          <tr key={index}>
                            <td>
                              {user.id}
                            </td>

                            <td>
                              <a onClick={() => showdata(user)} href="#">
                                {user.employee_name}
                              </a>
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </Table>
                    <Pagination
                      postperpage={postperpage}
                      totalpage={userdata.length}
                      paginate={paginate}
                    />
                  </Spin>
                </Card>
              </div>
            </Col>
            {showdetails
              ? <Col span={12}>
                  <DetailData singleuser={singleuser} />
                </Col>
              : null}
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};
export default List;
