import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    // Use Effect hook runs every time the page is rendered
    // Use effect will only run when the dependency (name) changes
    // That is it will run when the page loads and then only when name chages
    useEffect(() => {
        // setting a 1sec delay to see the Loading message
        setTimeout(()=> {
            fetch('http://localhost:8000/blogs')
            .then(res => {
                if(!res.ok){
                    throw Error("Colud not fetch from the resource!!");
                    // this error is catched at the end in catch block below 
                }
                return res.json()
            })
            .then(data => {
                setBlogs(data)
                setIsPending(false)  // This will hide the loading message
                setError(null)       // This will set the error variable to null
            })
            .catch(err => {
                setIsPending(false)
                setError(err.message)
            });
        }, 1000)

    }, []);
    
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