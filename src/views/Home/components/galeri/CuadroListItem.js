let style = {
    maxWidth: "20%",
    backgroundColor: "#362e9c"
}
export default function CuadroListItem({value}) {
    return (
        <div className="d-flex card justify-content-center align-self-end p-2 m-2 " style={ style }>
            <img className="card-img-top" src={ value.src } alt='Misora'/>
            <a className="btn btn-danger " href={ value.autor } target="_blank" rel='noreferrer'>Autor</a>
        </div>
    )
}