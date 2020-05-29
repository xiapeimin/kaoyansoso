import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {Tag} from 'antd-mobile';


export default class Noteimg extends Component{
    constructor(){
        super();
        this.state = {
            //img:''
        };
    }

    render(){
        var {img,index} = this.props;
        return (
            <div id={`tag${index}`} style={{width:'100%',height:window.innerHeight*0.6,marginBottom:'3vw'}}>
                <Tag closable
                    key={index}
                    style={{width:'100%',height:window.innerHeight*0.6,padding:0,marginBottom:'3vw'}}
                    onClose={() => {
                        this.getdelimg(`nimg${index}`)
                    }}
                    afterClose={() => {                             
                        this.delimg(`tag${index}`)
                    }}
                >
                    <img id={`nimg${index}`} src={img} style={{width:'100%',height:window.innerHeight*0.6}} />
                </Tag>
            </div>
        )
    }
    getdelimg = (e)=> {
        const {ondel} = this.props;
        ondel(e);
    }
    delimg = (e)=> {
        const {del,index} = this.props;
        del(e);
    }
}

Noteimg.propTypes = {
    index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    del:PropTypes.func,
    ondel:PropTypes.func
}