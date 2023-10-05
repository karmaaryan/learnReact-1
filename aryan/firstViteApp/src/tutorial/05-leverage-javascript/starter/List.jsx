import {people} from '../../../data.js'
import Person from './Person.jsx'

function List(){
    return (<div>
        {people.map((input)=>{
            return <Person key={input.id} input={input}/>
        })}
    </div>)
}

export default List;