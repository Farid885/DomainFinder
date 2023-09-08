import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
// import { Button } from 'reactstrap';
import { Button } from "react-bootstrap";
import { useState } from "react";
import { DeleteData, EditData, AddData } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
function Admin() {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState(undefined);

  const dispatch = useDispatch();
  const myProducts = useSelector((state) => state.myProducts);

  const SaveData = () => {
if(title.trim() !== '' && description.trim() !=='' && url.trim() !== '' ){
  if (!id) {
    dispatch(
      AddData({
        title,
        description,
        url,
      })
    );
  } else {
    dispatch(
      EditData({
        id,
        title,
        description,
        url,
      })
    );
  }
}
    cancelFunc();
  };

  const cancelFunc = () => {
    setTitle("");
    setDescription("");
    setUrl("");
    setId(undefined);
  };
  const setEditing = (id ) => {
    let editedData = myProducts.find((p)=>{
        return p.id === id
    })

    setTitle(editedData.title)
    setDescription(editedData.description)
    setUrl(editedData.url)
    setId(editedData.id)
  };

  return (
    <div>
      <div className="container pt-5 border mt-5  ">
        <div className="row">
          <div className="col-6">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Url</th>
                </tr>
              </thead>
              <tbody>
                {myProducts.map((product, index) => {
                  return (
                    <tr key={product.id}>
                      <th>{index + 1}</th>
                      <th>{product.title}</th>
                      <th>{product.description}</th>
                      <th>{product.url}</th>
                      <th>
                        {
                          <Button
                            variant="danger"
                            onClick={() => {
                              dispatch(DeleteData(product.id));
                            }}
                          >
                            Delete
                          </Button>
                        }
                      </th>
                      <th>
                        {
                          <Button
                            onClick={() => {
                              setEditing(product.id);
                            }}
                          >
                            Edit
                          </Button>
                        }
                      </th>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
          <div className="col-6">
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  value={title}
                  type="text"
                  placeholder="Title"
                />
              </Form.Group>
            </Form>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  value={description}
                  type="text"
                  placeholder="Description"
                />
              </Form.Group>
            </Form>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Url</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    setUrl(e.target.value);
                  }}
                  value={url}
                  type="text"
                  placeholder="Url"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Button onClick={SaveData} variant="primary">
                  {" "}
                  Save
                </Button>
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
