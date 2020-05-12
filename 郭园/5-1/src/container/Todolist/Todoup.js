import React, { Component } from 'react';
import PropTypes from 'prop-types';
 
export default class Todoup extends Component {
    constructor(props) {   
        super(props);
        this.state = {
            checked:false
        }
        this.tranfDown = this.tranfDown.bind(this);
        this.delete = this.delete.bind(this);
    }

    render() {
        const {item} = this.props;
        return (
            <div style={{
              
              width: '85%',
              height: '40px',
              marginBottom:'5px',
              borderRadius:'5px',
              lineHeight:'40px',
              fontSize:'23px',
              paddingLeft:'10px',
              marginLeft:'7.5%'
            }}>
              <input style={{
                width:'20px',
                height:'20px',
                marginRight:'10px'
              }} type="checkbox" value="" onClick={this.tranfDown} checked={this.state.checked}/>{item} 
              <button style={{
                float:"right",
                marginRight:'10px',
                marginTop:'10px',
                width:'20px',
                height:'20px',
                borderRadius:'10px',
                border:'1px solid red'
              }} onClick={this.delete}></button>
            </div>            
        )
    }

    tranfDown() {
        const {tranfItem,index} = this.props;
        this.setState({
          checked:false
        })
        tranfItem(index);
    }
    delete(){
        const {del,index} = this.props;
        del(index);
    }
 
}

Todoup.propTypes = {
  item: PropTypes.string.isRequired,
  index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  tranfItem: PropTypes.func,
  del:PropTypes.func
}

 
