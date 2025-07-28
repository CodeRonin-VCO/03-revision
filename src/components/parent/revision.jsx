// ~~~~ Je suis le parent et je reçois tous les enfants ~~~~
import { useState, useActionState } from "react";
import styles from "./revision.module.css";
import Collection from "../enfants/collections/collections";
import { nanoid } from "nanoid";


const Revision = () => {
    // ==== Bouton toggle ====
    const [isLogIn, setIsLogIn] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const alternatLog = () => {
        setIsLogIn(!isLogIn)
    }
    const toggleTheme = () => {
        setIsActive(!isActive);
    }

    // ==== Collections ====
    const collections = [
        { id: nanoid(), firstName: 'Alain', lastName: 'Provist' },
        { id: nanoid(), firstName: 'Paul', lastName: 'Ochon' },
        { id: nanoid(), firstName: 'Laurent', lastName: 'Houtan' },
        { id: nanoid(), firstName: 'Ali', lastName: 'Mentation' },
        { id: nanoid(), firstName: 'Alex', lastName: 'Térieur' },
        { id: nanoid(), firstName: 'Alain', lastName: 'Verse' },
        { id: nanoid(), firstName: 'Jean', lastName: 'Peuplu' },
        
    ]

    return (
        <div className={`${styles.container_parent} ${isActive ? styles.active : ""}`}>
            <h1>Je suis le parent</h1>
            {/* // ---- Bouton toggle ---- */}
            <h2>Voici un exemple de rendu conditionnel</h2>
            <div className={styles.container_log}>
                { (isLogIn === true) ? (<div>Vous êtes <span className={styles.highlight}>connectés</span></div>) : (<div>Vous êtes <span className={styles.highlight}>déconnectés</span></div>) }
                <button className={styles.btn} onClick={ () => {alternatLog(); toggleTheme()}}>Conntect/disconnect + toggle theme</button>
            </div>

            <h2>Je contiens un enfant à qui j'envoie une collection (liste):</h2>
             {/* // ---- Collections ---- */}
            <Collection list={collections}/>
        </div>
    )
}

export default Revision;