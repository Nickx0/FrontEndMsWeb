import comentarios from './comentarios.json'
export default function Comentarios(){
    return (
        <div>
            <h3 className="comment-title">Comentarios de MisopitasSP</h3>
            <div className="comment-conteiner">
                {comentarios?.map((comentario) => (
                    <div className="comment-wiki" key={comentario.id}>
                        <p className="comment-text">
                            <b className="comment-autor">{`${comentario.id} - ${comentario.autor}`}</b><br/>
                            {comentario.texto}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}