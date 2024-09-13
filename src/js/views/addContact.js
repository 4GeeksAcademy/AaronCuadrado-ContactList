import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams, useNavigate } from "react-router";

const AddContact = () => {

    const { store, actions } = useContext(Context);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const { contact_id } = useParams();
    const navigate = useNavigate();  // Para redirigir al usuario

    const handleSubmit = () => {
        const contact = {
            name: name,
            phone: phone,
            email: email,
            address: address,
        };

        if (contact_id !== undefined) {
            actions.updateContact(contact, contact_id);
        } else {
            actions.createContact(contact);
        }

        // Limpiar los campos del formulario
        setName("");
        setPhone("");
        setEmail("");
        setAddress("");

        // Redirigir a la página de inicio después de crear o editar el contacto
        navigate("/");
    };

    useEffect(() => {
        if (Array.isArray(store.contacts)) {
            const contacts = [...store.contacts];
            if (contact_id !== undefined) {
                const contact = contacts.find((item) => item.id === parseInt(contact_id));
                setName(contact?.name);
                setEmail(contact?.email);
                setAddress(contact?.address);
                setPhone(contact?.phone);
            }
        }
    }, [store.contacts, contact_id]);

    return (
        <div className="container text-white">
            <div className="row">
                <div className="col-m-12">
                    <h3>{contact_id ? "Editar" : "Añadir"} contacto</h3>
                </div>
                <div className="col-m-12">
                    <div className="form-group mb-3">
                        <label htmlFor="name" className="form-label">Nombre:</label>
                        <input type="text" className="form-control" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="phone" className="form-label">Teléfono:</label>
                        <input type="text" className="form-control" placeholder="Teléfono" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="name" className="form-label">Email:</label>
                        <input type="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="name" className="form-label">Dirección:</label>
                        <input type="text" className="form-control" placeholder="Dirección" value={address} onChange={(e) => setAddress(e.target.value)} />
                    </div>
                    <button className="btn btn-dark w-100" onClick={handleSubmit}>
                        Confirmar
                    </button>
                    <button className="btn btn-light w-100 mt-3" onClick={() => navigate("/")}>
                        Volver a la página de inicio
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddContact;
