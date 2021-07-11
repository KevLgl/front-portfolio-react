
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
                        <section className="container flex items-center justify-center flex-1 h-full mx-auto">
                                <div className="bg-gray-200 m-4 p-4 w-3/4 container flex  justify-center flex-col flex-1 h-full mx-auto rounded-lg">
                                <div className="m-10 flex  justify-center flex-col">
                                        <div className="my-2">
                                                <label htmlFor="firstName">Prenom: </label>
                                                <input
                                                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-1/4 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                                id="firstName"
                                                name="firstName"
                                                type="text"
                                                onChange={formik.handleChange}
                                                value={formik.values.firstName}
                                                placeholder="Prénom"
                                                />
                                                {
                                                        formik.errors.firstName && <p className="text-xs text-red-500 -bottom-6">{formik.errors.firstName}</p>
                                                }
                                        </div>
                                        <div className="my-2">
                                                <label htmlFor="lastName">Nom: </label>
                                                <input
                                                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-1/4 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                                id="lastName"
                                                name="lastName"
                                                type="text"
                                                onChange={formik.handleChange}
                                                value={formik.values.lastName}
                                                />
                                                {
                                                        formik.errors.lastName && <p className="text-xs text-red-500 -bottom-6">{formik.errors.lastName}</p>
                                                }
                                        </div>
                                        <div className="my-2">
                                                <label htmlFor="birthdate">Date de naissance: </label>
                                                <input
                                                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-1/2 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                                id="birthdate"
                                                name="birthdate"
                                                type="date"
                                                onChange={formik.handleChange}
                                                value={formik.values.birthdate}
                                                />

                                                {
                                                        formik.errors.birthdate && <p className="text-xs text-red-500 -bottom-6">{formik.errors.birthdate}</p>
                                                }
                                        </div>
                                        <div className="my-2">
                                                <label htmlFor="place_of_birth">Lieu de naissance: </label>
                                                <input
                                                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-1/4 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                                id="place_of_birth"
                                                name="place_of_birth"
                                                type="text"
                                                onChange={formik.handleChange}
                                                value={formik.values.place_of_birth}
                                                />
                                                {
                                                        formik.errors.place_of_birth && <p className="text-xs text-red-500 -bottom-6">{formik.errors.place_of_birth}</p>
                                                }
                                        </div>
                                        <div className="my-2">
                                                <label htmlFor="sexe">Sexe: </label>
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
                                                        formik.errors.sexe && <p className="text-xs text-red-500 -bottom-6">{formik.errors.sexe}</p>
                                                }
                                        </div>

                                        <div className="my-2">
                                                <label htmlFor="height">Taille: </label>
                                                <input
                                                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-1/4 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                                id="height"
                                                name="height"
                                                type="number"
                                                onChange={formik.handleChange}
                                                value={formik.values.height}
                                                />

                                                {
                                                        formik.errors.height && <p className="text-xs text-red-500 -bottom-6">{formik.errors.height}</p>
                                                }
                                        </div>
                                        <div className="my-2">
                                                <label htmlFor="lateralite">Latéralité: </label>
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
                                                        formik.errors.lateralite && <p className="text-xs text-red-500 -bottom-6">{formik.errors.lateralite}</p>
                                                }
                                        </div>
                                        <div className="my-2">
                                                <label htmlFor="adress">Adresse: </label>
                                                <input
                                                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-1/4 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                                id="adress"
                                                name="adress"
                                                type="text"
                                                onChange={formik.handleChange}
                                                value={formik.values.adress}
                                                />

                                                {
                                                        formik.errors.adress && <p className="text-xs text-red-500 -bottom-6">{formik.errors.adress}</p>
                                                }
                                        </div>
                                        <div className="my-2">
                                                <label htmlFor="cp">Code postal: </label>
                                                <input
                                                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-1/4 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                                id="cp"
                                                name="cp"
                                                type="number"
                                                onChange={formik.handleChange}
                                                value={formik.values.cp}
                                                />
                                                {
                                                        formik.errors.cp && <p className="text-xs text-red-500 -bottom-6">{formik.errors.cp}</p>
                                                }       
                                        </div>
                                        <div className="my-2">
                                                <label htmlFor="country">Ville: </label>
                                                <input
                                                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-1/4 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                                id="country"
                                                name="country"
                                                type="text"
                                                onChange={formik.handleChange}
                                                value={formik.values.country}
                                                />

                                                {
                                                        formik.errors.country && <p className="text-xs text-red-500 -bottom-6">{formik.errors.country}</p>
                                                }
                                        </div>
                                        <div className="my-2">
                                                <label htmlFor="phone_number1">Numero telephone licencié: </label>
                                                <input
                                                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-1/4 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                                id="phone_number1"
                                                name="phone_number1"
                                                type="number"
                                                onChange={formik.handleChange}
                                                value={formik.values.phone_number1}
                                                />

                                                {
                                                        formik.errors.phone_number1 && <p className="text-xs text-red-500 -bottom-6">{formik.errors.phone_number1}</p>
                                                }
                                        </div>
                                        <div className="my-2">
                                                <label htmlFor="phone_number2">Numero telephone domicile: </label>
                                                <input
                                                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-1/4 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                                id="phone_number2"
                                                name="phone_number2"
                                                type="number"
                                                onChange={formik.handleChange}
                                                value={formik.values.phone_number2}
                                                />
                                                
                                                {
                                                        formik.errors.phone_number2 && <p className="text-xs text-red-500 -bottom-6">{formik.errors.phone_number2}</p>
                                                }
                                        </div>
                                        <div className="my-2">
                                                <label htmlFor="phone_number3">Numero telephone responsable: </label>
                                                <input
                                                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-1/4 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                                id="phone_number3"
                                                name="phone_number3"
                                                type="number"
                                                onChange={formik.handleChange}
                                                value={formik.values.phone_number3}
                                                />

                                                {
                                                        formik.errors.phone_number3 && <p className="text-xs text-red-500 -bottom-6">{formik.errors.phone_number3}</p>
                                                }
                                        </div>
                                        <div className="my-2">
                                                <label htmlFor="email">Adresse e-mail: </label>
                                                <input
                                                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-1/4 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                                id="email"
                                                name="email"
                                                type="email"
                                                onChange={formik.handleChange}
                                                value={formik.values.email}
                                                />
                                                {
                                                        formik.errors.email && <p className="text-xs text-red-500 -bottom-6">{formik.errors.email}</p>
                                                }
                                        </div>
                                        <div className="my-2">
                                                <label htmlFor="reglement" className="mx-2">Je déclare avoir pris connaissance du règlement intérieur du club et en accepter les conditions</label>
                                                <input
                                                id="reglement"
                                                name="reglement"
                                                type="checkbox"
                                                onChange={formik.handleChange}
                                                value={formik.values.reglement}
                                                />
                                        </div>
                                        <div className="my-2">
                                                <label htmlFor="chartre" className="mx-2">Je déclare avoir pris connaissance de la Charte du club et en accepter les conditions</label>
                                                <input
                                                id="chartre"
                                                name="chartre"
                                                type="checkbox"
                                                onChange={formik.handleChange}
                                                value={formik.values.chartre}
                                                />
                                        </div>

                                        <div className="my-2">
                                                <label htmlFor="photo" className="mx-2">J’accepte que l’EVDRLHB publie des photos prises dans le cadre des rencontres sportives dans le cadre d’activités liées à la vie du club sur lesquelles j’apparais</label>
                                                <input
                                                id="photo"
                                                name="photo"
                                                type="checkbox"
                                                onChange={formik.handleChange}
                                                value={formik.values.photo}
                                                />
                                        </div>
                                        <div className="my-2">
                                                <button type="submit" className="py-2 px-4  bg-secondary  focus:ring-primary focus:ring-offset-primary text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg w-1/3">Envoyer</button>
                                        </div>
                                </div>        
                                </div>
                        </section>
                </form>
        )
}

export default Pdfform
