import React from "react";

export const UserCard = ({usuario, deleteUsuario}) => {
    return  <>
                <div className="card " style={{minHeight:"670px", margin:"0 auto"}}>
                    <img
                        src={usuario.picture.large}
                        alt={`${usuario.name.first} ${usuario.name.last}`}
                        className="card-img-top"
                    ></img>
                    <div className="card-body d-flex flex-column justify-content-between">
                        <div>
                            <h5 className="card-title "> {usuario.name.first} {usuario.name.last} </h5>
                            <ul className="list-group list-group-flush ">
                                <li className="list-group-item px-0">Edad: {usuario.dob.age}</li>
                                <li className="list-group-item px-0">Género: {usuario.gender}</li>
                                <li className="list-group-item px-0">Email: {usuario.email}</li>
                                <li className="list-group-item px-0">Teléfono: {usuario.phone}</li>
                                <li className="list-group-item px-0">Ciudad: {usuario.location.city} , {usuario.location.state}, {usuario.location.country}</li>
                            </ul>
                        </div>
                        
                        <div>
                            <button onClick={deleteUsuario} className="btn btn-outline-danger mt-3 ">Borrar usuario</button>
                        </div>
                    </div>
                </div>
    
            </>
}