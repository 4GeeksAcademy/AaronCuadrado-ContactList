import React from "react";
import foto from "../../img/654249.png"
import { Link } from "react-router-dom";

const Card = ({ id, name, email, phone, address, onClick }) => {
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={foto} className="rounded mx-auto d-block rounded-circle" alt="..." width={200} height={200} />
                </div>
                <div className="col-md-7">
                    <div className="card-body d-flex flex-column justify-content-center h-100">
                        <h4 className="card-title">{name}</h4>
                        <h5 className="card"></h5>
                        <p className="card-text mb-1"><i class="bi bi-telephone-fill"></i> {phone}</p>
                        <p className="card-text mb-1"><i class="bi bi-envelope"></i> {email}</p>
                        <p className="card-text mb-1"><i className="bi bi-geo-alt-fill"></i> {address}</p>
                    </div>
                </div>
                <div className="col-md-1">
                    <p className="btn">
                        <Link className="btn" to={`/editContact/${id}`}> <i className="bi bi-pen-fill"></i> </Link>
                        <button className="btn" onClick={onClick}> <i className="bi bi-trash3-fill"></i> </button>

                    </p>
                </div>
            </div>
        </div>
    )
}


export default Card;