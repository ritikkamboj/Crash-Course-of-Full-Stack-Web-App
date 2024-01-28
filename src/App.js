import { useState } from 'react';
import './style.css';

const CATEGORIES = [
  { name: 'technology', color: '#3b82f6' },
  { name: 'science', color: '#16a34a' },
  { name: 'finance', color: '#ef4444' },
  { name: 'society', color: '#eab308' },
  { name: 'entertainment', color: '#db2777' },
  { name: 'health', color: '#14b8a6' },
  { name: 'history', color: '#f97316' },
  { name: 'news', color: '#8b5cf6' },
];

const initialFacts = [
  {
    id: 1,
    text: 'React is being developed by Meta (formerly facebook)',
    source: 'https://opensource.fb.com/',
    category: 'technology',
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: 'Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%',
    source:
      'https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids',
    category: 'society',
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: 'Lisbon is the capital of Portugal',
    source: 'https://en.wikipedia.org/wiki/Lisbon',
    category: 'society',
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

function App() {
  const [formShow, setFormShow] = useState(false);
  const [facts, setFacts] = useState(initialFacts);

  // console.log('jai maata di ');
  // console.log(
  //   CATEGORIES.find((cat) => cat.name === initialFacts.category).color
  // );
  // console.log(CATEGORIES.find((cat) => cat.name === 'finance').color);
  // console.log(initialFacts.id);
  // console.log(initialFacts[0].category);

  return (
    <>
      {/* <Counter /> */}
      <Header setFormShow={setFormShow} formShow={formShow} />
      {formShow ? (
        <NewFactForm setFacts={setFacts} setFormShow={setFormShow} />
      ) : null}
      <main className="main">
        <CategoryFilter />
        <FactList facts={facts} />
      </main>
    </>
  );

  function Counter() {
    const [count, setCount] = useState(0);
    console.log(count);
    return (
      <>
        <span style={{ fontSize: '42px' }}>{count}</span>
        <button
          className="btn btn-large"
          onClick={() => setCount((c) => c + 1)}
        >
          +1
        </button>
      </>
    );
  }

  function Header({ setFormShow, formShow }) {
    return (
      <header className="header">
        <div className="logo">
          <img
            src="logo.png"
            height="68"
            width="68"
            alt="Today I Learned Logo"
          />
          <h1>Today I Learned</h1>
        </div>

        <button
          className="btn btn-large btn-open"
          onClick={() => setFormShow((show) => !show)}
        >
          {formShow ? 'close' : 'share a fact'}
        </button>
      </header>
    );
  }
  function isValidHttpUrl(string) {
    let url;

    try {
      url = new URL(string);
    } catch (_) {
      return false;
    }

    return url.protocol === 'http:' || url.protocol === 'https:';
  }
  function NewFactForm({ setFormShow }) {
    const [text, setText] = useState('');
    const [source, setSource] = useState('');
    const [category, setCategory] = useState('');

    const textlength = text.length;

    function submitEvent(e) {
      e.preventDefault();
      console.log(text, source, category);

      // steps which we have to follow

      //  1. we have to check the data , if its valid or not

      if (text) console.log('text hai '); // point leaned is that empty string considered as falsy valye here
      // creating the consfition nin whcih we need theree of the cale s
      // here we have to check the source is a valid linj or not
      if (text && isValidHttpUrl(source) && category)
        var newFact = {
          id: Math.round(Math.random() * 1000),
          text: text,
          source: source,
          category: category,
          votesInteresting: 0,
          votesMindblowing: 0,
          votesFalse: 0,
          createdIn: new Date().getFullYear(),
        };
      else {
        alert('please enter correct data ');
      }
      // console.log('Radhe Radhe ');
      //  we have to make it in  orioer object format
      //  2. if it valid then we have to enter that in the Uint16Array
      //  3. make the fields in form empty
      //  4. and then we have to close the form also .App

      setFacts([newFact, ...facts]);
      setText('');
      setSource('');
      setCategory('');

      setFormShow(false);
      //  we can access facts here in this function also
    }
    return (
      <form className="fact-form" onSubmit={submitEvent}>
        {' '}
        <input
          type="text"
          placeholder="Share a fact with the world..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <span>{200 - textlength}</span>
        <input
          type="text"
          placeholder="Trustworthy source..."
          value={source}
          onChange={(e) => setSource(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Choose category:</option>
          {/* <option value="technology">Technology</option>
          <option value="science">Science</option>
          <option value="finance">Finance</option> */}
          {CATEGORIES.map((cat) => (
            <option key={cat.name} value={cat.name}>
              {cat.name.toUpperCase()}
            </option>
          ))}
        </select>
        <button className="btn btn-large">Post</button>
      </form>
    );
  }
  function CategoryFilter() {
    const tab1 = CATEGORIES;
    return (
      <aside>
        <ul>
          <li className="category">
            <button className="btn btn-all-categories">All</button>
          </li>
          {tab1.map((item) => (
            <li key={item.name} className="category">
              <button
                className="btn btn-category"
                style={{ backgroundColor: item.color }}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </aside>
    );
  }

  // function Tab()
  // {
  //   return()
  // }
  function FactList({ facts }) {
    // console.log(facts.category);

    return (
      <section>
        <ul className="facts-list">
          {facts.map((fact) => (
            <Fact key={fact.id} fact={fact} />
          ))}
        </ul>
        <p>Page feteched {facts.length} data. Add your own !</p>
      </section>
    );
  }

  function Fact({ fact }) {
    return (
      <li className="fact">
        <p>
          {fact.text}
          <a className="source" href={fact.source} target="_blank">
            (Source)
          </a>
        </p>
        <span
          className="tag"
          style={{
            backgroundColor: CATEGORIES.find(
              (cat) => cat.name === fact.category
            ).color,
          }}
        >
          {fact.category}
        </span>
        <div className="vote-buttons">
          <button>👍 {fact.votesInteresting} </button>
          <button>🤯{fact.votesMindblowing} </button>
          <button>⛔️ {fact.votesFalse}</button>
        </div>
      </li>
    );
  }
}

export default App;
