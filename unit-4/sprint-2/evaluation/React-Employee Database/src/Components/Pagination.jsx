// function createArrayOfSize(n) {
//   return new Array(n).fill(0);
// }

// function Pagination() {
//   let pages = createArrayOfSize().map((a, i) => {
//     return <button data-testid="page-btn"></button>;
//   });
//   return <div></div>;
// }
const Pagination=({num,hndl})=>{

  return <button onClick={()=>hndl()}>{num}</button>
}

export default Pagination;
