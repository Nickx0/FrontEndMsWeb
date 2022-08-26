import RedesMisora from './RedesMisora';

export default function Footer(){
    return(
        <footer className="footer">
            <div className="footer-cont">
                <div className="footer-1">
                    <div className="footer-name">
                        <h3 className="footer-brand">Hina Misora / ヒナミソラ</h3>
                    </div>
                    <div className="footer-links">
                        <h3>Nosotros</h3>
                        <p>Pagina hecha por un grupo pequeño de misopitas</p>
                    </div>
                    <RedesMisora />
                </div>
            </div>
            <div className="footer-2">
                <small><b>© 2022 MisopitaFans</b> - Pagina hecho por fans para Misora</small>
            </div>
        </footer>
)
}
