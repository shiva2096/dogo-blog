const Home = () => {
    
    const handelClick = (e) => {
        console.log("Hello ninjas", e)
    }
    
    const handelClickAgain = (name, e) => {
        console.log("Hello " + name , e.target)
    }
    

    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handelClick}>Click me</button>
            <button onClick={ (e) => handelClickAgain("mario",e)}>Click me Again</button>
        </div>
      );
}
 
export default Home;