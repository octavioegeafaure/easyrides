import React from "react";
import useFetch from "../../../../Hooks/useFetch";


export default function Politicas() {
    // const urlPoliticas = "http://ec2-3-145-197-27.us-east-2.compute.amazonaws.com:8080/politicas";
    const urlPoliticas = "http://localhost:8080/politicas";
    const { data } = useFetch(urlPoliticas);
    return (
        <div>
        {data && data.politicas.map((poli) => (
            <p key={poli.id}><i class="fa-solid fa-check"></i> {poli.descripcion}</p>
        ))}

        </div>
    );
}