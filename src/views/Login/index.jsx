import _ from 'lodash';
import React from 'react';
import { Form, Input, Button } from 'antd';

const styles = {
    login: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'linear-gradient(45deg, gray, #e6e6e6)'
    },
    panel: {
        width: '350px',
        borderRadius: '6px',
        marginTop: '-50px',
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.08)',
        background: 'rgba(255, 255, 255, 0.3)'
    },
    panelH1: {
        textAlign: 'center',
        fontSize: '20px',
        fontWeight: 300,
        padding: '14px 0',
        marginBottom: '0',
        color: 'rgba(0, 0, 0, 0.7)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.1)'
    },
    vercodeBox: {
        display: 'flex'
    },
    vercode: {
        minWidth: '130px',
        maxHeight: '32px',
        cursor: 'pointer',
        marginLeft: '10px',
        border: '1px solid #ccc'
    }
}

const colors = [
    'linear-gradient(45deg, #2e3192, #1bffff)',
    'linear-gradient(45deg, #d4145a, #fbb03b)',
    'linear-gradient(45deg, #009245, #fcee21)',
    'linear-gradient(45deg, #662d8c, #ed1e79)',
    'linear-gradient(45deg, #ed1c24, #fcee21)',
    'linear-gradient(45deg, #00a8c5, #ffff7e)',
    'linear-gradient(45deg, #fb872b, #d9e021)',
    'linear-gradient(45deg, #312a6c, #852d91)',
    'linear-gradient(45deg, #009e00, #ffff96)',
    'linear-gradient(45deg, #b066fe, #63e2ff)',
    'linear-gradient(45deg, gray, #e6e6e6)',
    'linear-gradient(45deg, #00ffa1, aqua)',
    'linear-gradient(45deg, #8e78ff, #ff7d78)',
    'linear-gradient(45deg, #00537e, #136d7e 33%, #3aa17e)',
    'linear-gradient(45deg, #fca5f1, #b5ffff)',
    'linear-gradient(45deg, #d585ff, #0fe)',
    'linear-gradient(45deg, #f24645, #ebc08d)',
    'linear-gradient(45deg, #3a3897, #a3a1ff)',
    'linear-gradient(45deg, #45145a, #ff5300)',
    'linear-gradient(45deg, #333, #5a5454)',
    'linear-gradient(45deg, #4f00bc, #29abe2)',
    'linear-gradient(45deg, #00b7ff, #ffffc7)',
    'linear-gradient(45deg, #93278f, #00a99d)',
    'linear-gradient(to bottom, rgba(255,255,255,0.50) 0%, rgba(0,0,0,0.50) 100%), radial-gradient(at 50% 0%, rgba(255,255,255,0.10) 0%, rgba(0,0,0,0.50) 50%)',
    'linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)',
    'linear-gradient(60deg, #29323c 0%, #485563 100%)',
    'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
]

const layout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 18,
    },
};


const color = colors[_.random(0, colors.length)]
const Login = () => {
    const [form] = Form.useForm();

    const onFinish = values => {
        console.log(values);
        sessionStorage.setItem('token','adasllasldasldlasd');
        window.location.reload();
    };

    const onFill = () => {
        form.setFieldsValue({
            note: 'Hello world!',
            gender: 'male',
        });
    };

    return (
        <div className="page-login" style={{ ...styles.login, backgroundImage: color }}>
            <div className="login-panel" style={styles.panel}>
                <h1 style={styles.panelH1}>开发环境登录界面</h1>
                <Form form={form} {...layout} style={{ padding: '15px' }} className="login-form" onFinish={onFinish}>
                    <Form.Item
                        name="username"
                        label="用户名"
                        style={{ marginBottom: '15px' }}
                        rules={[
                            {
                                required: true,
                                message: "用户名不能为空"
                            },
                        ]}>
                        <Input
                            // prefix={<Icon type="user" />}
                            placeholder="请输入用户名"
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        label="密码"
                        style={{ marginBottom: '15px' }}
                        rules={[
                            {
                                required: true,
                                message: "密码不能为空"
                            },
                        ]}>
                        <Input
                            // prefix={<Icon type="user" />}
                            placeholder="请输入密码"
                        />
                    </Form.Item>
                    <Form.Item
                        name="code"
                        label="验证码"
                        style={{ marginBottom: '15px' }}
                        rules={[
                            {
                                required: true,
                                message: "验证码不能为空"
                            },
                        ]}>
                        <Input
                            // prefix={<Icon type="user" />}
                            placeholder="请输入验证码"
                        />
                    </Form.Item>
                    <Form.Item style={{ textAlign: 'center', margin: '0 ', display: 'flex', justifyContent: 'center' }}>
                        <Button style={{ lineHeight: '1', width: '100px' }} type="primary" htmlType="submit" className="login-form-button">登录</Button>
                    </Form.Item>

                </Form>
            </div >
        </div>
    );
};

export default Login