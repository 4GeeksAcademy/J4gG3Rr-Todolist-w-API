import React, { useState } from "react";

const Todolist = () => {

    const [tareas, setTareas] = useState([])

    const [nuevaTarea, setNuevaTarea] = useState('')

    function añadirTareas() {
        if (nuevaTarea.trim() !== '') {
            setTareas([...tareas, nuevaTarea.trim()]);
            setNuevaTarea('')

        }
    }

    function eliminarTarea(index) {
        console.log('eliminar' + index)

        const nuevoArray = tareas.filter((_, idx) => index != idx)
        setTareas(nuevoArray)

    }

    function teclaPresionada(e) {
        if (e.key === "Enter") {
            añadirTareas()
        }
    }

    return (
        <>
            <h1 className="text-center py-5 fs-1"> T o d o l i s t </h1>
        <div className="bg-secondary d-flex mx-auto flex-column p-5 w-50">
                <input name="elemento" className="w-100 mx-auto d-flex form-control rounded-0 fs-5" type="text" placeholder="Nueva Tarea" onKeyDown={teclaPresionada} value={nuevaTarea} onChange={(e) => setNuevaTarea(e.target.value)} />
            <ol className="w-100 mx-auto fs-3 list-unstyled list-group list-group-flush fs-5">
                {tareas.map((tarea, index) =>
                    <li className="contenedor list-group-item" key={index}> {tarea}
                        <span className="oculto fs-1" onClick={() => eliminarTarea(index)}>
                            X
                        </span>
                    </li>
                )}
            </ol>

            <p className="w-100 mx-auto d-flex card card-text mb-0 position-relative rounded-0 fs-5">Existen: {tareas.length} tareas</p>
            <p className="acordeon mx-auto d-flex card card-text position-relative rounded-0 fs-5"></p>
            <p className="acordeon-dos mx-auto d-flex card card-text position-relative rounded-0 fs-5"></p>
            <p className="acordeon-tres mx-auto d-flex card card-text position-relative rounded-0 fs-5"></p>
        </div>
        </>
    )

}

export default Todolist






