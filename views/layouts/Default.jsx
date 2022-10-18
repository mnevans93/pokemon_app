const React = require('react')

class Default extends React.Component {
    render() {
        const { pokemon, title, children } = this.props
        return (
            <html>
                <head>
                    <link rel="stylesheet" href="/app.css" />
                    <title>{title}</title>
                </head>
                <body>
                    <nav>
                        <a href="/pokedex">Go To Pokedex</a> <br />
                        <a href="/pokedex/new">Add New Pokedex Entry</a> <br />
                        {(pokemon) ? this.renderEntryElements(pokemon) : ''}
                    </nav>
                    <h1>
                        {title}
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