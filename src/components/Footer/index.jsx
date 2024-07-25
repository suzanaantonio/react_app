import './style.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="sb-footer section_heading">
                <div className="sb_footer-links">
                    <div className="sb_footer-links-div">
                        <h4>Detalhes do livro</h4>
                        <a href="">
                            <p>Meus Livros</p>
                        </a>
                        
                    </div>
                    <div className="sb_footer-links-div">
                        <h4>Recomendaçoes</h4>
                        <a href="">
                            <p>Meus Livros</p>
                        </a>
                    </div>
                    <div className="sb_footer-links-div">
                        <h4>Contactos</h4>
                        <a href="">
                            <p>948715531</p>
                        </a>
                    </div>
                    <div className="sb_footer-links-div">
                        <h4>Biblioteca</h4>
                        <a href="">
                            <p>Virtual</p>
                        </a>
                        
                    </div>
                    <div className="sb_footer-links-div">
                        <h4>Social</h4>
                        <div className="social-media">
                            <a href="">
                                <i className="fab fa-facebook"></i>
                                <span></span>
                            </a>
                            <a href="">
                                <i className="fab fa-instagram"></i>
                                <span></span>
                            </a>
                            <a href="">
                                <i className="fab fa-twitter"></i>
                                <span></span>
                            </a>
                        </div>
                    </div>
                </div>

                <hr /><hr />

                <div className="sb_footer-below">
                    <div className="sb_footer-copyright">
                        <p>
                            @{new Date().getFullYear()} Suzana António. Todos os direitos reservados.
                        </p>
                    </div>
                    <div className="sb_footer-below-links">
                        <a href=""><div><p>Termos e Condições</p></div></a>
                        <a href=""><div><p>Privacidade</p></div></a>
                        <a href=""><div><p>Segurança</p></div></a>
                        <a href=""><div><p>Política de Cookies</p></div></a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer