import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    
    // decoupled data fetching mechanism to useFetch custom hook
    const {data:blogs, isPending, error } = useFetch('http://localhost:8000/blogs');
    
    //blogs added with <BlogList because it will only render after blogs have some data. 
    return (
        <div className="home">      
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!!" /> }
        </div>
      );
}
 

export default Home;