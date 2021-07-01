import React, { Component } from 'react'
import ClientInfoStyled from './clientInfoStyled'
// const clientInfo = () => {
//   return (

//   )
// }

const INITIAL_STATE = {
  payWhere: '',
  whichIne: '',
  amount: '',
}
// handleChange = ({ target }) => {
//   const { name, value, type, checked } = target
//   this.setState({ [name]: type === 'checkbox' ? checked : value })
// }
export class ClientInfo extends Component {
  state = { ...INITIAL_STATE }

  handleChange = e => {
    this.setState({ payWhere: e.target.value })
    console.log(this.state.payWhere)
  }

  handleSubmit = e => {
    e.preventDefault()

    const { payWhere } = this.state

    console.log(`
      PayWhere: ${payWhere}
    `)
    this.props.onSubmit({ ...this.state })
  }
  render() {
    return (
      <ClientInfoStyled className="container">
        <form onSubmit={this.handleSubmit}>
          <h2>Vyberte si možnosť, ako chcete pomôcť </h2>
          {/* <label>
            <input type="checkbox"></input>
          </label>
          <label>
            <input type="checkbox"></input>
          </label> */}
          <section>
            <ul>
              <li>
                <label className="leftLabel">
                  Chcem finančne prispieť konkrétnemu útulku
                  <input
                    type="radio"
                    checked={this.state.payWhere === 'all'}
                    value="all"
                    onChange={this.handleChange}
                  />
                </label>
              </li>
              <li>
                <label className="rightLabel">
                  Chcem finančne prispieť celej nadácii
                  <input
                    type="radio"
                    checked={this.state.payWhere === 'one'}
                    value="one"
                    onChange={this.handleChange}
                  />
                </label>
              </li>
            </ul>
          </section>
        </form>
      </ClientInfoStyled>
    )
  }
}

export default ClientInfo
