import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

const Greeting = () => { return <div className='container'>
        <Heading/>
        <Box/>
        <Box/>
        <Box/>
    </div>
}

{/* <img src='https://m.media-amazon.com/images/I/71YjqWYLt4L.jpg'/> */}

const Heading =()=>{ return <div className='heading'>
    <h1> Amazon Best Sellers </h1>
</div>
}
const Box =() =>{ return <div className='box'>
    <Img/>
    <Name/>
    <Author/>_
</div>
}
const Img =()=>{ return <div className='imgCont'>
    <img src='https://m.media-amazon.com/images/I/71YjqWYLt4L.jpg'/>
</div>
}
const Name =()=>{ return <div className='name'>
    <h3>World's Greatest Short Stories</h3>
</div> 
}

const Author =()=>{ return <div className='author'>
    <h6>By Collectible Edition</h6>
</div>
}










const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting/>);