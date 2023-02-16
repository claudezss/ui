import { PageContainer } from '@ant-design/pro-components';

import { Row, Col, Card, Typography, Divider } from 'antd';
import Yan from '@/assets/imgs/yan.jpeg';
import Earth from '@/assets/imgs/Earth.jpg';
import {
  BugOutlined,
  DeploymentUnitOutlined,
  HeartOutlined,
  AndroidOutlined,
} from '@ant-design/icons';

const { Meta } = Card;
const { Title, Paragraph, Text, Link } = Typography;
const HomePage: React.FC = () => {
  return (
    <PageContainer ghost>
      <Card
        style={{
          backgroundImage: `url(${Earth})`,
          height: '100%',
          marginBottom: '15px',
        }}
      >
        <h1 style={{ fontSize: 33, color: 'white' }}>
          <b>HELPING TO ACHIEVE NET-ZERO</b>
        </h1>
      </Card>
      <Row gutter={12} justify="space-evenly">
        <Col
          xs={24}
          sm={24}
          md={6}
          lg={8}
          xl={8}
          style={{ marginBottom: '15px' }}
        >
          <Card
            hoverable
            style={{ textAlign: 'center' }}
            cover={<img alt="Yan" src={Yan} />}
          >
            <Meta title="Yan (Claude) Zhang" />
          </Card>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={18}
          lg={16}
          xl={16}
          style={{ marginBottom: '15px', padding: '0px 40px 10px 40px' }}
        >
          <Typography>
            <Title>YAN ZHANG</Title>
            <Paragraph></Paragraph>
            <Paragraph>
              <Text strong>
                <ul>
                  <li>
                    A Software Engineer <BugOutlined />
                  </li>
                  <li>
                    An Electrical Engineer <DeploymentUnitOutlined />
                  </li>
                  <li>
                    A Dog & Cat Lover <HeartOutlined />
                  </li>
                  <li>
                    A RPG Game Player <AndroidOutlined />
                  </li>
                </ul>
              </Text>
            </Paragraph>

            <Title>Work Experiences</Title>
            <Title level={5}>2019 - Present, Software Developer</Title>
            <Paragraph>
              <Text italic>Opus One Solutions From GE Digital</Text>
            </Paragraph>
            <Paragraph>
              <ul>
                <li>
                  Design, implement and improve mathematical optimization models
                  to simulate electric power grid with distributed energy
                  resources (DERs) by using GAMS
                </li>

                <li>
                  Maintain `optimization engine`: the python package to run
                  power flow analysis
                </li>

                <li>
                  Design, implement and improve OPF(optimal power flow)
                  objectives, e.g : cost minimization, operational envelope, bid
                  fulfillment, etc
                </li>

                <li>
                  Design, implement and improve RESTful APIs on micro-service to
                  run powerflow analyses. (flask)
                </li>

                <li>
                  Design, implement and improve Queue-based micro-service to run
                  powerflow analyses. (Kafka)
                </li>

                <li>Design, implement and improve benchmark testing tools</li>

                <li>
                  Write documentations and white papers for the optimization
                  models and applications developed
                </li>

                <li>
                  Analysis and validate optimal power flow results of
                  customers&apos; networks, and compare results with published
                  data from IEEE Power & Energy Society (IEEE PES)
                </li>
              </ul>
            </Paragraph>

            <Divider />

            <Title level={5}>2017 - 2019, Full Stack Developer</Title>
            <Paragraph>
              <Text italic>GreenfieldSCM, Supply Chain Management</Text>
            </Paragraph>
            <Paragraph>
              Developing Visualized Supply Chain Management System, include
              tracking, payment, and invoice generation functions. This web app
              is built by React (for frontend), MYSQL and Django (for backend).
            </Paragraph>

            <Divider />

            <Title level={5}>
              2013 - 2017, Bachelor of Engineering Science - Electrical
              Engineering
            </Title>
            <Paragraph>
              <Text italic>University of Western Ontario</Text>
            </Paragraph>
            <Paragraph>
              <ul>
                <li>power system</li>
                <li>wireless communication</li>
                <li>programming</li>
              </ul>
            </Paragraph>

            <Title>Publications</Title>
            <Title level={5}>
              <Link
                href="https://ieeexplore.ieee.org/abstract/document/9817498"
                target="_blank"
              >
                Three-Phase Distribution Locational Marginal Pricing for
                Competitive Electricity Markets with Distributed Generators and
                Flexible Loads
              </Link>
            </Title>
            <Paragraph>
              <Text italic>
                2022 IEEE Power &amp; Energy Society Innovative Smart Grid
                Technologies Conference (ISGT)
              </Text>
            </Paragraph>
          </Typography>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default HomePage;
