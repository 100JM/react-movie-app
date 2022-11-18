import { Link } from "react-router-dom";
import { Group_obj, Group_key_arr } from "../atom/NavList";
import styles from "./Nav.module.css";
import {useState} from 'react';

function Nav() {  
    return (
        <div className={styles.container}>
            <div className={styles.pageName}>
                <Link to={'/'}>Home</Link>
            </div>
            {
                Group_key_arr.map((key)=>{
                    return(
                        <div key={key} className={styles.pageName}>
                            <Link to={`/page/${Group_obj[key]}`}>{key}</Link>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default Nav;