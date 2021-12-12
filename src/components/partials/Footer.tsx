function Footer() {
    return(
        <footer className="text-muted py-5">
            <div className="container">
            <p className="float-end mb-1">
                <a href="/">Subir</a>
            </p>
            {/* <p className="mb-1">Album example is &copy; Bootstrap, but please download and customize it for yourself!</p>
            <p className="mb-0">New to Bootstrap? <a href="/">Visit the homepage</a> or read our <a href="../getting-started/introduction/">getting started guide</a>.</p> */}
            <p>&copy; 2021 <a href="https://www.jaesmadeit.com/" target="_blank" rel="noopener noreferrer">JAES Made It</a> | Made with <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a> + <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">TypeScript</a> | <a href="https://github.com/jhonnierandrey/dosha-ts" target="_blank" rel="noopener noreferrer">GitHub</a> | <a href="http://jhonnierandrey.info/" target="_blank" rel="noopener noreferrer">See more</a> | <a href="https://www.buymeacoffee.com/jhonnierandrey" target="_blank" rel="noopener noreferrer"><i className="fas fa-coffee"></i></a></p>
            </div>
        </footer>
    )
}

export default Footer;