
import React from 'react';
import { useFormik, Field } from 'formik';

const Pdfform = () => {
        const formik = useFormik({
                initialValues: {
                  firstName: '',
                  lastName: '',
                  birthdate:'',
                  place_of_birth:'',
                  sexe:'',
                  height:'',
                  lateralite:'',
                  adress:'',
                  cp:'',
                  country:'',
                  phone_number1:'',
                  phone_number2:'',
                  phone_number3:'',
                  email: '',
                  reglement:false,
                  chartre:false,
                  photo:false,
                },
                onSubmit: values => {
                  alert(JSON.stringify(values, null, 2));
                },
              });
        return (
                <form onSubmit={formik.handleSubmit}>
                        <label htmlFor="firstName">Prenom:</label>
                        <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                        />

                        <br />

                        <label htmlFor="lastName">Nom:</label>
                        <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                        />

                        <br />

                        <label htmlFor="birthdate">Date de naissance:</label>
                        <input
                        id="birthdate"
                        name="birthdate"
                        type="date"
                        onChange={formik.handleChange}
                        value={formik.values.birthdate}
                        />

                        <br />

                        <label htmlFor="place_of_birth">Lieu de naissance:</label>
                        <input
                        id="place_of_birth"
                        name="place_of_birth"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.place_of_birth}
                        />

                        <br />

                        <label htmlFor="sexe">Sexe:</label>
                        <input
                        id="sexe"
                        name="sexe"
                        type="radio"
                        value="femme"
                        onChange={formik.handleChange}
                        />
                        <span> Femme </span>
                         <input
                        id="sexe"
                        name="sexe"
                        type="radio"
                        value="homme"
                        onChange={formik.handleChange}
                        />
                        <span> Homme </span>

                        <br />

                        <label htmlFor="height">Taille:</label>
                        <input
                        id="height"
                        name="height"
                        type="number"
                        onChange={formik.handleChange}
                        value={formik.values.height}
                        />

                        <br />

                        <label htmlFor="lateralite">Latéralité:</label>
                        <input
                        id="lateralite"
                        name="lateralite"
                        type="radio"
                        value="gaucher"
                        onChange={formik.handleChange}
                        />
                        <span> Gaucher </span>
                        <input
                        id="lateralite"
                        name="lateralite"
                        type="radio"
                        value="droitier"
                        onChange={formik.handleChange}
                        />
                        <span> Droitier </span>

                        <br />

                        <label htmlFor="adress">Adresse:</label>
                        <input
                        id="adress"
                        name="adress"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.adress}
                        />

                        <br />

                        <label htmlFor="cp">Code postal:</label>
                        <input
                        id="cp"
                        name="cp"
                        type="number"
                        onChange={formik.handleChange}
                        value={formik.values.cp}
                        />

                        <br />

                        <label htmlFor="country">Ville:</label>
                        <input
                        id="country"
                        name="country"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.country}
                        />

                        <br />

                        <label htmlFor="phone_number1">Numero telephone licencié:</label>
                        <input
                        id="phone_number1"
                        name="phone_number1"
                        type="number"
                        onChange={formik.handleChange}
                        value={formik.values.phone_number1}
                        />

                        <br />

                        <label htmlFor="phone_number2">Numero telephone domicile:</label>
                        <input
                        id="phone_number2"
                        name="phone_number2"
                        type="number"
                        onChange={formik.handleChange}
                        value={formik.values.phone_number2}
                        />

                        <br />

                        <label htmlFor="phone_number3">Numero telephone responsable</label>
                        <input
                        id="phone_number3"
                        name="phone_number3"
                        type="number"
                        onChange={formik.handleChange}
                        value={formik.values.phone_number3}
                        />

                        <br />

                        <label htmlFor="email">Adresse e-mail:</label>
                        <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        />

                        <br />

                        <label htmlFor="reglement">Je déclare avoir pris connaissance du règlement intérieur du club et en accepter les conditions</label>
                        <input
                        id="reglement"
                        name="reglement"
                        type="checkbox"
                        onChange={formik.handleChange}
                        value={formik.values.reglement}
                        />

                        <br />

                        <label htmlFor="chartre">Je déclare avoir pris connaissance de la Charte du club et en accepter les conditions</label>
                        <input
                        id="chartre"
                        name="chartre"
                        type="checkbox"
                        onChange={formik.handleChange}
                        value={formik.values.chartre}
                        />

                        <br />


                        <label htmlFor="photo">J’accepte que l’EVDRLHB publie des photos prises dans le cadre des rencontres sportives dans le cadre d’activités liées à la vie du club sur lesquelles j’apparais</label>
                        <input
                        id="photo"
                        name="photo"
                        type="checkbox"
                        onChange={formik.handleChange}
                        value={formik.values.photo}
                        />

                        <br />

                        <button type="submit">Envoyer</button>
                </form>
        )
}

export default Pdfform
