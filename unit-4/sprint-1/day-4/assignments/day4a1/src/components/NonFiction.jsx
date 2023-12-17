import NonFictionData from '../nonfiction.json';
import BookCard from './BookCard';

export default function NonFiction() {
  return (
    <div data-testid='books-nonfiction'>
      <h1 data-testid='books-container-title'>{'Non-Fiction Books'}</h1>

      <div className="books-container" style={{display:'grid',
    gridTemplateColumns:'repeat(3,1fr)'
    }}>
       {NonFictionData.map((e,i)=><BookCard 
        src={e.img}
        title={e.title}
        year={e.year}
        author={e.author}
        price={e.price}
        />)}
      </div>
    </div>
  );
}
