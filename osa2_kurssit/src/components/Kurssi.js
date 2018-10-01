import React from 'react'

const Osa = ({osa}) => {
    return(
        <li>{osa.nimi} {osa.tehtavia}</li>
    )
}
const Otsikko = (props) => <h1>{props.nimi}</h1>
const Sisalto = ({osa}) => {
    const rivit = () => osa.map(osa => <Osa key={osa.id} osa={osa}/>)
    return(
     <div>
        <ul>
            {rivit ()}
        </ul>
    </div>
  )
}
const Yhteensa = ({osa}) => {
    const yht = osa.map(osa => osa.tehtavia)
    
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return(
        <div>
            Yhteensä {yht.reduce(reducer)} tehtävää
        </div>
    )
}
const Kurssidata = (props) => {
  const {kurssi} = props
    return (
        <div>
            <Otsikko nimi={kurssi.nimi}/>
            <Sisalto osa={kurssi.osat} />
            <Yhteensa  osa={kurssi.osat}/>
            
        </div>
    )

}
const Kurssi = (props) => {
    const {kurssit} = props
    const courset = () => kurssit.map(kurssi => <Kurssidata key={kurssi.id} kurssi={kurssi}/>)
    return (
        <div>
            {courset()}
            
            
        </div>
    )
}

export default Kurssi