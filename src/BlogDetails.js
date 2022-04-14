// by using useParams from react-router-dom
// we can fetch parameters as a part of the link
// like here we are using /blogs/id

import { useParams } from "react-router-dom";

const BlogDetails = () => {
   
    const {id} = useParams();

    return (
        <div className="blog-details">
            <h2>Blog Details - {id}</h2>
        </div>
      );
}
 
export default BlogDetails
