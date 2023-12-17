const SearchResults = (props) => {
  console.log(props)

      return (
          <table >
            <thead>
               <tr>
                <td>DEPARTURE</td>
                <td>DURATION</td>
                <td>ARRIVEL</td>
                <td>PRICE</td>
               </tr>
              </thead>
            <tbody data-testid="flight-results">{
          //  map through the results and display as rows
          props.data.map((e)=><>
          <tr>
            <td>{e.departure}</td>
            <td>{e.duration}</td>
            <td>{e.arrival}</td>
            <td>{e.price}</td>
          </tr>
          </>)
          
            }</tbody>
          </table>
      );
    
  };
  export default SearchResults;
  