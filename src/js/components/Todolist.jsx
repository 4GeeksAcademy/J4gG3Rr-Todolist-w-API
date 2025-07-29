import React, { useEffect, useState } from "react";

const Todolist = () => {
    const [tareas, setTareas] = useState([]);

    function tareaTraida() { 
        fetch("https://playground.4geeks.com/todo/users/johan_gomez")
            .then(response => response.json())
            .then(data => setTareas(data.todos))
            .catch(error => console.error("Error al obtener tareas:", error));
    }

    useEffect(() => {
        tareaTraida();
    }, []);

    function eliminarTarea(laIdAEliminar) {

            const requestOptions = {
                method: "DELETE",
                redirect: "follow"
            };

            fetch("https://playground.4geeks.com/todo/todos/" + laIdAEliminar, requestOptions)
            .then((response) => response.text(), tareaTraida())
    }

    function teclaPresionada(e) {

        const tareaMetida = {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                "label": e.target.value,
                "is_done": false
            })

        }

        if (e.key === "Enter") {
            fetch("https://playground.4geeks.com/todo/todos/johan_gomez", tareaMetida)
            .then(response => response.json())
            .then(data => setTareas([...tareas, data]))
            e.target.value = ''
        }
    }

    return (
        <>
            <h1 className="text-center py-5 fs-1">T o d o l i s t</h1>
            <div className="bg-secondary d-flex mx-auto flex-column p-5 w-50">
                <input
                    name="elemento"
                    className="w-100 mx-auto d-flex form-control rounded-0 fs-5"
                    type="text"
                    placeholder="Nueva Tarea"
                    onKeyDown={(e)=> teclaPresionada(e)}
                />
                <ol className="w-100 mx-auto fs-3 list-unstyled list-group list-group-flush fs-5">
                    {tareas.map((tarea) =>
                        <li className="contenedor list-group-item" key={tarea.id}>
                            {tarea.label}
                            <span className="oculto fs-1" onClick={() => eliminarTarea(tarea.id)}>X</span>
                        </li>
                    )}
                </ol>
                <p className="w-100 mx-auto d-flex card card-text mb-0 position-relative rounded-0 fs-5">
                    Existen: {tareas.length} tareas
                </p>
            </div>
        </>
    );
};

export default Todolist;





