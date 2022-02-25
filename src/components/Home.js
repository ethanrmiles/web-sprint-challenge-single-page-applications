import { Link } from 'react-router-dom'

export default function Home () {
    return (
        <section className="cta">
     <h1>Your favorite food, delivered while coding</h1>
     <Link id='order-pizza' to='/pizza'>Order Pizza</Link>
   </section>
    )
}