const React = require('react')
const Default = require('../layouts/Default.jsx')

class Edit extends React.Component {
    render() {
        const { _id, pokemonName, pokemonType, canItEvolve, isItCute, isItCool, imageLink } = this.props.pokemon
        return (
            <Default pokemonName={`Edit: ${pokemonName}`} pokemon={this.props.pokemon}>
                <form action={`/pokedex/${_id}?_method=PUT`} method="POST">
                    Name: <input type="text" name="pokemonName" defaultValue={pokemonName}/><br />
                    Type: <input type="text" name="pokemonType" defaultValue={pokemonType}/><br />
                    Can It Evolve: {canItEvolve ? <input type="checkbox" name="canItEvolve" defaultChecked /> : <input type="checkbox" name="canItEvolve" />} <br />
                    Is It Cute: {isItCute ? <input type="checkbox" name="isItCute" defaultChecked /> : <input type="checkbox" name="isItCute" />} <br />
                    Is It Cool: {isItCool ? <input type="checkbox" name="isItCool" defaultChecked /> : <input type="checkbox" name="isItCool" />} <br />
                    Image Link: <input type="text" name="imageLink" defaultValue={imageLink} /> <br />
                    <input type="submit" value="Submit Changes" /> <br /><br />
                </form>
                <form action={`/pokedex/${_id}?_method=DELETE`} method="POST">
                    <input type="submit" value="Delete Entry" />
                </form>
            </Default>
        )
    }
}

module.exports = Edit