import {Switch, Route, Link} from 'react-router-dom'
import Home from './Home'
import Help from './Help'

export default function Header () {
    return (
        <header>
        <div className="title">
          <h2>Lambda Eats</h2>
        </div>
        <div className="nav">
          <Link className="nav-btn active" to ='/'>Home</Link>
          <Link className="nav-btn" to ='/help'>Help</Link>
        </div>
      </header>
    )
}