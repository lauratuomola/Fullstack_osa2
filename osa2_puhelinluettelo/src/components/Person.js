import React from 'react'

const Person = ({person, deleteName}) => {
    return(
        <div>
            <div>
            {person.name} {person.number} 
            <button onClick={deleteName}>poista</button>
            </div> 
        </div>
    )
}
export default Person