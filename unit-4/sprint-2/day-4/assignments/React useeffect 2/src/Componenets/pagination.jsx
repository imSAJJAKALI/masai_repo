function createArrayOfSize(n) {
  return new Array(n).fill(0);
}

function Pagination() {
  let pages = createArrayOfSize(10).map((a) => {
    <button data-testid="page-btn">number</button>;
  });
  return <div>{pages}</div>;
}

export default Pagination;
