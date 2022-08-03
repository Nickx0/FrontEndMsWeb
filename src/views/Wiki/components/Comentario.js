import comentarios from './comentarios.json'
export default function Comentarios(){
    return (
        <div>
            <h3 className="comment-title">Comentarios de sus fans</h3>
            <div className="comment-conteiner">
                {comentarios?.map((comentario) => (
                    <div className="comment-wiki" key={comentario.id}>
                        <p className="comment-autor">{`${comentario.id}-${comentario.autor}`}</p>
                        <p className="comment-text">{comentario.texto}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}