import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState('Enter blog Title');
  const [body, setBody] = useState('Enter blog content Here');
  const [author, setAuthor] = useState('mario');
  const [isPending, setIsPending] = useState(false);

  // using handle submit as a function to fire a post request
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);

    fetch('http://localhost:8000/blogs/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('new blog added');
      setIsPending(false);
    })
  }


  // Created a form with values in field changing as you type

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onClick={(e) => setTitle('')}
          onChange={(e) => setTitle(e.target.value)}
        />
        
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onClick={(e) => setBody('')}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        { !isPending && <button>Add Blog</button>}
        { isPending && <button disabled>Adding blog...</button>}
      </form>
    </div>
  );
}
 
export default Create;

