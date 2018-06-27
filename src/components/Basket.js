import React, { PureComponent } from 'react'
import math from 'mathjs'

import toPrice from '../lib/currency'

export default class Basket extends PureComponent {

  calculateTotal = basket => basket.reduce(
    (sum, lineItem) => sum + math
      .chain(lineItem.quantity)
      .multiply(lineItem.price),
    0)

  render() {
    const { basket } = this.props
    return (
      <aside className="basket">
        <h1>Basket</h1>

        <table className="products">
          <thead>
            <tr>
              <th>Product name</th>
              <th>qty</th>
            </tr>
          </thead>

          <tbody>
            {basket.map(item =>
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
              </tr>
            )}
          </tbody>
        </table>

        <div className="total">
          <span className="label">Total: </span>
          <span className="amount">
            {toPrice(this.calculateTotal(basket))}
          </span>
        </div>
      </aside>
    )
  }

}