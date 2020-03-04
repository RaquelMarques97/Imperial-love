import React from 'react';
import { Component } from 'react';
import ActualUser from './ActualUser.js';
import { Button,Card } from 'react-bootstrap';

class Match extends Component {
    constructor(props) {
        super(props);
        this.state = {
            starWarsPersons: [],
            matches: [],
            isLoading: true,
            isError: false
        }
    }

    componentDidMount() {
        console.log(window.myPreferences);

        this.getPersons();
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
                    }, this.findMatches);
                },
                (error) => {
                    this.setState({
                        isLoading: false,
                        isError: true
                    });
                }
            )
    }

    findMatches = () => {
        // Find all matches that fit into the criteria
        // Store it on this.state.matches


        let filteredResults;

        // var specie = window.myPreferences.favSpecies;
        var affiliation = window.myPreferences.favAffiliation;
        // var homeworld= window.myPreferences.favHomeworld;

        // Mass between 20 and 50
        // filteredResults = this.state.starWarsPersons.filter(element => {
        //     return element.mass > 20 && element.mass < 50;
        // });

        // Filter by specie

        // filteredResults = this.state.starWarsPersons.filter(person => {
        //     return person.species.includes(specie);

        // });

        // Filter by affiliation
        filteredResults = this.state.starWarsPersons.filter(person => {
            return person.affiliations.includes(affiliation);
        });

        this.setState({
            matches: filteredResults
        });
    }

    render() {
        console.log(this.state.matches)
        return (
            <div className='match'>
            <div>Hello <ActualUser /> you got these options:</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', marginLeft: '7%'}}>
               
                
                {this.state.matches.map((element) => {
                     return (
                    <Card style={{width:'400px', margin:'50px'}}>
                    <Card.Img variant="top" src={element.image} style={{height:'300px', width:'250px', textAlign:'center'}} />
                    <Card.Body style={{backgroundColor:'grey',height:'auto'}}>
                        <Card.Title>Name: {(element.name)}</Card.Title>
                        <Card.Text style={{color:'white'}}>
  
                   
                        <ul>
                            
                            <li>Species: {(element.species)} </li>

                            <li> 
                                    <ul>Affiliations:
                   
                                    {
                                    element.affiliations.map((item) =>
                                    { return (<li className='affiliations'> {item}</li>) })
                                    }                                  
                                
                                    </ul>                           
                            </li>
                            <li>mass: {(element.mass)}kg </li>
                        </ul>
                    
               
                        </Card.Text>
                        <Card.Link style={{color:'black'}} href="#success"><Button>Like!</Button></Card.Link>
                        
                    </Card.Body>
                    </Card>) })}

                </div>
               <Button href='#my-preferences'>Try Again...</Button>
                </div>
        )
    }



}


export default Match;