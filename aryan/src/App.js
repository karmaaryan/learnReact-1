import './App.css';

const BookList =()=>{
  return <div>
    <Book/>
    <Book/>
    <Book/>      
  </div>
};

const Book =()=>{
  return <div>
    <Img/>
    <Bookname/>
    <Author/>
  </div>
};

const Img =()=>{
  return <div>
    <img src="https://m.media-amazon.com/images/I/81f+YzrzDjS._AC_UL400_.jpg"/>    
  </div>
};

const Bookname =()=>{
  return <div>
    <h2>A Christmas Carol</h2>
  </div>
};

const Author =()=>{
  return <div>
    <h2>Charles Dickens</h2>
    </div>
}

export default BookList;