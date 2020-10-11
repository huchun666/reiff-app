import React, { Component } from 'react'
import { connect } from "react-redux";
import action from '../actions/index'
import { State } from '../reducers/count'
import MyTypes from 'MyTypes';
import './test.scss'

type IProps = {
  count: number,
  addCount: (count: number) => State
}
type IState = MyTypes.testGolbalType & {
  count: number,
}

const addCount = action.addCount

class Test extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      count: 0,
      todo: 1
    }
    console.log("Test -> constructor -> this.state", this.state)
    
    this.handleAddCount = this.handleAddCount.bind(this);
  }
  handleAddCount () {
    let localCount = this.props.count;
    this.props.addCount(localCount + 1);
  }
  render() {
    return (
      <div>
        <div>{this.props.count}</div>
        <button onClick={this.handleAddCount}>添加count</button>
      </div>
    )
  }
}

type MState = {
  count: State
}

const mapStateToProps = (state: MState) => {
  return {
    count: state.count.count
  }
}

export default connect(mapStateToProps, { addCount })(Test)