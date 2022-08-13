import autor from './authors.json'
const leftorright=(i)=>{
    if(i%2===0)return "right"
    return "left"
}
export default function Creditbody(){
    return(
        <>
        <div className="credit-title">
                <h3 className="tile">Contribuidores</h3>
            </div>
            <div className="autors-container">
                {autor?.map((author, i) =>(
                        <div key={i} className={`autors-body ${leftorright(i)}`}>
                            <div className="autors-body-left">
                                <img src={author.picture} alt={author.name} />
                            </div>
                            <div className="autors-body-right">
                                <div className="autors-text">
                                    <h5 className="autors-text-name">{author.name}</h5>
                                    <b className="autors-text-arroba">{author.arroba}</b>
                                    <p className="autors-text-functions">{author.functions}</p>
                                </div>
                                <div className="autors-body-right-end">
                                    <i className="autors-text-text">{author.text}</i>
                                    <div className="autors-body-right-end-links">
                                        <hr/>
                                        <a href={author.discord} target="_blank" rel="noreferrer" className="fa-brands fa-discord"></a>
                                        <a href={author.twitter} target="_blank" rel="noreferrer" className="fa-brands fa-twitter"></a>
                                    </div>
                                    </div>
                            </div>
                        </div>
                    )
                )}
            </div>
        </>
    )
}