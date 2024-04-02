import logo from './logo.svg';
import './App.css';

const magazines = [
  { id: 1, title: 'Architectural Digest', theme: 'architecture', isAvailable: true},
  { id: 2, title: 'Dwell', theme: 'architecture', isAvailable: true},
  { id: 3, title: 'Communication Arts', Theme: 'design', isAvailable: false},
];

function ZineRack() {
const ListZines = magazines.map(zinc =>
  <li
  key={ZineRack.id}
  style={{
    color: zine.isAvailable? 'green' : 'red'
  }}
  >
    {zine.title}
    </li>
  );
  return (
    <ul>{ListZines}</ul>
  )
}
const book = {
  title: 'Full Metal alchemist',
  author: 'Hiromu Arakawa',
  published: '2001-2010',
  image: 'https://images-na.ssl-images-amazon.com/images/I/51Q7fzj6eRL._SX331_BO1,204,203,200_.jpg',
  width: '100',
  height: '150'
};

function Bookshelf() {
  return (
    <div>
      <h2>{book.title} ({book.published})</h2>
      <p>{book.author}</p>
      <img
      className="bookcover"
      src={book.image}
      alt={book.title + 'cover'}
      style={{
        width: book.width,
        height: book.height
      }}
      />
    </div>
  )
}
function MagicButton() {
  return (
    <> 
      <h3>This is a Magic button</h3>
    <button>Magic</button>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ZineRack />
        <Bookshelf />
        <MagicButton />
      </header>
     </div>
  );
}

export default App;
