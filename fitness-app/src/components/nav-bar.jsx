import { } from "react"
import { Link } from "react-router-dom"
export default function NavBar() {

    return (< nav className="nav" >
        <Link to="/" className="site-title">
            <div className="logo">
                ExploreFitness
            </div>
        </Link>
        <ul>
            <Link to="/fitness-catalog">FitnessCatalog</Link>
            <Link to="/about">About</Link>
        </ul>
    </nav >
    )
}