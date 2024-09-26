import { Button, Form, Input, Flex } from "antd"; 
import { useState } from "react";

function Todo() {
  const [myTodo, setMyTodo] = useState([]);
  const [showTodo, setShowTodo] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [form] = Form.useForm(); 

  const onFinish = (values) => { 
    if (editIndex !== null) {
      const updatedTodo = [...myTodo];
      updatedTodo[editIndex] = values; 
      setMyTodo(updatedTodo);
      setEditIndex(null); 
    } else {
      const updatedTodo = [...myTodo, values];
      setMyTodo(updatedTodo);
    }

    setShowTodo(true);
    form.resetFields();
  };

  const handleDelete = (index) => {
    const remainingTodo = myTodo.filter((_, i) => i !== index);
    setMyTodo(remainingTodo);
  };

  const handleEdit = (index, title, details) => {
    setEditIndex(index);  
    form.setFieldsValue({ title, details });  
  };

  return (
    <>
      <div className="container m-4 text-primary">
        <Flex vertical>
          <h2>My Todo List</h2>
          <Form
            form={form} 
            className="p-3"
            name="normal_login"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              label="Title"
              name="title"
              rules={[{ required: true, message: "Todo title is required" }]}
            >
              <Input placeholder="Enter Title" />
            </Form.Item>

            <Form.Item
              label="Details"
              name="details"
              rules={[{ required: true, message: "Todo details is required" }]}
            >
              <Input placeholder="Enter Details" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                {editIndex !== null ? "Update" : "Submit"}
              </Button>
            </Form.Item>
          </Form>
        </Flex>
        
        <div className="row">
          {showTodo && myTodo.map((row, i) => (
            <div key={i} className="m-2 col-sm-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{row.title}</h5>
                  <p className="card-text">{row.details}</p>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => {
                      if (window.confirm(`Do you really want to delete the ${row.title} Todo?`)) {
                        handleDelete(i);
                      }
                    }}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      if (window.confirm(`Do you really want to edit the ${row.title} Todo?`)) {
                        handleEdit(i, row.title, row.details);
                      }
                    }}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Todo;
