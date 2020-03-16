import React from 'react';


class ActualUser extends React.Component {
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
                nomePessoa:savedProfile.nomePessoa,
                bornLocation: savedProfile.bornLocation,
                species: savedProfile.species,
                mass: savedProfile.mass,
                affiliation: savedProfile.affiliation,
                picture: savedProfile.picture,
            }
        }


    }
    render() {
        console.log(this.savedProfile);
        return (
            <div>
                <h1>{this.state.nomePessoa}</h1>
            </div>
        )
    }
}

export default ActualUser;