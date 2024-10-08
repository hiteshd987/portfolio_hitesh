import React from 'react';
import Card from 'antd/lib/card';
import Space from 'antd/lib/space';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button';
import Image from 'antd/lib/image';
import { motion } from 'framer-motion';
const {TextArea} = Input;
import "./index.scss"

const Contact = () => {
    return (
        <>
            <p className="contact-title">Contact Details</p>
            <div className='contact-container'>
            <Row className='contact-row' gutter={[16, 16]}>
                <Col xs={24} sm={12} md={12} lg={12}>
                <Space className="contact-space" direction="vertical" size='large'>
                    <Card
                    title="Hitesh Derkar"
                    className="contact-card"
                    >
                    <div className='card-details-container'>
                    <div className='card-details'>
                        <p>hiteshder222@gmail.com</p>
                        <p>+4915510448901</p>
                        <p>Ilmenau, Germany</p>
                    </div>
                    <div className="social-container card-details">
                        <a href="https://github.com/hiteshd987">
                            <motion.img src="/github2.svg" alt="Github" className="github-img" />
                            {/* <Image src="/github2.svg" alt="Github" /> */}
                        </a>
                        <a href="https://www.linkedin.com/in/hitesh-derkar-151aa7147/">
                            <motion.img src="/linkedin.png" alt="Linkedin" className="linkedin-img" />
                            {/* <Image src="/linkedin.png" alt="Linkedin" /> */}
                        </a>
                    </div>
                    </div>
                    </Card>
                </Space>
                </Col>
                <Col xs={24} sm={12} md={12} lg={12} className='form-main-col'>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} md={12}>
                        <h1>Get in Touch</h1>
                        </Col>
                        <Col className="form-col" xs={24}>
                        <Input placeholder='Name' />
                        </Col>
                        <Col className="form-col" xs={24}>
                        <Input placeholder='Email' />
                        </Col>
                        <Col className="form-col" xs={24}>
                        <TextArea
                            showCount
                            maxLength={100}
                            placeholder="Message"
                            style={{
                                height: 120,
                                resize: 'none',
                            }}
                        />
                        </Col>
                        <Col className="form-col" xs={24}>
                        <Button type="primary" block disabled>Send</Button>
                        </Col>
                    </Row>            
                </Col>
            </Row>
            </div>
            
        </>
    )
}

export default Contact;