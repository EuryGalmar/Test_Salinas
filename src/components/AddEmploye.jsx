import { useState } from "react";
import { useDispatch} from "react-redux"

export function AddEmployee(){
    const dispatch = useDispatch();
    
    const [name, setName] = useState("")
    const [lastname, setLastName] = useState("")
    const [birthday, setBirthday] = useState("")

    const handleName = (e) => setName(e.target.value);
    const handleLastName = (e) =>setLastName(e.target.value);
    const handleBirthday = (e) =>setBirthday(e.target.value);


    const handleClick = () => {
        if(name && lastname && birthday){
            dispatch(
                ({
                    name,
                    lastname,
                    birthday,
                })
            );


        }

        setName("");
        setLastName("");
        setBirthday("");
    };

    return(
        <div className="container">
            <div className="row">
                <h1>Agregar Empleado</h1>
            </div>
            <div className="row">
                <div className="three columns">
                    <label htmlFor="nameInput">Nombre</label>
                    <input className="u-full-width" type="text"
                    placeholder="Nombre"
                    id="nameInput"
                    onChange={handleName} 
                    value={name}/>

                    <label htmlFor="lastnameInput">Apellido</label>
                    <input className="u-full-width" 
                    type="text"
                    placeholder="Apellido"
                    id="nameInput"
                    onChange={handleLastName} 
                    value={lastname}/>
                    
                    <label htmlFor="lastnameInput">Cumpleaños</label>
                    <input type="date" id="start" name="trip-start"
                    onChange={handleBirthday}
                    value="2018-07-22"
                    min="2018-01-01" max="2018-12-31"/>
                    
                    <button onClick={handleClick} className="button-primary">
                    Agregar empleado
                    </button>

                </div>
            </div>
        </div>
    )
}
