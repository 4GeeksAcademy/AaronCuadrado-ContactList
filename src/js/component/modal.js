import React from 'react'

const Modal = ({ show, setShow, contacto, setContacto, deleteContact }) => {
    return (
        <div className={"modal fade " + (show ? "show" : "hide")} style={{ display: (show ? "block" : "none") }} id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">¿Eliminar el siguiente contacto?</h5>
                        <button onClick={() => setShow(!show)} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {contacto?.name}
                    </div>
                    <div className="modal-footer">
                        <button onClick={() => setShow(!show)} type="button" className="btn btn-dark" data-bs-dismiss="modal">Cancelar</button>
                        <button type="button" className="btn btn-dark" onClick={() => {
                            deleteContact(contacto.id)
                            setContacto(null)
                            setShow(false)
                        }}>Eliminar</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Modal

