import './index.css'

const DenominationItem = props => {
  const {DemoListDetails, updateBalance} = props
  const {value} = DemoListDetails
  const onUpdateBalance = () => {
    updateBalance(value)
  }

  return (
    <li>
      <button className="demo-btn" type="button" onClick={onUpdateBalance}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
