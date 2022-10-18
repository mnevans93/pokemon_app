const React = require('react')

class Default extends React.Component {
    render() {
        const {pokemon, pokemonName, children } = this.props
        return (
            <html>
                <head>
                    <link rel="stylesheet" href="/app.css" />
                    <title>{pokemonName}</title>
                </head>
                <body>
                    <nav>
                        <a href="/pokedex">Pokedex</a>
                        <a href="/pokedex/new">Add New Pokedex Entry</a>
                        {(pokemon) ? this.renderEntryElements(pokemon) : ''}
                    </nav>
                    <h1>
                        {pokemonName}
                    </h1>
                    {children}
                </body>
            </html>
        )
    }
    renderEntryElements(pokemon) {
        return (
            <>
                <a href={`/pokedex/${pokemon._id}/edit`}>Edit Entry</a>
            </>
        )
    }
}

module.exports = Default