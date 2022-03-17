import { useState } from "react";

const Home = () => {
    
    // using useState hook, we can change the value of a
    // variable in run time and it will be reactive, meaning that it will 
    // get rendered again where ever it is being used
    const [myName, setMyName] = useState("mario")

    const handelClick = () => {
        setMyName("Shivansh")
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{myName}</p>
            <button onClick={handelClick}>Click me</button>
        </div>
      );
}
 
export default Home;