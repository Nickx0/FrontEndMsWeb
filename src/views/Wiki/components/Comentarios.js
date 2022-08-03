export default function Comentarios({comentario}){
    console.log(comentario);
    return (
        <div>
            <h3 className="comment-title">Comentarios de sus fans</h3>
            <div className="comment-conteiner">
                {comentario?.map((comentario) => (
                    <div className="comment-wiki" key={comentario.id}>
                        <p className="comment-autor">{`${comentario.id}-${comentario.autor}`}</p>
                        <p className="comment-text">{comentario.texto}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}