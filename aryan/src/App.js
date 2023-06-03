import './App.css';

const BookList =()=>{
  return <div className="bookList">
    <Book/>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
  </div>
};

const Book =()=>{
  return <div className="book">
    <Img/>
    <Bookname/>
    <Author/>
  </div>
};

const Img =()=>{
  return <div className="img">
    <img alt='image1' src='./images/ChristmasCarol.jpg'/>    
  </div>
};

const Bookname =()=>{
  return <div className="bookName">
    <h1>A Christmas Carol</h1>
  </div>
};

const Author =()=>{
  return <div className="author">
    <h3>Charles Dickens</h3>
    </div>
}

export default BookList;