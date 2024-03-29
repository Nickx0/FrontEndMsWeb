export default function ButtonAutor({ redSocial, autor }){
    let redirect = () => {if (redSocial === 'twitter') return `https://twitter.com/${autor}`};
    return (
        <div className='btn-cuadro-misora' id="galery-boton">
            <label className='autor' >{autor}</label>
            <a href={redirect()} target="_blank" rel='noreferrer'>
                <img className='icono-red-social' src="./icons/twitter-svgrepo-com.svg" alt="twitter" />
            </a>
        </div>
    );
};