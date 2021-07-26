import {Link} from "react-router-dom"

function Index() {
    return (
        <div>
            <header className ="">
                <ul>
                    <li>
                        <Link to="/">HOME</Link>
                    </li>
                    <li>
                        <Link to="/produtos">PRODUTOS</Link>
                    </li>
                    <li>
                        <Link to="/login">LOGIN</Link>
                    </li>
                    
                </ul>
            </header>
            <h1>Index</h1>
        </div>
    )
}

export default Index;
