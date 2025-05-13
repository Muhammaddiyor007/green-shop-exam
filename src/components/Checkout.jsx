import React from "react";
import { Button, Input, Form, Select } from "antd";
import { FaRegCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import payment from "../assets/payment.svg";
import { FaRegCircleDot } from "react-icons/fa6";

const { Option } = Select;

const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select style={{ width: 70 }}>
      <Option value="998">+998</Option>
      <Option value="1">+1</Option>
    </Select>
  </Form.Item>
);

const SubmitButton = ({ form, children }) => {
  const [submittable, setSubmittable] = React.useState(false);
  const values = Form.useWatch([], form);

  React.useEffect(() => {
    form
      .validateFields({ validateOnly: true })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  }, [form, values]);

  return (
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      {children}
    </Button>
  );
};

const App = () => {
  const [form] = Form.useForm();
  const cartItems = useSelector((state) => state.cart.items);
  const [selectedPayment, setSelectedPayment] = React.useState(null);

  return (
    <div className="container flex flex-col lg:flex-row justify-between gap-10 px-4">
      <div className="flex flex-col gap-4 w-full lg:w-2/3">
        <div className="flex items-center gap-2 mt-[36px] mb-[36px]">
          <p className="font-semibold">Home</p>
          <p>/ Shop</p>
          <p>/ Checkout</p>
        </div>
        <p className="font-bold text-[17px]">Billing Address</p>

        <Form
          form={form}
          name="validateOnly"
          layout="vertical"
          autoComplete="off"
          className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center mt-6"
        >
          <Form.Item
            name="First Name"
            label="First Name"
            className="w-full md:w-[350px]"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="Last Name"
            label="Last Name"
            className="w-full md:w-[350px]"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="Country / Region"
            label="Country / Region"
            className="w-full md:w-[350px]"
            rules={[{ required: true }]}
          >
            <Input placeholder="Select a country / region" />
          </Form.Item>

          <Form.Item
            name="Town / City"
            label="Town / City"
            className="w-full md:w-[350px]"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="Street Address"
            label="Street Address"
            className="w-full md:w-[350px]"
            rules={[{ required: true }]}
          >
            <Input placeholder="House number and street name" />
          </Form.Item>

          <Form.Item name="Apartment" className="w-full md:w-[350px]">
            <Input placeholder="Apartment, suite, unit, etc. (optional)" />
          </Form.Item>

          <Form.Item
            name="State"
            label="State"
            className="w-full md:w-[350px]"
            rules={[{ required: true }]}
          >
            <Input placeholder="Select a state" />
          </Form.Item>

          <Form.Item
            name="Zip"
            label="Zip"
            className="w-full md:w-[350px]"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="Email address"
            label="Email address"
            className="w-full md:w-[350px]"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="Phone Number"
            label="Phone Number"
            className="w-full md:w-[350px]"
            rules={[
              { required: true, message: "Please input your phone number!" },
            ]}
          >
            <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
          </Form.Item>
        </Form>

        <div className="flex flex-col gap-[55px]">
          <p className="flex items-center font-medium text-[15px] gap-2">
            <FaRegCircle className="text-[#46A358]" />
            Ship to a different address?
          </p>
          <div className="flex flex-col gap-2">
            <p>Order notes (optional)</p>
            <textarea
              name="a"
              id=""
              className="border border-[#EAEAEA] w-full md:w-[350px] h-[152px]"
            ></textarea>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[410px] flex flex-col gap-10">
        <p className="font-bold text-[17px]">Your Order</p>

        <div className="flex justify-between border-b border-[#46A35880]">
          <p className="font-medium">Products</p>
          <p className="font-medium">Subtotal</p>
        </div>

        <div>
          {cartItems.length === 0 ? (
            <p>Savatcha bosh</p>
          ) : (
            <div className="flex flex-col gap-4">
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between gap-2"
                >
                  <div className="flex gap-2">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-[70px] h-[70px]"
                    />
                    <div className="flex flex-col">
                      <p className="font-medium max-w-[114px]">{item.title}</p>
                      <p className="text-[14px] text-[#727272]">
                        Sku: {item.sku}
                      </p>
                    </div>
                  </div>
                  <p className="text-[14px] text-[#727272]">x{item.stock}</p>
                  <p className="text-[#46A358] text-[18px] font-bold">
                    ${item.price}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div>
          <div className="flex items-center gap-1 text-[14px] font-medium justify-end">
            <p>Have a coupon code? </p>
            <Link to={"#"} className="text-[#46A358]">
              Click here
            </Link>
          </div>

          <div className="flex flex-col gap-[15px]">
            <div className="flex items-center justify-between">
              <p>Subtotal</p>
              <p className="text-[15px] font-medium leading-[16px]">
                $2,683.00
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p>Coupon Discount</p>
              <p className="text-[15px] font-medium leading-[16px]">
                (-) 00.00
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p>Shipping</p>
              <p className="text-[15px] font-medium leading-[16px]">$16.00</p>
            </div>
            <div className="flex justify-end border-b border-b-[#46A35880] pb-2">
              <p className="text-[#46A358] text-[12px]">View shipping charge</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="font-bold">Total</p>
              <p className="text-[#46A358] text-[18px] font-bold">$2,699.00</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[15px]">
          <p className="font-bold text-[17px] mt-5 mb-3">Payment Method</p>

          {[
            {
              id: "card",
              label: (
                <img src={payment} alt="" className="w-[224px] h-[26px]" />
              ),
            },
            { id: "bank", label: "Direct bank transfer" },
            { id: "cash", label: "Cash on delivery" },
          ].map((method) => (
            <div
              key={method.id}
              onClick={() => setSelectedPayment(method.id)}
              className={`flex items-center gap-[10px] border w-full md:w-[321px] px-3 py-2 rounded cursor-pointer ${
                selectedPayment === method.id
                  ? "border-[#46A358]"
                  : "border-[#EAEAEA]"
              }`}
            >
              {selectedPayment === method.id ? (
                <FaRegCircleDot className="text-[#46A358]" />
              ) : (
                <FaRegCircle className="text-[#999]" />
              )}
              <div>{method.label}</div>
            </div>
          ))}
        </div>
        <button className="btn">Place Order</button>
      </div>
    </div>
  );
};

export default App;
