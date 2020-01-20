import React, { useState, useEffect } from "react";
import DetailData from "./DetailData";
import Moment from "moment";
import faker from "faker";
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
    let getusers = [];
    for (let i = 0; i < 50; i++) {
      getusers.push({
        Genre: "business",
        id: faker.random.alphaNumeric(),
        topic: faker.lorem.sentence(),
        deadline: "20/1/2020",
        vertical: "Blog Post",
        words: faker.lorem.paragraph().length,
        paragraph: faker.lorem.paragraph()
      });
    }
    setuserdata(getusers);
  }, []);

  const showdata = user => {
    setshowdetails(true);
    setsingleuser(user);
  };
  console.log(userdata);
  const indexOfflastpost = currentpage * postperpage;
  const indexOffirstpost = indexOfflastpost - postperpage;
  const currentpost = userdata.slice(indexOffirstpost, indexOfflastpost);
  const paginate = pageNumber => setcurrentpage(pageNumber);

  return (
    <div>
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
          <Content>
            <Row>
              <Col span={15}>
                <div className="list">
                  <Card>
                    <Spin spinning={Loading}>
                      <Table striped bordered hover size="sm">
                        <thead>
                          <tr>
                            <th>Article Code</th>
                            <th>Topic</th>
                            <th>Words</th>
                            <th>Genre</th>
                            <th>Deadline</th>
                            <th>Vertical</th>
                          </tr>
                        </thead>
                        <tbody>
                          {currentpost.map((user, index) =>
                            <tr key={index}>
                              <td>
                                {"Art-" + user.id}
                              </td>

                              <td>
                                <a onClick={() => showdata(user)} href="#">
                                  {user.topic}
                                </a>
                              </td>
                              <td>
                                {user.words}
                              </td>
                              <td>
                                {user.Genre}
                              </td>
                              <td>
                                {`${user.deadline}`}
                              </td>
                              <td>
                                {user.vertical}
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
                ? <Col span={9}>
                    <DetailData singleuser={singleuser} />
                  </Col>
                : null}
            </Row>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};
export default List;
