function Pagination(props) {
  const prev = (
    <button
      data-testid="prev-page"
      disabled={props.page==1}
      onClick={()=>props.prevb()}
    >
      Prev
    </button>
  );
  const currentPage = <button data-testid="current-page">{props.page}</button>;
  const next = (
    <button
      data-testid="next-page"
      disabled={props.page==10}
      onClick={()=>props.nextb()}
    >
      Next
    </button>
  );
  return (
  <div data-testid="page-container">
      <div>
      {prev}
      {currentPage}
      {next}
      </div>
      <div>
        Total Pages: <b data-testid="total-pages">10</b>
      </div>
    </div>
  );
}

export default Pagination;
