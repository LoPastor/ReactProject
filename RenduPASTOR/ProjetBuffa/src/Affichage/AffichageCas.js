import React, { Component } from 'react';

export default class AffichageCas extends Component {


    //pour récupérer les témpoignages, non fait par manque de temps
    getTemoignage = (value) =>{
        console.log(value);
    }
    render() {
        return (
            <tr onClick={this.getTemoignage.bind(this, this.props.obj.id_cas)}>
                <td>{this.props.obj.id_cas}</td>
                <td>{this.props.obj.cas_nom_dossier}</td>
                <td>{this.props.obj.cas_zone_nom}</td>
                <td>{this.props.obj.cas_resume}</td>
                <td>{this.props.obj.cas_date_maj}</td>
            </tr>
        );
    }
}