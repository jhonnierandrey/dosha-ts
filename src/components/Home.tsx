const ARTICLES : number[] = [1,2,3,4,5,6,7,8,9]

function Home(){
    return(
        <main>
            <section className="py-5 text-center container">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                    <h1 className="fw-light">¿Querés saber cuál es tu Dosha?</h1>
                    <p className="lead text-muted">
                        Descubre cuál de los tres ‘humores’ o ‘aires vitales’ podrían estar presentes en tu cuerpo con el siguiente test.
                    </p>
                    <p>
                        <a href="/" className="btn btn-outline-primary my-2 btn-lg">Iniciar test</a>
                        {/* <a href="/" className="btn btn-secondary my-2">Aprender más</a> */}
                    </p>
                    </div>
                </div>
            </section>

            <div className="album py-5">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {
                            ARTICLES.map((article, index) => (
                                <div className="col" key={index}>
                                    <div className="card shadow-sm">
                                        <img src="https://picsum.photos/200/300" alt='Article' className="bd-placeholder-img card-img-top" width="100%" height="225" />
                                        <div className="card-body">
                                            <p className="card-text">Próximamente artículos relacionados con Dosha.</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                    <a href="https://es.wikipedia.org/wiki/Dosha" type="button" className="btn btn-sm btn-outline-secondary" target="_blank" rel="noreferrer">Visitar</a>
                                                    {/* <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button> */}
                                                </div>
                                                <small className="text-muted">{Math.floor(article * (Math.random() * 10))} mins</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home;