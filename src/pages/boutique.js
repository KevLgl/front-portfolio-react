import React from 'react'
import Headerboutique from '../components/Headerboutique'
import Shoppingcard from '../components/Shoppingcard'

const Boutique = () => {
    return (
        <div>
            <Headerboutique />
            <p className="bg-yellow-500 rounded-lg m-3 text-center text-primary">Toute les commandes doivent être effectuées à l'adresse mail : vdr@gmail.com <br />
                Indiquez: <br />
                Votre Nom, prénom <br />
                Numéro de telephone <br />
                Les articles que vous voulez commander
            </p>
            <div className="mt-12 flex flex-wrap align-center justify-center">
                <div className="mb-6 mx-3">
                    <Shoppingcard imgsrc="/images/maillot.png" title="Titre" description="description" prix="prix" />
                </div>
                <div className="mb-6 mx-3">
                    <Shoppingcard imgsrc="/images/maillot.png" title="Titre" description="description" prix="prix" />
                </div>
                <div className="mb-6 mx-3">
                    <Shoppingcard imgsrc="/images/maillot.png" title="Titre" description="description" prix="prix" />
                </div>
                <div className="mb-6 mx-3">
                    <Shoppingcard imgsrc="/images/maillot.png" title="Titre" description="description" prix="prix" />
                </div>
                <div className="mb-6 mx-3">
                    <Shoppingcard imgsrc="/images/maillot.png" title="Titre" description="description" prix="prix" />
                </div>
                <div className="mb-6 mx-3">
                    <Shoppingcard imgsrc="/images/maillot.png" title="Titre" description="description" prix="prix" />
                </div>
                <div className="mb-6 mx-3">
                    <Shoppingcard imgsrc="/images/maillot.png" title="Titre" description="description" prix="prix" />
                </div>
                <div className="mb-6 mx-3">
                    <Shoppingcard imgsrc="/images/maillot.png" title="Titre" description="description" prix="prix" />
                </div>
                <div className="mb-6 mx-3">
                    <Shoppingcard imgsrc="/images/maillot.png" title="Titre" description="description" prix="prix" />
                </div>
            </div>
        </div>
    )
}

export default Boutique
