// ~~~~ Je suis le parent et je reçois tous les enfants ~~~~
import { useState, useActionState } from "react";
import styles from "./revision.module.css";
import MsgConditionnel from "../enfants/rendus_conditionnels/conditions";


const Revision = () => {
    const [isLogIn, setIsLogIn] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const alternatLog = () => {
        setIsLogIn(!isLogIn)
    }
    const toggleTheme = () => {
        setIsActive(!isActive);
    }

    return (
        <div className={`${styles.container_parent} ${isActive ? styles.active : ""}`}>
            <h1>Je suis le parent</h1>
            <h2>Voici un exemple de rendu conditionnel</h2>
            <div className={styles.container_log}>
                { (isLogIn === true) ? (<div>Vous êtes <span className={styles.highlight}>connectés</span></div>) : (<div>Vous êtes <span className={styles.highlight}>déconnectés</span></div>) }
                <button className={styles.btn} onClick={ () => {alternatLog(); toggleTheme()}}>Conntect/disconnect + toggle theme</button>
            </div>

            <h2>Je contient un enfant :</h2>
            <MsgConditionnel/>
        </div>
    )
}

export default Revision;