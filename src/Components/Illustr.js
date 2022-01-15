import React from 'react'
//import illu from './ressources/illustration_hero.svg'

const Illustr = () => {
    return (
        <div className="illustration">
            <img src={require('./ressources/illustration_hero.svg').default} alt='Jira'/>
        </div>
    )
}

export default Illustr
