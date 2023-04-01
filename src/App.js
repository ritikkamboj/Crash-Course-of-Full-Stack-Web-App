import "./style.css";



function App() {
  return (
    // header
    <>
    <header className="header">
      <div className="logo">
        <img src="/logo.png" alt="logo" />
        <h1>Today I Learned</h1>
      </div>
      <button className="btn btn-large btn-open">Share a Fact</button>
    </header>
 
<NewFactForm/>

<main class="main">
<CategoryFilter/>
<FactList/>
</main>
  </>
   );
}

export default App;

function NewFactForm(){

  return(<form className="fact-form">Fact-Form</form>)
}

function CategoryFilter(){

  return(<aside> Aashish Kumar Software developer Engineer @Google LLC</aside>);

}

function FactList(){

  return(<>
  <section>Fact-List</section>
  <CategoryFilter/>
  </>
  )
}
