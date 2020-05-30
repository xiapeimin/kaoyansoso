'use strict'
import React from 'react'
import { SketchPicker } from 'react-color'
import './Canvas'

class SketchExample extends React.Component {
  constructor(){
    super();
    this.state = {
      displayColorPicker: false,
      color: {
        r: '58',
        g: '53',
        b: '52',
        a: '100'
      },
      storage:window.localStorage
    };
    var storage = this.state.storage;
    if(storage.getItem('panColor')!=null){
      this.setState({
        color:storage.getItem('panColor')
      });
    }
  }

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };

  handleChange = (color) => {
    var storage = this.state.storage;
    storage.setItem('panColor',color.rgb);
    this.setState({ color: color.rgb })
  };

  render() {

    return (
      <div className='center_xpmcs' onClick={this.stopClick}>
          <SketchPicker color={ this.state.color } onChange={ this.handleChange } />
      </div>
    )
  }
  stopClick = (e)=> {
    e.stopPropagation(); //阻止点击事件冒泡
    this.props.parent.getColorMsg(this,this.state.color);
  }
}

export default SketchExample;