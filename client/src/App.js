import Blogpost from './components/Blogpost.js';
import { useState } from 'react';
import { BrowserRouter as Router,Link,Redirect,Route } from 'react-router-dom';
import './App.css';
import axios from 'axios'
import Navbar from './components/Navbar.jsx';
import Addblogs from './components/Addblogs.jsx';
import Blogposts from './jsons/Blogpost.js';
import postDetails from './components/postDetails.js';
import Editblog from './components/Editblog.js';
function App() {
  let allpost;
  const [posts, setPost] = useState(Blogposts)

// getting post from database 
  const fetch = async () => {

    allpost = await axios.get("http://localhost:5000/").
      then((res) => {
      
        let resp = res.data;

       setPost(resp.allPost)
        
      }
    )
      .catch((err)=>{console.log(err)})
    
      
    
  }
  

  

  //deleting function
  const onDelete = (elm) => {
 
    let title = elm.title;
    console.log(title)
    axios.delete(`http://localhost:5000/${ title } `)
      .then((res) => {
      console.log(res)
      })
      .catch(err => console.log(err))
      alert("deleted succesfully")
  }

  
    // adding posts
  const addPost =(title,author,description) => {
       
   let mypost = {
      title:title,
      author:author,
      description:description
   }
    axios.post('http://localhost:5000/addpost', mypost)
      .then(res => console.log(res))
    .catch(err => console.log(err))
    

  }
  //Editing posts 
  const editBlog = (el) => {
    setTimeout(() => {
      let blog = el;
      axios.delete(`http://localhost:5000/${ el.title } `)
        .then((res) => {
        console.log(res)
        })
        .catch(err => console.log(err))
    }, 3000);
 
    
    
  }
  


  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}
        <Route path="/" exact ><Navbar /></Route>
        
        <Route path="/" exact
          render={() => 
            <Blogpost posts={posts} onDelete={onDelete} fetch={fetch} editBlog={editBlog} />
             }></Route>
      
        {/* <Addblogs addPost={addPost} /> */}
        <Route path="/addpost" exact
          render={() => 
            <Addblogs addPost={addPost} />
             }></Route>
        {/* on edit */}
      
      <Route
          path="/post/:id" component={postDetails} />
        
         {/* <Route
          path="/editpost/:id"  render={() => 
            <Blogedit  />
             }></Route> */}

        
<Route
          path="/editposts/:id" component={Editblog} />
      </Router>
      
      
    </div>
  );
}

export default App;
