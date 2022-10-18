const React = require('react')
const Default = require('../layouts/Default.jsx')

class New extends React.Component {
    render() {
        return (
            <Default title="New Pokedex Entry">
                <form action="/pokedex" method="POST">
                    Name: <input type="text" name="pokemonName" /> <br />
                    Type: <input type="text" name="pokemonType" /> <br />
                    Can It Evolve: <input type="checkbox" name="canItEvolve" /> <br />
                    Is It Cute: <input type="checkbox" name="isItCute" /> <br />
                    Is It Cool: <input type="checkbox" name="isItCool" /> <br />
                    Image Link: <input type="text" name="imageLink" /> <br />
                    <input type="submit" value="Create Entry" /> <br /><br />
                </form>
            </Default>
        )
    }
}

module.exports = New