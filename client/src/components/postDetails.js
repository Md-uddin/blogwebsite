import { Card } from '@material-ui/core';
import '../styles/postDetails.css'
import React from 'react'


const postDetails = (props) => {

    const { title, description, author } = props.location.state.post;
    return (
        <div className='post-details'>
            <Card className='blog-details'>
                <div className="ftitle"><h1>{title}</h1></div>
                <div className="fauthor">{author}</div>
                <div className="fdescription">{description}</div>
          </Card>
        </div>
    )
}

export default postDetails
