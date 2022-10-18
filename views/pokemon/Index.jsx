const React = require('react')
const Default = require('../layouts/Default.jsx')

class Index extends React.Component {
    render() {
        const {pokedex} = this.props
        return (
            <Default title="Pokedex">
                <ul>
                    {pokedex.map((pokemon) => {
                        const { _id, pokemonName } = pokemon
                        return (
                            <li key={_id}>
                                <a href={`/pokedex/${_id}`}>{pokemonName}</a>
                            </li>
                        )
                    })}
                </ul>
            </Default>
        )
    }
}

module.exports = Index