import React from 'react';
import { Routes, Route } from "react-router-dom";
import Posts from "./component/posts/Posts";
import Poststopige from "./component/posts/Poststopige";
import Post from "./component/post/Post";
import Postssort from "./component/postsSort/Postssort";
import Postssortpage from "./component/postsSort/Postssortpage";
import Editpost from "./component/edit/Editpost";
import Addpost from "./component/crieit/Addpost";
import Header from "./component/header/Header";
import classes from "./index.module.css";
function App() {

  return (
    <>
      <div className={classes.contentApp}>
        <Header />
        <Routes>
          <Route index="/" element={<Posts />} />
          <Route path="/page/:page" element={<Poststopige />} />
          <Route path="/addpost" element={<Addpost />} />
          <Route path="/get/post/:id" element={<Post />} />
          <Route path="/edit/:id" element={<Editpost />} />
          <Route path="/teg/:teg" element={<Postssort url={'teg'} />} />
          <Route path="/teg/:teg/page/:page" element={<Postssortpage url={'teg'} />} />
          <Route path="/year/:teg" element={<Postssort url={'year'} />} />
          <Route path="/year/:teg/page/:page" element={<Postssortpage url={'year'} />} />
          <Route path="/genre/:teg" element={<Postssort url={'genre'} />} />
          <Route path="/genre/:teg/page/:page" element={<Postssortpage url={'genre'} />} />
        </Routes>
      </div>

    </>
  );
}

export default App;
