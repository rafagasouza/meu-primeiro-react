function Pessoa({foto, nome, idade, profissao}){
    return(
        <>
            <img src={foto} alt={nome} />
            <h1>{nome}</h1>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
        </>
    )
}

export default Pessoa