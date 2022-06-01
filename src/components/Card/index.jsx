import './styles.css'

// Através de pros conseguimos acessar as propriedades do "Home"
export function Card(props) {
  return (
    <div className="card">
      <strong>{props.name}</strong>
      <small>{props.time}</small>
    </div>
  )
}
