import { Picker, List, WhiteSpace } from 'antd-mobile';
import { createForm } from 'rc-form';
import React from 'react';


const colors = [
  {
    label:
    (<div>     
      <span>Word List01</span>
    </div>),
    value: '1',
  },
  {
    label:
    (<div>
      <span>Word List02</span>
    </div>),
    value: '2',
  },
  {
    label:
    (<div>    
      <span>Word List03</span>
    </div>),
    value: '3',
  },
  {
    label:
    (<div>    
      <span>Word List04</span>
    </div>),
    value: '4',
  },
  {
    label:
    (<div>    
      <span>Word List05</span>
    </div>),
    value: '5',
  },
  {
    label:
    (<div>    
      <span>Word List06</span>
    </div>),
    value: '6',
  },
  {
    label:
    (<div>    
      <span>Word List07</span>
    </div>),
    value: '7',
  },
  {
    label:
    (<div>    
      <span>Word List08</span>
    </div>),
    value: '8',
  },
  {
    label:
    (<div>    
      <span>Word List09</span>
    </div>),
    value: '9',
  },
  {
    label:
    (<div>    
      <span>Word List10</span>
    </div>),
    value: '10',
  },
];

class Test extends React.Component {   //根据选择 切换单词列表
  state = {
    cols: 1,
    colorValue: 1,
    name:'单词清单列表'
  };

  render() {
    return (<div>
      <WhiteSpace size="lg" />
      <List style={{ backgroundColor: 'white' }} className="picker-list">
      
        <Picker
          data={colors}
          value={this.state.colorValue}
          cols={1}
          onChange={this.onChangeColor}
        >
          <List.Item arrow="horizontal"><span style={{fontSize:'5vw',color:'#07533e'}}>{this.state.name}</span></List.Item>
        </Picker>
              
      </List>

    </div>);
  }

  onChangeColor = (color) => {
    this.setState({
      colorValue: color[0],
    });
    console.log(color[0]);   //选择改变 切换单词列表
  };
}

const TestWrapper = createForm()(Test);

export default TestWrapper;