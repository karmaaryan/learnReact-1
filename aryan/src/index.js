import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css'
import book, {firstBook, secondBook, thirdbook} from './books'
import booksObj from "./books"
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { StrictMode } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar, AreaChart, Area, ReferenceLine, ResponsiveContainer } from "recharts";
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar, AreaChart, Area, ReferenceLine, ResponsiveContainer } from "recharts";

const data = [
    { name: "Sunday", value: 35 },
    { name: "Monday", value: 54 },
    { name: "Tuesday", value: 82 },
    { name: "Wednesday", value: 69 },
    { name: "Thursday", value: 87 },
    { name: "Friday", value: 66 },
    { name: "Saturday", value: 27 }
];

const data2 = [
    { name: "Sunday", value: 35 },
    { name: "Monday", value: 54 },
    { name: "Tuesday", value: 82 },
    { name: "Wednesday", value: 69 },
    { name: "Thursday", value: 87 },
    { name: "Friday", value: 66 },
    { name: "Saturday", value: 27 }
];

const data3 = [
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page B',uv: -3000,pv: 1398,amt: 2400},
    {name: 'Page C', uv: -2000, pv: -9800, amt: 2400},
    {name: 'Page D', uv: 10000, pv: 3908, amt: 2400},
    {name: 'Page E', uv: -1890, pv: 4800, amt: 2400},    
    {name: 'Page F',uv: -2500,pv: 2000 ,amt: 2400},
    {name: 'Page G', uv: -1000, pv: -7000, amt: 2400},
    {name: 'Page H', uv: 4000, pv: 4000, amt: 2400},
    {name: 'Page I', uv: -3000, pv: 6000, amt: 2400},
    {name: 'Page J', uv: -1890, pv: 4800, amt: 2400},    
    {name: 'Page K',uv: 2500,pv: 2000 ,amt: 2400},
    {name: 'Page L', uv: -1000, pv: -8000, amt: 2400},
    {name: 'Page M', uv: 4000, pv: 4000, amt: 2400},
    {name: 'Page N', uv: -3000, pv: 6000, amt: 2400},
]

const LineChartComponent = ({ data }) => {
    return <div>
    <LineChart width={750} height={350} data={data} margin={{top:100}}>
        <CartesianGrid strokeDasharray="3 10" />
        <XAxis stroke='#b1ddf1' dataKey="name" />
        <YAxis stroke='#b1ddf1'/>
        <Tooltip />
        {/* types of lines - monotone, step, linear, basis, natural, cardinals */}
        <Line type="monotone" dataKey="value" stroke="lightblue" />
    </LineChart>
   </div>   
};


const BarChartComponent=({data})=>{
    return <div>
        <BarChart height={500} width={700} data={data} margin={{top:200, bottom:50}}>
            <XAxis dataKey="name" stroke='#fffffa'/>
            <YAxis stroke='#fffffa'/>
            <Tooltip/>
            <Bar dataKey="value" barSize={35} fill='#fccb06'/>
        </BarChart>
    </div>
}

const AreaChartComponent=({data})=>{
    return <div>
        <AreaChart height={500} width={700} data={data} margin={{top:200, bottom:50}}>
            <XAxis dataKey="name" stroke='#fffffa'/>
            <YAxis stroke='#fffffa'/>
            <Tooltip wrapperStyle={{ backgroundColor: "black" }}/>
            <Area fillOpacity={0.5} dataKey="value" barSize={35} fill='#82ca9d' stroke='fccb20'/>
        </AreaChart>
    </div>
}

const BarPlusMinusChartComponent=({data})=>{
    return <div>
        {/* <ResponsiveContainer width="100%" height="100%"> */}
            <BarChart height={400} width={750} data={data} margin={{top:100}}>
                <XAxis dataKey="name" stroke='#fffffa'/>
                <YAxis stroke='#fffffa'/>
                <Tooltip/>
                <ReferenceLine y={0} stroke='white'/>
                <Bar barSize={20} dataKey="pv" fill='#DC143C'/>
                <Bar barSize={20} dataKey="uv" fill='green'/>
            </BarChart>
        {/* </ResponsiveContainer> */}
    </div>
}

const MainComponent=()=>{
    return <section className="main">
        <Typography sx={{fontWeight:'bold', textDecoration:'underline'}} variant='h4' gutterBottom >Creating charts with recharts</Typography>
        {/* <Typography>This is a text</Typography> */}
        {/* <Button variant='outlined'>Hello, World.</Button> */}
        {/* <Booklist/> */}
        {/* <Typography>Vectoring graphs</Typography> */}
        {/* <Graph/> */}
        <LineChartComponent data={data}/>
        <BarChartComponent data={data2}/>
        <AreaChartComponent data={data2}/>
        <BarPlusMinusChartComponent data={data3}/>
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
    // function for challenge
    const newFunc = (input1, input2)=>{
        const variable = booksObj.find((input2)=> input2.id === input1);
        console.log(variable);
        console.log(input2);
    }
    return <div className="booklist">
        {/* working approach 1 */}
        {booksObj.map((input, index)=>{
            // const propDrilling = "This is a variable";
            // const prop=()=>{
            //     console.log(propDrilling);
            // }
            // return <Book book={input} key={input.id}/>
            // return <Book {...input} key={input.id} propDrill={prop}/> //using spread operator
            return <Book {...input} index={index} key={input.id} sendFunc={newFunc} /> //using spread operator
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
    const {img, author, name, id, sendFunc, index} = props;
    // const {propDrill} = props;
    // adding event in react 
    // const btnClick=()=>{
    //     alert("Btn click is working")
    // }
    // either create a function to use this (and call func1 in onClick) or the second approach would be to simply create a anonymous function in the onClick where the fucntion will be running inside
    // const func1=()=>{
    //     bookID(id);
    // }
    const returnFunc = () => sendFunc(id);
    return <div className="book">
        <img src={img}/>
        <h4>{name}</h4>
        <p>{author}</p>
        {/* <button onClick={propDrill}>Click this!</button>   prop drilling example */}
        <button onClick={returnFunc} >Click this!</button>
        {/* adding span book rank */}
        <span id='span'>#{index+1}</span>
    </div>
}  
const Root = ReactDom.createRoot(document.getElementById("root"));

Root.render(
    <MainComponent/>
)