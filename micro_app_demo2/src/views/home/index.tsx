import { Link } from 'react-router-dom';

function App() {
    return (
      <>
        <div>
          <h2>Welcome to the Home Page</h2>
          <Link to="/micro-app/micro-app-demo2/blog">Go to Blog</Link>
        </div>
      </>
    )
  }
  
  export default App