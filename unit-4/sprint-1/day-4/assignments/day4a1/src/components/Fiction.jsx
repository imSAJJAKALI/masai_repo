import FictionData from '../fiction.json'
import BookCard from './BookCard';
console.log('its working')
export default function Fiction() {
  console.log(FictionData)
 

  return (
    <div data-testid='books-fiction'>
      <h1 data-testid='books-container-title'>{'Fictional Books'}</h1>

      <div className="books-container" style={{display:'grid'
     ,gridTemplateColumns:'repeat(3,1fr)'
    }}>
        {FictionData.map((e,i)=><BookCard 
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
