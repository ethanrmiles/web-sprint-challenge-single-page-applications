export default function Header () {
    return (
        <header>
        <div className="title">
          <h2>Lambda Eats</h2>
        </div>
        <div className="nav">
         <div className="nav-btn active" id='home'>Home</div>
         <div className="nav-btn " id='help'>Help</div>
        </div>
      </header>
    )
}