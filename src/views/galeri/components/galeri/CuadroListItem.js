export default function CuadroListItem({value}) {
    return (
        <div className="galery-card">
            <img className="card-img-top" src={`./img/${value.src}.jpg`} alt='Misora'/>
            <a className="btn btn-danger " href={ value.autor } target="_blank" rel='noreferrer'>Autor</a>
        </div>
    )
}