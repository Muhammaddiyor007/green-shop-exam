import React from 'react'
import { Form, Input, Upload, Button } from 'antd'
import { UploadOutlined } from '@ant-design/icons'

const AccountDetail = () => {
  const onFinish = (values) => {
    console.log('Form values:', values);
    // Bu yerda API ga yuborish yoki boshqa logika bo'lishi mumkin
  }

  return (
    <div className="w-full h-full mx-auto p-4">
      <Form
        layout="vertical"
        onFinish={onFinish}
        initialValues={{ prefix: "+998" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <Form.Item
          name="firstName"
          label={<span>First name</span>}
          rules={[{ required: true, message: "Please input your first name!" }]}
        >
          <Input placeholder="First name" />
        </Form.Item>

        <Form.Item
          name="lastName"
          label={<span>Last name</span>}
          rules={[{ required: true, message: "Please input your last name!" }]}
        >
          <Input placeholder="Last name" />
        </Form.Item>

        <Form.Item
          name="email"
          label={<span>Email address</span>}
          rules={[{ required: true, type: "email", message: "Please enter a valid email!" }]}
        >
          <Input placeholder="Email address" />
        </Form.Item>

        <Form.Item
          name="phone"
          label={<span>Phone Number</span>}
          rules={[{ required: true, message: "Please input your phone number!" }]}
        >
          <Input addonBefore="+998" placeholder="Your phone number..." />
        </Form.Item>

        <Form.Item
          name="username"
          label={<span>* Username</span>}
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input placeholder="Your username..." />
        </Form.Item>

        <Form.Item
          name="photo"
          label="Profile photo"
          valuePropName="fileList"
          getValueFromEvent={e => (Array.isArray(e) ? e : e && e.fileList)}
        >
          <Upload beforeUpload={() => false} maxCount={1}>
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        </Form.Item>

        <div className="md:col-span-2">
          <Button htmlType="submit" className="bg-[#46A358] rounded-[6px] font-bold px-[15px] py-[10px] text-white">
            Save changes
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default AccountDetail
