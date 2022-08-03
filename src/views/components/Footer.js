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
                        <p>La pagina fue hecha por un grupo de misopitas ajenas al server de discord de wactor :v</p>
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
