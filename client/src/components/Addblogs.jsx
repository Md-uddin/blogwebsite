import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Card, TextField, Button, jssPreset } from "@material-ui/core";
import { Editor } from "@tinymce/tinymce-react";
import "../styles/Addpost.css";
const Addblogs = (props) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = (e) => {
    if (!title || !author || !description) {
      e.preventDefault();
      alert("plz fill all the details");
    } else {
      alert("your data is saved");
      props.addPost(title, author, description);

      setTitle("");
      setDescription("");
      setAuthor("");
    }
  };

  return (
    <div className="addpost">
      <Card className="addpost-card">
       
          <TextField
            id="outlined-basic"
            className="title-input"
            label="Title"
            variant="outlined"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />

          <TextField
            className="Author-input"
            id="outlined-basic"
            label="Author"
            variant="outlined"
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          />

  

          <textarea
            name=""
            id=""
            cols="30"
            rows="8"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
           
            }}
          ></textarea>

          <Link to="/">
            <Button
              variant="contained"
              color="primary"
              type="submit"
              onClick={onSubmit}
              className="s-btn"
            >
              Submit
            </Button>
          </Link>
      
      </Card>
    </div>
  );
};

export default Addblogs;
