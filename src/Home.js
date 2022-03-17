import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])
    
    // blogs.map iterates through each blog in blogs
    // key is mandatory, this way react know about which element is being changed
    // then we build a template that applies for each element in loop
    return (
        <div className="home">      
            <BlogList blogs={blogs} title="All Blogs!!"/>
            <BlogList blogs={blogs.filter((blog) => blog.author==='mario')} title="Mario's Blogs" />
        </div>
      );
}
 
export default Home;