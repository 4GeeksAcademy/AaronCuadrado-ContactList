import React, { useContext, useState } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import Card from "../component/card"
import Modal from "../component/modal"

export const Home = () => {
	const [show, setShow] = useState(false)
	const [contacto, setContacto] = useState(null)
	const { store, actions } = useContext(Context)

	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-md-12 text-white">
						<h2>Lista de contactos</h2>
						<h6>Agenda asignada: {store.agenda}</h6>
					</div>
					<div className="col-md-10">
						{
							store.contacts.length > 0 &&
							store.contacts.map((contact) => {
								return (
									<Card {...contact} key={contact.id} onClick={() => {
										setContacto(contact)
										setShow(true)
										//const consultar = confirm(`Desea eliminar el contacto: ${contact.name}?`)
										//if (consultar) actions.deleteContact(contact.id)
									}} />
								)
							})
						}
					</div>
				</div>
			</div>
			<Modal show={show} setShow={setShow} contacto={contacto} setContacto={setContacto} deleteContact={actions.deleteContact} />
		</>
	)
};
