import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  updateBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  getFirstCharOfName = name => name.slice(0, 1)

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    const name = 'Sarah Williams'
    const initial = this.getFirstCharOfName(name)
    return (
      <div className="bg-container">
        <div className="cash-container">
          <div className="name-container">
            <h1 className="circle">{initial}</h1>
            <p className="name">{name}</p>
          </div>
          <div className="balance-container">
            <p className="your-balance">Your Balance</p>
            <p className="balance-amount">
              {balance}
              <br />
              <span className="currency">In Rupees</span>
            </p>
          </div>

          <p className="withdraw-text">Withdraw</p>
          <p className="withdraw-description">CHOOSE SUM (IN RUPEES)</p>
          <ul className="Demo-container">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                key={eachDenomination.id}
                DemoListDetails={eachDenomination}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal

/* https://aCashWithdrawal.ccbp.tech*/
