import "./style.css";



function App() {
  return (
    <>
    <header className="header">
      <div className="logo">
        <img src="/logo.png" alt="logo" />
        <h1>Today I Learned</h1>
      </div>
      <button className="btn btn-large btn-open">Share a Fact</button>
    </header>
 

  <CategoryFilter/>
  </>
   );
}

export default App;

function CategoryFilter(){

  return(<aside>Software developer Engineer @Google LLC</aside>);
}
