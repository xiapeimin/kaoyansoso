import React from 'react';
import { PickerView } from 'antd-mobile';
import './picker.css';

/**pickerview测试 */
const season = [
  {
    label: '2021',
    value: '2021',
  },
  {
    label: '2022',
    value: '2022',
  },
  {
    label: '2023',
    value: '2023',
  },
  {
    label: '2024',
    value: '2024',
  },
  {
    label: '2025',
    value: '2025',
  }
];


export default class PickerViewExample extends React.Component {
  state = {
    value: null,
  };
  onChange = (value) => {
    console.log(value);
    this.setState({
      value:value
    });
  }
  onScrollChange = (value) => {
    console.log(value);
  }
  render() {
    return (
      <div className='absu_xpm'>      
        <PickerView
          data={season}
          cascade={false}
          value={this.state.value}
          onChange={this.onChange}       
        />       
      </div>
    );
  }
}