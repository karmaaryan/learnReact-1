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

const firstBook = {
    imgAlt:"book1",
    imgSrc: "https://m.media-amazon.com/images/I/71YjqWYLt4L.jpg",
    name: "World's greatest stproes",
    author: "by Collection books"
};
const secondBook = {
    imgAlt:"Book2" ,
    imgSrc:"https://m.media-amazon.com/images/I/81lZ-9E4F-S.jpg",
    name:"The Diary of a Young Girl",
    author:"Anne Frank"
};
const thirdBook = {
    imgAlt:"Book3",
    imgSrc:"https://m.media-amazon.com/images/I/71ZGznGgRDL.jpg",
    name:"Bhagavad Gita",
    author:"Anonymous"
};

const Contatiner=()=>{ return <div className='container'>
        <Box 
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
        />
</div>
}

const Box =({imgAlt, imgSrc, name, author, children})=>{
    return <div className='box'>
    <img alt={imgAlt} src={imgSrc}/>
    <h3>{name}</h3>
    <h6 style={h6Styles}>{author}</h6>
    <div className='child'>
    {children}
    </div>
</div>
}

const h6Styles= {
    marginTop:"0.5rem",
    textDecoration:"underline" 
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting/>);