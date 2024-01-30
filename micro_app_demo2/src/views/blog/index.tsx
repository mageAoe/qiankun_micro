import { Link } from 'react-router-dom';


function Blog() {
    return (
      <>
        <div>
          <h2>Welcome to the Blog Page</h2>
          <Link to="/micro-app/micro-app-demo2/about">Go to About</Link>
        </div>
      </>
    )
  }
  
  export default Blog