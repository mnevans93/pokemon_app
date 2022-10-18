const React = require('react')
const Default = require('../layouts/Default.jsx')

class Show extends React.Component {
    render() {
        const { _id, pokemonName, pokemonType, canItEvolve, isItCute, isItCool, imageLink } = this.props.pokemon
        return (
            <Default title={pokemonName} pokemon={this.props.pokemon}>
                <h2>{pokemonType} Type</h2>
                <h2>{canItEvolve ? `Can Evolve` : `Cannot Evolve`}</h2>
                <h2>{isItCute ? `It's super cute` : `It's not cute`}</h2>
                <h2>{isItCool ? `It's really cool` : `It's pretty lame`}</h2>
                <img src={imageLink} alt={`Picture of ${pokemonName}`} />
            </Default>    
        )
    }
}

module.exports = Show