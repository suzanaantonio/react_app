import './style.css'

const SideBar = () =>{
    return(
        <nav className='side-bar-nav'>
            <div className="logo">
                <p>Soraia Moura</p>
            </div>
            <ul className="menu">
            <div className="borda"></div>
                <li className="active">
                    <a href="">
                        <span>Booking</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <span>Home</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <span>Livros</span>
                    </a>
                </li>
                <div className="borda"></div>
                <li>
                    <a href="">
                        <span>Gêneros</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <span>Autores</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <span>Recomendações</span>
                    </a>
                </li>
                <div className="borda"></div>
                <li>
                    <a href="">
                        <span>Detalhes</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <span>Favoritos</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <span>Perfil</span>
                    </a>
                </li>
                <div className="borda"></div>
                <li>
                    <a href="">
                        <span>Definições</span>
                    </a>
                </li>
                <li>
                    <a href="" className="logout">
                        <span>Sair</span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default SideBar;