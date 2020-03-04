import React, { Component } from 'react';
import { Dropdown, Button, Container } from 'react-bootstrap';
import ActualUser from './ActualUser.js';



class Preferences extends Component {
    constructor(props) {
        super(props);
        this.state = {
            starWarsPersons: [],
            favSpecies: [],
            favAffiliation: [],
            favHomeworld: [],
            favMass: [],

        }
    }

    componentDidMount() {
        this.getPersons();
        console.log(this.starWarsPersons)
    }

    getPersons = () => {
        fetch('https://melroune.github.io/starwars-api/api/all.json')
            .then(response => response.json())
            .then(
                (result) => {
                    this.setState({
                        starWarsPersons: result,
                        isLoading: false,
                        isError: false,

                    });

                },
                (error) => {
                    this.setState({
                        isLoading: false,
                        isError: true
                    });
                }
            )
    }

    selectSpecies = (eventKey) => {
        this.setState({
            favSpecies: eventKey
        });
    }

    selectAffiliation = (eventKey) => {
        this.setState({
            favAffiliation: eventKey
        });
    }

    selectHomeworld = (eventKey) => {
        this.setState({
            favHomeworld: eventKey
        });
    }

    componentDidUpdate() {
        window.myPreferences = this.state;
    }

    render() {
        console.log(this.state)

        return (
            <Container className='preferences'>
                <h4>Hello <ActualUser /> Choose the Affiliation you prefer:</h4>
                {/* <div> */}
                    {/* <Dropdown onSelect={this.selectSpecies}>
                        <Dropdown.Toggle variant="success" id="dropdown-basic" >
                            Favorite Species
                        </Dropdown.Toggle>
                        <Dropdown.Menu onSelect={this.selectSpecies}>
                            {[...new Set(this.state.starWarsPersons.map(element => element.species))].sort().map((specie) => (
                                <Dropdown.Item name='favSpecies' eventKey={specie}>{specie};</Dropdown.Item>

                            ))};

                        </Dropdown.Menu>
                    </Dropdown> */}
                    {/* <p className='favspecie'>{this.state.favSpecies}</p> */}
                {/* </div> */}

                <div>
                    <Dropdown onSelect={this.selectAffiliation}>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Favorite Affiliation
                        </Dropdown.Toggle>
                        <Dropdown.Menu onSelect={this.selectAffiliation}>
                            {[...new Set(this.state.starWarsPersons
                                .map(element => element.affiliations)
                                .reduce((acc, elem) => {
                                    return acc.concat(elem);
                                }, []))]
                                .sort()
                                .map(aff => (
                                    <Dropdown.Item name='favAffiliation' eventKey={aff}>{aff};</Dropdown.Item>
                                ))}
                        </Dropdown.Menu>
                    </Dropdown>

                    <p className='favspecie'>{this.state.favAffiliation}</p>
                </div>
                {/* <div>
                    <Dropdown onSelect={this.selectHomeworld}>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Favorite Home World
                        </Dropdown.Toggle>
                        <Dropdown.Menu onSelect={this.selectHomeworld}>
                            {[...new Set(this.state.starWarsPersons.map(element => element.homeworld)
                                .reduce((acc, elem) => {
                                    return acc.concat(elem);
                                }, []))]
                                .filter(elem => elem !== undefined)
                                .sort(function (a, b) {
                                    var nameA = a.toUpperCase(); // ignore upper and lowercase
                                    var nameB = b.toUpperCase(); // ignore upper and lowercase
                                    if (nameA < nameB) {
                                        return -1;
                                    }
                                    if (nameA > nameB) {
                                        return 1;
                                    }

                                    // names must be equal
                                    return 0;
                                }).map((homeworld) => (
                                    <Dropdown.Item name='favHomeworld' eventKey={homeworld}>{homeworld};</Dropdown.Item>
                                ))};
                        </Dropdown.Menu>
                    </Dropdown>
                    <p className='favspecie'>{this.state.favHomeworld}</p>
                </div> */}
                <Button variant="primary" href='#match' >check your matches</Button>
            </Container>
        );
    }
}


export default Preferences;