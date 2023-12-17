const Pagination = ({page,setPage,pages}) => {
 
 const allPage=new Array(pages).fill(0)
 for(let i=1; i<=pages; i++){
  allPage[i-1]=i;
 }
 return <div className="pagination_wrapper">
      {allPage.map((el,index)=><button key ={index} style={{color:"white",backgroundColor:el==page?"red":"cyan"}} onClick={()=>setPage(el)}disabled={page==el}>
        {el}
      </button>)}
  </div>;
};

export default Pagination;
