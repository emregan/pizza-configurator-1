import React,{PureComponent} from 'react'
import './sauceSelector.css'
import { connect } from 'react-redux'

class SauceSelector extends PureComponent {
  constructor(props) {
    super(props)
    this.onChangeHandler = this.onChangeHandler.bind(this)
  }
  onChangeHandler(e) {
    this.props.dispatch({
      type:'SAUCE_SELECTOR',
      payload:e.target.value
    })
  }

  render() {
    return (
      <div className="SauceSelector">
        <h1>Step 2: Select Sauce!</h1>
        <label>
          <input type="radio" value="1" name="sauce_selector" onChange={this.onChangeHandler}/>
          <b>White Sauce</b>
        </label>
        <label>
          <input type="radio" value="2" name="sauce_selector" onChange={this.onChangeHandler}/>
          <b>Red Sauce</b>
        </label>
        <label>
          <input type="radio" value="3" name="sauce_selector" onChange={this.onChangeHandler}/>
          <b>Double Red Sauce</b>
        </label>
        <label>
          <input type="radio" value="4" name="sauce_selector" onChange={this.onChangeHandler}/>
          <b>Mix it up!</b>
        </label>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    pizza: state.pizza
  }
}

export default connect(mapStateToProps)(SauceSelector)
