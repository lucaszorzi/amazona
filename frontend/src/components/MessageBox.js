import React from "react";

export default function MessageBox (props) {
    return (
        <div className={`alert alert-${props.variant || 'info'}`}>
            {props.children}  //.children mostra o conteudo dentro do componente MessageBox quando é chamado
        </div>
    )
}