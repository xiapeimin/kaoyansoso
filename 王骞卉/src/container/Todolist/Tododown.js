import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Todoinput extends Component{
    constructor(props) {     
        super(props);
        this.tranfUp = this.tranfUp.bind(this);
        this.delete = this.delete.bind(this);
    }
    render() {
        const {item} = this.props;
        return (
            <div style={{
                border: '1px solid #848080',
                width: '85%',
                height: '40px',
                marginBottom: "5px",
                borderRadius:'5px',
                lineHeight:'40px',
                fontSize:'25px',
                paddingLeft:'10px',
                marginLeft:'7.5%'
                }}>         
                <input style={{
                    width:'20px',
                    height:'20px'
                }} type="checkbox" value="" onClick={this.tranfUp} checked/>{item} 
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

      tranfUp(){
        const {tranfItem,index} = this.props;
        tranfItem(index);
      }
      delete() {
        const {del,index} = this.props;
        del(index);
      }

}

Todoinput.propTypes = {
    item: PropTypes.string.isRequired,
    index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    tranfItem:PropTypes.func,
    del:PropTypes.func
}

   