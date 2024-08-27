import React from 'react'
import ExplorerCard from './ExplorerCard/ExplorerCard'
import "./Explore.css"
function Explore() {
  return (
    <div className="explore-wrapper">
        {/* Ajout d'un élément pour pouvoir décaler le div container par rapport au wrapper et non par rapport au carousel */}
        <p className='transparent'>t</p>
        <div className='explore-container'>
            <p className='infos-travaux'>Infos Travaux</p>
            <div className="cards-container">
                <ExplorerCard image="src\assets\cardImages\interruptionMetroM1.png" 
                            link="https://www.ilevia.fr/cms/actualite/travaux-metro-m1"
                            titre="Métro M1 : Dates et horaires des interruptions en 2024"
                            description="La ligne de Métro M1 sera interrompue à certaines dates durant l'année 2024"
                            bottomText = "Voir"
                            >
                </ExplorerCard>
                <ExplorerCard image="src\assets\cardImages\ligneDeNuit.png" 
                                link="https://www.ilevia.fr/cms/actualite/travaux-p-r-st-philibert"
                                titre="Le Parkin-Relais St-Philibert se refait une beauté"
                                description="L'abri-vélos ainsi que 70 places restent disponibles durant les travaux sur ce parking."
                                bottomText = "Voir"
                                >
                </ExplorerCard>
                <ExplorerCard image="src\assets\cardImages\parkingRelais.png"
                                link="https://www.ilevia.fr/cms/actualite/la-ligne-de-nuit-quand-tout-s-arrete-elle-demarre"
                                titre="La ligne de nuit, quand tout s'arrête, elle démarre"
                                description="Proitez encore plus de vtre soirée grâce à la ligne de nuit ! "
                                bottomText = "Voir"
                                >
                </ExplorerCard>
            </div>
        </div>
    </div>
  )
}

export default Explore
