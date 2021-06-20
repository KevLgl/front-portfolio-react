import React, { Component } from 'react';
import { jsPDF } from "jspdf";


class Pdfform extends Component {

    state = {
        nomSaisi: "",
        prenomSaisi: "",
        dateSaisi: "",
        lieuSaisi: "",
        sexeSaisi: "",
        tailleSaisi: "",
        lateraliteSaisi: "",
        adresseSaisi: "",
        cpSaisi: "",
        villeSaisi: "",
        tel1Saisi: "",
        tel2Saisi: "",
        tel3Saisi: "",
        reglementSaisi: "",
        chartreSaisi: "",
        photoSaisi: ""
    }
    createpdf = () => {
        const doc = new jsPDF();
        //HEADER
        //LOGO 
        doc.addImage("logo/blanc.png", "PNG", 15, 10, 20, 20);
        //TEXT
        doc.text("FICHE DE RENSEIGNEMENET 2021/2022", 30, 10);
        // CONTENT
        // NOM
        doc.text("Nom:", 10, 60);
        doc.text(this.state.nomSaisi, 30, 60);
        // PRENOM
        doc.text("Prenom:", 10, 70);
        doc.text(this.state.prenomSaisi, 40, 70);
        //DATE DE NAISSANCE
        doc.text("Date de naissance:", 10, 80);
        doc.text(this.state.dateSaisi, 60, 80);
        //LIEU DE NAISSANCE
        doc.text("Lieu de naissance:", 10, 90);
        doc.text(this.state.lieuSaisi, 60, 90);
        //SEXE
        doc.text("Sexe:", 10, 100);
        doc.text(this.state.sexeSaisi, 30, 100);
        //TAILLE
        doc.text("Taille:", 10, 110);
        doc.text(this.state.tailleSaisi, 60, 110);
        //LATERALITE
        doc.text("Lateralité:", 10, 120);
        doc.text(this.state.lateraliteSaisi, 60, 120);
        //ADRESSE
        doc.text("Adresse:", 10, 130);
        doc.text(this.state.adresseSaisi, 60, 130);
        //CP
        doc.text("CP:", 10, 140);
        doc.text(this.state.cpSaisi, 60, 140);
        //VILLE
        doc.text("Ville:", 10, 150);
        doc.text(this.state.villeSaisi, 60, 150);
        //TEL1
        doc.text("Tel1:", 10, 160);
        doc.text(this.state.tel1Saisi, 60, 160);
        //TEL2
        doc.text("Tel2:", 10, 170);
        doc.text(this.state.tel2Saisi, 60, 170);
        //TEL3 
        doc.text("Tel3:", 10, 180);
        doc.text(this.state.tel3Saisi, 60, 180);
        //REGLEMENT 
        //CHARTRE
        //PHOTO

        doc.save("a4.pdf");
    }

