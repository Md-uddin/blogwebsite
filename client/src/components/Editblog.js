import { Card,TextField,Button } from '@material-ui/core';
import '../styles/postDetails.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import React from 'react'
import '../styles/editblog.css'

const Editblog = (props) => {
  
    const { title, description, author } = props.location.state.post;
    const [utitle, setutitle] = useState("");
  const [uauthor, setuauthor] = useState("");
  const [udescription, setudescription] = useState("");

   
  const onresubmit = (e) => {
      if (!utitle || !uauthor || !udescription ) {
          e.preventDefault();
          alert("plz fill all the details")
      }
      else {
          alert("your data is saved");
          let mypost = {
            title:title,
            author:author,
            description:description
         }
          axios.post('http://localhost:5000/addpost', mypost)
            .then(res => console.log(res))
          .catch(err => console.log(err))
          

          setutitle("");
          setudescription("");
          setuauthor("");
      }
  };
    return (
        <div className='post-edit'>
            <Card className='blog-edit'>

                <TextField
                    className="title-edit"
          label="Title"
                    id="outlined-size-normal"
                    // value={utitle}+
          defaultValue={title}
                    variant="outlined"
                    
                    onChange={(e) => {
                    
                        setutitle(e.target.value);
                      }} />
                <TextField
                    className='author-edit'
          label="author"
          id="outlined-size-normal"
          defaultValue={author}
                    variant="outlined"
                
                    onChange={(e) => {
                        setuauthor(e.target.value);
                      }}/>
                  <TextField
          label="description"
          id="outlined-size-normal"
          defaultValue={description}
                    variant="outlined"
                    className='description-edit'
                    onChange={(e) => {
                        setudescription(e.target.value);
                    }} />
                <Link to="/">
                <Button variant="contained" color="primary" onClick={(e) => {
                    onresubmit(e)
                }} className="sv-btn">
  Save
                    </Button>
                    </Link>
            </Card>
            
        </div>
    )
}

export default Editblog
