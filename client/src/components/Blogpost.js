import React from "react";
import Card from "@material-ui/core/Card";
import "../styles/blogpost.css";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Blogpost = (props) => {
  const load = () => {
    props.fetch();
  };
  load();
  return (
    <div className="blogposts">
      {props.posts.map((el) => {
        return (
          <Card variant="outlined" className="card">
            <div className="title">
              {el.title}
              <div className="btns">
                <Link
                  to={{
                    pathname: `/editposts/${el.id}`,
                    state: { post: el },
                  }}
                >
                  <EditIcon
                    fontSize="small"
                    onClick={() => {
                      props.editBlog(el);
                    }}
                  />
                </Link>
                <Link
                  to={{
                    pathname: `/post/${el.id}`,
                    state: { post: el },
                  }}
                >
                  <a href="">view</a>
                </Link>
                <DeleteIcon
                  fontSize="small"
                  onClick={(post) => {
                    props.onDelete(el);
                  }}
                />
              </div>
            </div>
            <div className="description">{el.description}</div>
            <div className="author"> Author:- {el.author}</div>
          </Card>
        );
      })}
    </div>
  );
};

export default Blogpost;