    render() {
        return (
            <>
                <div>
                    <h2>Formulaire de licences</h2>
                    <form>
                        {/* NOM */}
                        <label for="name">Nom :</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={this.state.nomSaisi}
                            onChange={(event) => this.setState({ nomSaisi: event.target.value })}
                        />
                        {/* PRENOM */}
                        <label for="firstname">Prenom :</label>
                        <input
                            type="text"
                            name="firstname"
                            id="firstname"
                            value={this.state.prenomSaisi}
                            onChange={(event) => this.setState({ prenomSaisi: event.target.value })}
                        />
                        {/* DATE DE NAISSANCE */}
                        <label for="birthdate">Date de naissance :</label>
                        <input
                            type="date"
                            name="birthdate"
                            id="birthdate"
                            value={this.state.dateSaisi}
                            onChange={(event) => this.setState({ dateSaisi: event.target.value })}
                        />
                        {/* LIEU DE NAISSANCE */}
                        <label for="birthcity">Lieu de naissance</label>
                        <input
                            type="text"
                            name="birthdate"
                            id="birthdate"
                            value={this.state.lieuSaisi}
                            onChange={(event) => this.setState({ lieuSaisi: event.target.value })}
                        />
                        {/* SEXE */}
                        <label for="sexe">Sexe</label>
                        <input
                            type="text"
                            name="sexe"
                            id="sexe"
                            value={this.state.sexeSaisi}
                            onChange={(event) => this.setState({ sexeSaisi: event.target.value })}
                        />

                        {/* TAILLE */}
                        <label for="height">Taille</label>
                        <input
                            type="number"
                            name="height"
                            id="height"
                            value={this.state.tailleSaisi}
                            onChange={(event) => this.setState({ tailleSaisi: event.target.value })}
                        />
                        {/* LATERALITE */}
                        <label for="laterality">Lateralité</label>
                        <input
                            type="text"
                            name="laterality"
                            id="laterality"
                            value={this.state.lateraliteSaisi}
                            onChange={(event) => this.setState({ lateraliteSaisi: event.target.value })}
                        />
                        {/* ADRESSE */}
                        <label for="adress">Adresse</label>
                        <input
                            type="text"
                            name="adress"
                            id="adress"
                            value={this.state.adresseSaisi}
                            onChange={(event) => this.setState({ adresseSaisi: event.target.value })}
                        />
                        {/* CODE POSTAL */}
                        <label for="codepostal">Code postal</label>
                        <input
                            type="text"
                            name="codepostal"
                            id="codepostal"
                            value={this.state.cpSaisi}
                            onChange={(event) => this.setState({ cpSaisi: event.target.value })}
                        />
                        {/* VILLE */}
                        <label for="city">Ville</label>
                        <input
                            type="text"
                            name="city"
                            id="city"
                            value={this.state.villeSaisi}
                            onChange={(event) => this.setState({ villeSaisi: event.target.value })}
                        />
                        {/* TEL DOM  */}
                        <label for="tel1">Telephone domicile</label>
                        <input
                            type="number"
                            name="tel1"
                            id="tel1"
                            value={this.state.tel1Saisi}
                            onChange={(event) => this.setState({ tel1Saisi: event.target.value })}
                        />
                        {/* TEL LICENCIE  */}
                        <label for="tel2">Telephone licencié</label>
                        <input
                            type="number"
                            name="tel2"
                            id="tel2"
                            value={this.state.tel2Saisi}
                            onChange={(event) => this.setState({ tel2Saisi: event.target.value })}
                        />
                        {/* TEL RESPONSABLE  */}
                        <label for="tel3">Telephone responsable</label>
                        <input
                            type="number"
                            name="tel3"
                            id="tel3"
                            value={this.state.tel3Saisi}
                            onChange={(event) => this.setState({ tel3Saisi: event.target.value })}
                        />
                        {/* EMAIL  */}
                        <label for="email">E-mail</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={this.state.emailSaisi}
                            onChange={(event) => this.setState({ emailSaisi: event.target.value })}
                        />
                        {/* BOOLEAN reglement interieur*/}
                        <div class="flex items-center gap-8">
                            <h3>reglement interieur</h3>
                            <label class="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="reglementinterieur"
                                    class="h-5 w-5 text-red-600"
                                    id="reglementinterieur" />
                                <span class="ml-2 text-gray-700">
                                    J'accepte
                                </span>
                            </label>
                            <label class="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="reglementinterieur"
                                    class="h-5 w-5 text-red-600"
                                />
                                <span class="ml-2 text-gray-700">
                                    Je refuse
                                </span>
                            </label>
                        </div>
                        {/* BOOLEAN chartre club */}
                        <div class="flex items-center gap-8">
                            <h3>chartre club</h3>
                            <label class="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="chartreclub"
                                    class="h-5 w-5 text-red-600"
                                />
                                <span class="ml-2 text-gray-700">
                                    J'accepte
                                </span>
                            </label>
                            <label class="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="chartreclub"
                                    class="h-5 w-5 text-red-600"
                                />
                                <span class="ml-2 text-gray-700">
                                    Je refuse
                                </span>
                            </label>
                        </div>
                        {/* BOOLEAN photos */}
                        <div class="flex items-center gap-8">
                            <h3>Photos club</h3>
                            <label class="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="photoclub"
                                    class="h-5 w-5 text-red-600" />
                                <span class="ml-2 text-gray-700">
                                    J'accepte
                                </span>
                            </label>
                            <label class="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="photoclub"
                                    class="h-5 w-5 text-red-600"

                                />
                                <span class="ml-2 text-gray-700">
                                    Je refuse
                                </span>
                            </label>
                        </div>
                        <button type="submit" onClick={() => this.createpdf()} > valider</button>
                    </form>
                </div>
            </>
        )
    }
}

export default Pdfform;