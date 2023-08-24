export const Box = ({imgAlt, imgSrc, name, author, id, getBook, index})=>{
    const bookRank = index+1;
    return <div className='box'>
    <img alt={imgAlt} src={imgSrc}/>
    <h3>{name}</h3>
    <h6 style={h6Styles}>{author}</h6>
    <button onClick={()=>{getBook(id)}}>button</button>
    <span className="rank">{"#" + bookRank}</span>
    {/* <div className='child'>
    {children}
    </div> */}
</div>
}

const h6Styles= {
    marginTop:"0.5rem",
    textDecoration:"underline" 
}
