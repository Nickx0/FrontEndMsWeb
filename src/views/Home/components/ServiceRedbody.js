
export default function ServiceRedbody(){  
    
    return(
        <>
        <h3 className="title">Servicios</h3>
            <div className="services">
                <div className="image-services image-service-left right">
                    <img alt="Hina Misora Red" src="./utilities/avgmisopita.webp" className="misopita-img"/>
                </div>
                <div className="services-redes">
                
                    <a href="https://www.youtube.com/channel/UC6tSB9TnO0f01OBeo9UEJZA" target="_blank" className="youtube-services services-block left">
                    <div className="youtube-services-left service-left">
                        <img alt="Hina Misora Red" src="./utilities/misofiesta.webp" className="misopita-img" style={{transform: "scaleX(-1)"}}/>
                    </div>
                    <div className="youtube-services-right service-right">
                        <b>Youtube</b>
                        <p>Acá podrás ver a la cachetona hacer streams y es donde pasarás los mejores momentos de tu vida.</p>
                    </div>
                    </a>
                
                <a href="https://twitter.com/Hina_Misora" target="_blank" className="twitter-services services-block left">
                    <div className="twitter-services-left service-left">
                        <img alt="Hina Misora Red" src="./utilities/misoclown.webp" className="misopita-img" style={{transform: "scaleX(-1)"}}/>
                    </div>
                    <div className="twitter-services-right service-right">
                        <b>Twitter</b>
                        <p>Si no está en stream la encontrarás acá, estará twiteando varias cosas bonitas y divertidas, a veces antojo.</p>
                    </div>
                </a>

                <a href="https://streamlabs.com/-hinamisorawactor" target="_blank" className="streamlabs-services services-block left">
                    <div className="streamlabs-services-left service-left">
                        <img alt="Hina Misora Red" src="./utilities/misofino.webp" className="misopita-img" style={{transform: "scaleX(-1)"}}/>
                    </div>
                    <div className="streamlabs-services-right service-right">
                        <b>Streamlabs</b>
                        <p>Si tienes dinero, lo podrás depositar aquí. Será de las mejores inversiones de tu vida y la cachetona será muy feliz.</p>
                    </div>
                </a>

                <a href="https://twitter.com/kisaragi_h29" target="_blank" className="cover-services services-block left">
                    <div className="cover-services-left service-left">
                        <img alt="Hina Misora Red" src="./utilities/misohorny.webp" className="misopita-img" style={{transform: "scaleX(-1)"}}/>
                    </div>
                    <div className="cover-services-right service-right">
                        <b>Kisaragi Mamá</b>
                        <p>La Madre de Misora y a quien debemos agradecer por tenerla. No le digas suegra que Misora se enoja.</p>
                    </div>
                </a>
                </div>
            </div>
        </>
    )
}