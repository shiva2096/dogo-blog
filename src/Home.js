import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    // Use Effect hook runs every time the page is rendered
    // Use effect will only run when the dependency (name) changes
    // That is it will run when the page loads and then only when name chages
    useEffect(() => {
        // setting a 1sec delay to see the Loading message
        setTimeout(()=> {
            fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setBlogs(data)
                setIsPending(false)
            });
        }, 1000)

    }, []);
    
    //blogs added with <BlogList because it will only render after blogs have some data. 
    return (
        <div className="home">      
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!!" /> }
        </div>
      );
}
 

export default Home;