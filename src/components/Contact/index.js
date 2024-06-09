import React from 'react';
import { Card, Space, Row, Col, Input, Button } from 'antd';
const {TextArea} = Input;
import "./index.scss"

const Contact = () => {
    return (
        <>
            <h1 className="contact-title">Contact Details</h1>
            <Row className='contact-row'>
                <Col className="gutter-row" span={3}>
                </Col>
                <Col className="gutter-row" span={11}>
                <Space className="contact-space" direction="vertical" >
                    <Card
                    title="Hitesh Derkar"
                    className="contact-card"
                    //   extra={<a href="#">More</a>}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                    <p>hiteshder222@gmail.com</p>
                    <p>+4915510448901</p>
                    <p>Ilmenau, Germany</p>
                    <div className="social">
                        <a href="https://github.com/hiteshd987">
                            <img src="/github.svg" alt="Github" />
                        </a>
                        <a href="https://www.linkedin.com/in/hitesh-derkar-151aa7147/">
                            <img src="/linkedin.png" alt="Linkedin" />
                        </a>
                    </div>
                    </Card>
                </Space>
                </Col>
                <Col className="gutter-row" span={10}>
                <Row>
                    <Col className="gutter-row form-col" span={18}>
                      <h1>Get in Touch</h1>
                    </Col>
                    <Col className="gutter-row form-col" span={18}>
                      <Input placeholder='Name' />
                    </Col>
                    <Col className="gutter-row form-col" span={18}>
                      <Input placeholder='Email' />
                    </Col>
                    <Col className="gutter-row form-col" span={18}>
                     {/* <Input placeholder='Message' /> */}
                     <TextArea
                        showCount
                        maxLength={100}
                        // onChange={onChange}
                        placeholder="Message"
                        style={{
                            height: 120,
                            resize: 'none',
                        }}
                    />
                    </Col>
                    <Col className="gutter-row form-col" span={18}>
                     <Button type="primary" block>Send</Button>
                    </Col>
                </Row>            
            </Col>
            </Row>
        </>
    )
}

export default Contact;