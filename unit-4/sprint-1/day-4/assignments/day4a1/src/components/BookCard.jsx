export default function BookCard(props) {
  return (
    <div data-testid='book-card'>
        <img src={props.src} alt={props.title} />
        <b><div data-testid='book-card-title'>{props.title}<span>({props.year})</span></div></b>
        <div data-testid='book-card-author'>{props.author}</div>
        <div data-testid='book-card-price'>{props.price}</div>
    </div>
  )
}

