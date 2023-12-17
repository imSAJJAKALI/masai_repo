const Card=({data=[]})=>{
    return (
        <div data-testid="data-list">
            {data.map((item)=>{
                return(
                    <div data-testid="superhero-list">
                        {/*All the content of the card has to be added over here*/}
                    </div>
                )
            })}
        </div>
    )
}

export default Card;
