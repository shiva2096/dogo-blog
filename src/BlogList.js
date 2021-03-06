// or const BlogList = ({blogs, title})
// using props to fetch data
// BlogList component can be used to display lists

import { Link } from "react-router-dom";

// in our templated format
const BlogList = ({blogs, title}) => {

    
    // blogs.map iterates through each blog in blogs
    // key is mandatory, this way react know about which element is being changed
    // then we build a template that applies for each element in loop

    // Adding a Link to each blog page
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map(blog => (
                <div className="blog-preview" key={blog.id} >
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{ blog.title }</h2>
                        <p>Written by { blog.author }</p>
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList