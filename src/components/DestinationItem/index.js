// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationsListDetails} = props
  const {imgUrl, name} = destinationsListDetails

  return (
    <li className="list-container">
      <img src={imgUrl} alt={name} className="image" />
      <p className="name">{name}</p>
    </li>
  )
}

export default DestinationItem
