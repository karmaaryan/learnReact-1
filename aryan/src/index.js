import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css'
import book, {firstBook, secondBook, thirdbook} from './books'
import booksObj from "./books"

const MainComponent=()=>{
    return <section className="main">
        <h1>Amazon Best Sellers</h1>  
        <Booklist/>
    </section>
} 

// const mapping = books.map((input)=>{
//     return input;
// })

// function BookList() {
//     return <section className='booklist'>{books}</section>;
// }


// const return1 = ["aryan","karma","is","the","best","coder"];
// this map returns the headings to the array values
/*  const return2 = return1.map((input)=>{
         return <h4>{input}</h4>
    })
    console.log(return2);
*/

// this map function returns the author names with perfect iteration int the objects;
/*  const return2 = booksObj.map((input)=>{
        console.log(input)
        return <h2>{input.author}</h2>;
    })
*/



const Booklist=()=>{
    const getBook=(id)=>{
        const book = booksObj.find((input1)=> input1.id === id)
        console.log(book);
    }    
    return <div className="booklist">
        {/* working approach 1 */}
        {booksObj.map((input)=>{
            // const propDrilling = "This is a variable";
            // const prop=()=>{
            //     console.log(propDrilling);
            // }
            // return <Book book={input} key={input.id}/>
            // return <Book {...input} key={input.id} propDrill={prop}/> //using spread operator
            return <Book {...input} key={input.id} bookID={getBook} /> //using spread operator
        })}
        {/* <Book img={firstBook.img} auBthor={firstBook.author} name={firstBook.name}/> */}
        {/* <Book img={secondBook.img} author={secondBook.author} name={secondBook.name}/> */}
        {/* <Book img={thirdbook.img} author={thirdbook.author} name={thirdbook.name}/> */}
        {/* <section>{return1}</section> */}
        {/* <section>{return2}</section> */}
        {/* this is not working right now */}
        {/* {returnBookbyFunc(booksObj)}   */}
        {/* <Book book={firstBook} />
        <Book book={secondBook} />
        <Book book={thirdbook} /> */}
    </div>
}

// second way to do the same (reference line 1 of Booklist return {working approach})
{/*  Working approach  */}
// const returnBookbyFunc = (booksObj) =>{
//     return booksObj.map((input)=>{
//         return <Book book={input} key={input.id}/>;
//     })
// }

const Book=(props)=>{
    const {img, author, name, id, bookID} = props;
    // const {propDrill} = props;
    // adding event in react 
    // const btnClick=()=>{
    //     alert("Btn click is working")
    // }
    // either create a function to use this (and call func1 in onClick) or the second approach would be to simply create a anonymous function in the onClick where the fucntion will be running inside
    // const func1=()=>{
    //     bookID(id);
    // }
    return <div className="book">
        <img src={img}/>
        <h4>{name}</h4>
        <p>{author}</p>
        {/* <button onClick={propDrill}>Click this!</button>   prop drilling example */}
        <button onClick={()=>{bookID(id)}} >Click this!</button>   
    </div>
}  
const Root = ReactDom.createRoot(document.getElementById("root"));

Root.render(
    <MainComponent/>
)