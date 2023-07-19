import { PageContainer } from '@ant-design/pro-components';

import { Row, Col, Card, Typography, Divider, List } from 'antd';
import Yan from '@/assets/imgs/yan.jpeg';
import Earth from '@/assets/imgs/Earth.jpg';
import DATA from '@/assets/lotties/data.json';
import ROBOT from '@/assets/lotties/robot.json';
import FloatButtonGroup from '@/components/FloatButtonGroup';
import Lottie from 'lottie-react';
import { FormattedMessage } from 'umi';
import { MyIcon } from '@/constants/icon';
import { useIntl } from 'umi';
import './style.css';

const { Meta } = Card;
const { Title, Paragraph, Text, Link } = Typography;
const HomePage: React.FC = () => {
  const intl = useIntl();
  return (
    <PageContainer ghost>
      <FloatButtonGroup />
      <Card
        style={{
          backgroundImage: `url(${Earth})`,
          height: '100%',
          marginBottom: '15px',
        }}
      >
        <h1 style={{ fontSize: 33, color: 'white' }}>
          <b>
            <FormattedMessage id="home.banner" />
          </b>
        </h1>
      </Card>
      <Row gutter={24} justify="space-evenly">
        <Col
          xs={24}
          sm={24}
          md={6}
          lg={8}
          xl={8}
          style={{ paddingBottom: '10px' }}
        >
          <Card
            hoverable
            style={{ textAlign: 'center', paddingBottom: '10px' }}
            cover={<img alt="Yan" src={Yan} />}
          >
            <Meta
              title={intl.formatMessage({
                id: 'home.name',
              })}
            />
          </Card>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={18}
          lg={16}
          xl={16}
          style={{ paddingBottom: '10px' }}
        >
          <Card style={{ height: '100%' }} hoverable>
            <Typography style={{ textAlign: 'center', paddingTop: '50px' }}>
              <Paragraph>
                <Text strong>
                  <Title level={1}>
                    <FormattedMessage id="home.title.iam" />
                  </Title>

                  <Title level={3}>
                    <FormattedMessage id="home.title.software" />
                    <MyIcon type="icon-homechengxuyuan" />
                  </Title>

                  <Title level={3}>
                    <FormattedMessage id="home.title.electrical" />
                    <MyIcon type="icon-homezu" />
                  </Title>

                  <Title level={3}>
                    <FormattedMessage id="home.title.pet" />
                    <MyIcon type="icon-homedog" />
                  </Title>

                  <Title level={3}>
                    <FormattedMessage id="home.title.player" />
                    <MyIcon type="icon-homeRPGGame" />
                  </Title>
                </Text>
              </Paragraph>
            </Typography>
          </Card>
        </Col>
      </Row>
      <div style={{ paddingBottom: '20px' }} />
      <Card>
        <Title
          style={{
            textAlign: 'center',
            paddingBottom: '20px',
            paddingTop: '20px',
          }}
        >
          Work Experiences
        </Title>

        <Row gutter={12} justify="space-evenly">
          <Col xs={24} sm={24} md={6} lg={8} xl={8}>
            <Lottie animationData={ROBOT} style={{ paddingBottom: '20px' }} />
          </Col>
          <Col xs={24} sm={24} md={18} lg={16} xl={16}>
            <Typography className="main-body-col">
              <Title level={5}>2023 - Present, Staff Software Engineer</Title>
              <Paragraph>
                <Text italic>Opus One Solutions From GE Digital</Text>
              </Paragraph>

              <Title level={5}>2019 - 2023, Software Developer</Title>
              <Paragraph>
                <Text italic>Opus One Solutions From GE Digital</Text>
              </Paragraph>
              <Paragraph>
                <ul>
                  <li>
                    Design, implement and improve mathematical optimization
                    models to simulate electric power grid with distributed
                    energy resources (DERs) by using GAMS
                  </li>

                  <li>
                    Maintain `optimization engine`: the python package to run
                    power flow analysis
                  </li>

                  <li>
                    Design, implement and improve OPF(optimal power flow)
                    objectives, e.g : cost minimization, operational envelope,
                    bid fulfillment, etc
                  </li>

                  <li>
                    Design, implement and improve RESTful APIs on micro-service
                    to run powerflow analyses. (flask)
                  </li>

                  <li>
                    Design, implement and improve Queue-based micro-service to
                    run powerflow analyses. (Kafka)
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
            </Typography>
          </Col>
        </Row>
        <Divider />
        <Row gutter={12} justify="space-evenly">
          <Col xs={24} sm={24} md={18} lg={16} xl={16}>
            <Typography className="main-body-col">
              <Title level={5}>2017 - 2019, Full Stack Developer</Title>
              <Paragraph>
                <Text italic>GreenfieldSCM, Supply Chain Management</Text>
              </Paragraph>
              <Paragraph>
                Developing Visualized Supply Chain Management System, include
                tracking, payment, and invoice generation functions. This web
                app is built by React (for frontend), MYSQL and Django (for
                backend).
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
            </Typography>
          </Col>
          <Col xs={24} sm={24} md={6} lg={8} xl={8}>
            <Lottie animationData={DATA} />
          </Col>
        </Row>
      </Card>
      <div style={{ paddingBottom: '20px' }} />
      <Card>
        <Title
          style={{
            textAlign: 'center',
            paddingBottom: '10px',
            paddingTop: '20px',
          }}
        >
          Publications
        </Title>

        <List
          itemLayout="vertical"
          size="large"
          dataSource={[
            {
              avatar:
                'https://ieee-pes.org/wp-content/uploads/2022/12/ieee-pes-logo.png',
              title:
                'Three-Phase Distribution Locational Marginal Pricing for Competitive Electricity' +
                ' Markets with Distributed Generators and Flexible Loads',
              description:
                '2022 IEEE Power & Energy Society Innovative Smart Grid Technologies Conference (ISGT)',
              link: 'https://ieeexplore.ieee.org/abstract/document/9817498',
            },
          ]}
          renderItem={(item) => (
            <List.Item key={item.title}>
              <Card hoverable>
                <Row gutter={12}>
                  <Col xs={0} sm={0} md={6} lg={6} xl={6}>
                    <img width={150} alt="logo" src={item.avatar} />
                  </Col>

                  <Col xs={24} sm={24} md={18} lg={18} xl={18}>
                    <Title level={5}>
                      <Link href={item.link} target="_blank">
                        {item.title}
                      </Link>
                    </Title>
                    <Paragraph>
                      <Text italic>{item.description}</Text>
                    </Paragraph>
                  </Col>
                </Row>
              </Card>
            </List.Item>
          )}
        />
      </Card>
    </PageContainer>
  );
};

export default HomePage;
