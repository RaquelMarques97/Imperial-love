import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';


class UserProfile extends React.Component {
    constructor(props) {
        super(props);

        var savedProfile = JSON.parse(localStorage.getItem('profile'));

        if (savedProfile === null) {
            this.state = {
                nomePessoa: '',
                bornLocation: '',
                species: '',
                mass: '',
                affiliation: '',
                picture: '',
            }
        } else {
            this.state = {
                nomePessoa: savedProfile.nomePessoa || '',
                bornLocation: savedProfile.bornLocation || '',
                species: savedProfile.species || '',
                mass: savedProfile.mass || '',
                affiliation: savedProfile.affiliation || '',
                picture: savedProfile.picture || '',
            }
        }


    }

    onC = (e) => {
        // console.log(e.target.name); // Retorna o atributo "name"
        //console.log(e.target.id);   // Retorna o atributo "id"
        //  console.log(e.target.type); // Retorna o atributo "type"
        //  console.log(e.target.value); // Retorna o atributo "value" --> o que o utilizador introduziu
        this.setState({
            [e.target.name]: e.target.value
        });

    }

    submit = (e) => {
        e.preventDefault();

        localStorage.setItem('profile', JSON.stringify(this.state));
    }


    render() {
        console.log(this.state)
        return (
            <Container className='userprofile'>
                <h1>YOUR PROFILE</h1>
                <Form onSubmit={this.submit}>
                    <Form.Group>
                        <Form.Label>Name:</Form.Label>
                        <Form.Control type='text' id='name' name='nomePessoa' onChange={this.onC} value={this.state.nomePessoa} autoComplete="off" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Born Location:</Form.Label>
                        <Form.Control type='text' id='bornLocation' name='bornLocation' onChange={this.onC} value={this.state.bornLocation} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Species:</Form.Label>
                        <Form.Control type='text' id='species' name='species' onChange={this.onC} value={this.state.species} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Mass:</Form.Label>
                        <Form.Control type='number' id='mass' name='mass' onChange={this.onC} value={this.state.mass} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Afilliation:</Form.Label>
                        <Form.Control type='text' id='affiliation' name='affiliation' onChange={this.onC} value={this.state.affiliation} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Picture:</Form.Label>
                        <Form.Control type='file' id='picture' name='picture' />
                    </Form.Group>
                    <Button href='#my-preferences' variant="primary" type="submit">Submit</Button>
                </Form>
            </Container>
        );
    }
}

export default UserProfile;