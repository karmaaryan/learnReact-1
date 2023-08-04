import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

const Greeting = () => { return <div className='greeting'>
        <Heading/>
        <Contatiner/>
    </div>
}

const Heading =()=>{ return <div className='heading'>
    <h1> Amazon Best Sellers </h1>
</div>
}

// const firstBook = {
//     imgAlt:"book1",
//     imgSrc: "https://m.media-amazon.com/images/I/71YjqWYLt4L.jpg",
//     name: "World's greatest stproes",
//     author: "by Collection books"
// };
// const secondBook = {
//     imgAlt:"Book2" ,
//     imgSrc:"https://m.media-amazon.com/images/I/81lZ-9E4F-S.jpg",
//     name:"The Diary of a Young Girl",
//     author:"Anne Frank"
// };
// const thirdBook = {
//     imgAlt:"Book3",
//     imgSrc:"https://m.media-amazon.com/images/I/71ZGznGgRDL.jpg",
//     name:"Bhagavad Gita",
//     author:"Anonymous"
// };

// Using array list except objects

const books = [
    {
        imgAlt:"book1",
        imgSrc: "https://m.media-amazon.com/images/I/71YjqWYLt4L.jpg",
        name: "World's greatest stproes",
        author: "by Collection books",
        id:1,
    },{
        imgAlt:"Book2" ,
        imgSrc:"https://m.media-amazon.com/images/I/81lZ-9E4F-S.jpg",
        name:"The Diary of a Young Girl",
        author:"Anne Frank",
        id:2,
    },{
        imgAlt:"Book3",
        imgSrc:"https://m.media-amazon.com/images/I/71ZGznGgRDL.jpg",
        name:"Bhagavad Gita",
        author:"Anonymous",
        id:3,
    }
]

// const returnBook = books.map(()=>{
//     const {imgAlt,imgSrc, name, author} = books;
//     return <Books imgAlt={imgAlt} imgSrc={imgSrc} name={name} author={author}/>
    // return <Books imgAlt={books.imgAlt} imgSrc={books.imgSrc} name={books.name} author={books.author} />
// })



const Box =(props)=>{
    const {imgSrc,imgAlt, name, author, id} = props;
    return <div className='box'>
    <img alt={imgAlt} src={imgSrc}/>
    <h3>{name}</h3>
    <h6 style={h6Styles}>{author}</h6>
    {/* <div className='child'>
    {children}
    </div> */}
</div>
}

const returnBook = books.map((book)=>{
    // const {imgSrc,imgAlt, name, author ,id} = book;
    // return <Box imgAlt={imgAlt} imgSrc={imgSrc} name={name} author={author} key={id} />
    return <Box {...book} key={book.id} />

})

const Contatiner=()=>{ return <div className='container'>
        {/* <Box 
        imgAlt={firstBook.imgAlt} 
        imgSrc={firstBook.imgSrc} 
        name={firstBook.name} 
        author={firstBook.author}
        />
        
        <Box 
        imgAlt={secondBook.imgAlt}
        imgSrc={secondBook.imgSrc} 
        name={secondBook.name} 
        author={secondBook.author}
        >
        <p>This is rendering as children prop</p>
        </Box>
        
        <Box 
        imgAlt={thirdBook.imgAlt}
        imgSrc={thirdBook.imgSrc} 
        name={thirdBook.name} 
        author={thirdBook.author}
        /> */}

        {returnBook}
</div>
}

const h6Styles= {
    marginTop:"0.5rem",
    textDecoration:"underline" 
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting/>);