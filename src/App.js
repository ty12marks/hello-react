import logo from './logo.svg';
import './App.css';

const magazines = [
  { id: 1, title: 'Architectural Digest', theme: 'architecture', isAvailable: true},
  { id: 2, title: 'Dwell', theme: 'architecture', isAvailable: true},
  { id: 3, title: 'Communication Arts', Theme: 'design', isAvailable: false},
];

function ZineRack() {
  const ListZines = magazines.map(zine =>
    <li 
    key={zine.id}
      style={{
        color: zine.isAvailable ? 'green' : 'red'
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
  image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt1355642%2F&psig=AOvVaw2TFjkR04VUkAeipUrmJG1g&ust=1712113666643000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOii3cjGooUDFQAAAAAdAAAAABAE',
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
