// by using useParams from react-router-dom
// we can fetch parameters as a part of the link
// like here we are using /blogs/id

// After that we are using our custom hook to fetch data for that id


import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
   
    const {id} = useParams();
    const {data:blog, isPending, error } = useFetch('http://localhost:8000/blogs/'+ id);

    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                </article>
            )}
            
        </div>
      );
}
 
export default BlogDetails
