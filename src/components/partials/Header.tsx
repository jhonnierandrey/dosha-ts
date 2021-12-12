function Header(){
    return(
        <header>
            <div className="collapse ds-bg-dark" id="navbarHeader">
            <div className="container">
                <div className="row">
                <div className="col-sm-8 col-md-7 py-4">
                    <h4 className="text-white">Acerca de nosotros</h4>
                    <p>Más información, próximamente.</p>
                </div>
                <div className="col-sm-4 offset-md-1 py-4">
                    <h4 className="text-white">Contacto</h4>
                    <ul className="list-unstyled">
                    <li><a href="/" className="text-white">Twitter</a></li>
                    <li><a href="/" className="text-white">Facebook</a></li>
                    <li><a href="/" className="text-white">Correo</a></li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
            <div className="navbar navbar-dark shadow-sm">
            <div className="container">
                <a href="/" className="navbar-brand d-flex align-items-center">
                    <img src="./logo192.png" alt="Logo" width="50px" height="50px" className="ds-img-logo" />
                    <strong> Dosha Test</strong>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            </div>
        </header>
    )
}

export default Header;