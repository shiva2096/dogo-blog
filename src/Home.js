import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])
    
    // Another state variable
    const [name, setName] = useState("mario");

    // Function that filters based on id 
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);  // value inside blogs is now updated by newBlogs
    }

    // Use Effect hook runs every time the page is rendered
    // Use effect will only run when the dependency (name) changes
    // That is it will run when the page loads and then only when name chages
    useEffect(() => {
        console.log("use Effect hook ran");
        console.log(name);
    }, [name]);

    return (
        <div className="home">      
            <BlogList blogs={blogs} title="All Blogs!!" handleDelete={handleDelete}/>
            <BlogList blogs={blogs.filter((blog) => blog.author==='mario')} title="Mario's Blogs" handleDelete={handleDelete}/>
            <button onClick={() => setName("Shivansh")}>change name</button>
            <p>{name}</p>
        </div>
      );
}
 

export default Home;