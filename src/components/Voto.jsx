export function Voto(jogador) {

    if(!jogador) return null;

    return(
        <div className="container-voto">
            <h3 className="voto-titulo">
                {jogador.nome}
            </h3>

            <button>
                {jogador.id}
            </button>
        </div>
    )
}