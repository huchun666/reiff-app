import React, { Component } from 'react'
import { connect } from "react-redux";
import action from '../actions/index'
import { State } from '../reducers/count'

type IProps = {
  count: State,
  addCount: (count: number) => State
}
type IState = {
  count: number
}

const addCount = action.addCount

class Test extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    console.log("Test -> constructor -> props", props)
    this.state = {
      count: 0
    }
    this.handleAddCount = this.handleAddCount.bind(this);
  }
  handleAddCount () {
    this.props.addCount(2)
  }
  render() {
    return (
      <div>
        <div>{this.props.count.count}</div>
        <button onClick={this.handleAddCount}>添加count</button>
      </div>
    )
  }
}


const mapStateToProps = (state: State) => {
  console.log(state)
  return {
    count: state.count
  }
}

export default connect(mapStateToProps, { addCount })(Test)