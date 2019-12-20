import { Picker, List, WhiteSpace } from 'antd-mobile';
import { createForm } from 'rc-form';
import React from 'react';

import cll from '../imgs/cll.png';

const colorStyle = {
  display: 'inline-block',
  verticalAlign: 'middle',
  width: '16px',
  height: '16px',
  marginRight: '10px',
};
const colors = [
  {
    label:
    (<div>
      <span
        style={{ ...colorStyle, backgroundColor: '#fadbea' }}
      />
      <span>粉色</span>
    </div>),
    value: '#fadbea',
  },
  {
    label:
    (<div>
      <span
        style={{ ...colorStyle, backgroundColor: '#ffffff' }}
      />
      <span>白色</span>
    </div>),
    value: '#ffffff',
  },
  {
    label:
    (<div>
      <span
        style={{ ...colorStyle, backgroundColor: '#fde8a9' }}
      />
      <span>黄色</span>
    </div>),
    value: '#fde8a9',
  },
  {
    label:
    (<div>
      <span
        style={{ ...colorStyle, backgroundColor: '#bbe2e9' }}
      />
      <span>天蓝</span>
    </div>),
    value: '#bbe2e9',
  },
  {
    label:
    (<div>
      <span
        style={{ ...colorStyle, backgroundColor: '#dddddd' }}
      />
      <span>灰色</span>
    </div>),
    value: '#dddddd',
  },
];

var cl='#bfeaf2';
class Test extends React.Component {   //根据选择 切换单词列表
  state = {
    cols: 1,
    colorValue: ['#00FF00'],
    name:'单词清单列表'
  };

  render() {
    var cc = this.state.colorValue;
    return (<div>
      
      
      
        <Picker
          data={colors}
          value={this.state.colorValue}
          cols={1}
          onChange={this.onChangeColor}
        >
         <span>背景</span>
        </Picker>
              
     

    </div>);
  }

  onChangeColor = (color) => {
    this.props.parent.getChildrenMsg(this, color);
    this.setState({
      colorValue: color,
    });
    console.log(color);
    cl=color;
    // this.setState({
    //   colorValue: color[0],
    // });
    // console.log(color[0]);   //选择改变 切换单词列表
  };
}

const TestWrapper = createForm()(Test);

export default TestWrapper;