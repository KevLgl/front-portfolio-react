
import React from 'react';
import { useFormik, Formik } from 'formik';
import * as Yup from 'yup';

const Pdfform = () => {
        const validationSchema = Yup.object().shape({
                firstName: Yup.string()
                        .min(2, 'Trop court!')
                        .required('Le prenom est obligatoire'),
                lastName: Yup.string()
                        .min(2, 'Trop court!')
                        .required('Le nom est obligatoire'),
                birthdate: Yup.string()
                        .required('La date de naissance est obligatoire'),
                place_of_birth: Yup.string()
                        .required('Votre lieu de naissance est obligatoire'),
                sexe: Yup.string()
                        .required('Votre sexe est obligatoire'),
                height: Yup.number()
                        .integer('Votre taille doit être renseignée en CM')
                        .required('Votre taille est obligatoire'),
                lateralite: Yup.string()
                        .required('Votre latéralité est obligatoire'),
                adress: Yup.string()
                        .required('Votre adresse est obligatoire'),
                cp: Yup.string()
                        .required('Votre code postal est obligatoire'),
                country: Yup.string()
                        .required('Votre ville est obligatoire'),
                email: Yup.string()
                        .email('Adresse e-mail invalide')
                        .required('l\'adresse e-mail est obligatoire'),
                phone_number1: Yup.number()
                        .integer('Mauvais format de numéro')
                        .required('Votre numéro est obligatoire'),
                phone_number2: Yup.number()
                        .integer('Mauvais format de numéro'),
                phone_number3: Yup.number()
                        .integer('Mauvais format de numéro'),
                reglement: Yup.boolean()
                        .oneOf([true], "Vous devez accepter le règlement intérieur "),
                chartre: Yup.boolean()
                        .oneOf([true], "Vous devez accepter la chartre du club"),
              });

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
                validationSchema
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
                        {
                                formik.errors.firstName && <span className="text-xs text-red-500 -bottom-6">{formik.errors.firstName}</span>
                        }

                        <br />

                        <label htmlFor="lastName">Nom:</label>
                        <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                        />
                         {
                                formik.errors.lastName && <span className="text-xs text-red-500 -bottom-6">{formik.errors.lastName}</span>
                        }

                        <br />

                        <label htmlFor="birthdate">Date de naissance:</label>
                        <input
                        id="birthdate"
                        name="birthdate"
                        type="date"
                        onChange={formik.handleChange}
                        value={formik.values.birthdate}
                        />

                        {
                                formik.errors.birthdate && <span className="text-xs text-red-500 -bottom-6">{formik.errors.birthdate}</span>
                        }

                        <br />

                        <label htmlFor="place_of_birth">Lieu de naissance:</label>
                        <input
                        id="place_of_birth"
                        name="place_of_birth"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.place_of_birth}
                        />
                        {
                                formik.errors.place_of_birth && <span className="text-xs text-red-500 -bottom-6">{formik.errors.place_of_birth}</span>
                        }
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
                        {
                                formik.errors.sexe && <span className="text-xs text-red-500 -bottom-6">{formik.errors.sexe}</span>
                        }
                        <br />

                        <label htmlFor="height">Taille:</label>
                        <input
                        id="height"
                        name="height"
                        type="number"
                        onChange={formik.handleChange}
                        value={formik.values.height}
                        />

                        {
                                formik.errors.height && <span className="text-xs text-red-500 -bottom-6">{formik.errors.height}</span>
                        }

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

                        {
                                formik.errors.lateralite && <span className="text-xs text-red-500 -bottom-6">{formik.errors.lateralite}</span>
                        }

                        <br />

                        <label htmlFor="adress">Adresse:</label>
                        <input
                        id="adress"
                        name="adress"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.adress}
                        />

                        {
                                formik.errors.adress && <span className="text-xs text-red-500 -bottom-6">{formik.errors.adress}</span>
                        }

                        <br />

                        <label htmlFor="cp">Code postal:</label>
                        <input
                        id="cp"
                        name="cp"
                        type="number"
                        onChange={formik.handleChange}
                        value={formik.values.cp}
                        />

                        {
                                formik.errors.cp && <span className="text-xs text-red-500 -bottom-6">{formik.errors.cp}</span>
                        }       

                        <br />

                        <label htmlFor="country">Ville:</label>
                        <input
                        id="country"
                        name="country"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.country}
                        />

                        {
                                formik.errors.country && <span className="text-xs text-red-500 -bottom-6">{formik.errors.country}</span>
                        }

                        <br />

                        <label htmlFor="phone_number1">Numero telephone licencié:</label>
                        <input
                        id="phone_number1"
                        name="phone_number1"
                        type="number"
                        onChange={formik.handleChange}
                        value={formik.values.phone_number1}
                        />

                        {
                                formik.errors.phone_number1 && <span className="text-xs text-red-500 -bottom-6">{formik.errors.phone_number1}</span>
                        }

                        <br />

                        <label htmlFor="phone_number2">Numero telephone domicile:</label>
                        <input
                        id="phone_number2"
                        name="phone_number2"
                        type="number"
                        onChange={formik.handleChange}
                        value={formik.values.phone_number2}
                        />
                        
                        {
                                formik.errors.phone_number2 && <span className="text-xs text-red-500 -bottom-6">{formik.errors.phone_number2}</span>
                        }

                        <br />

                        <label htmlFor="phone_number3">Numero telephone responsable</label>
                        <input
                        id="phone_number3"
                        name="phone_number3"
                        type="number"
                        onChange={formik.handleChange}
                        value={formik.values.phone_number3}
                        />

                        {
                                formik.errors.phone_number3 && <span className="text-xs text-red-500 -bottom-6">{formik.errors.phone_number3}</span>
                        }

                        <br />

                        <label htmlFor="email">Adresse e-mail:</label>
                        <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        />
                        {
                                formik.errors.email && <span className="text-xs text-red-500 -bottom-6">{formik.errors.email}</span>
                        }
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
