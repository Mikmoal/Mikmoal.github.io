import laptop from "../images/laptop.png";
import telefono from "../images/telefono.png";
//import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "../styles/style.css";

export default function Inventory() {

    return (
        <div className="container">
            <div className="container_two">
                <Link to={`/equipo/nuevo/laptop`}>
                    <div class="card">

                        <img src={laptop} alt="laptop" width="auto" height="150" />

                        <p>Nueva laptop</p>
                    </div>
                </Link>

                <Link to={`/equipo/nuevo/telefono`}>
                    <div className="card">

                        <img src={telefono} alt="telefono" width="auto" height="150" />

                        <p>Nuevo teléfono</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}