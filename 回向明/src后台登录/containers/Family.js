import React,{Component} from 'react';


export default class AppNear extends Component{
    
    render(){
        return (
            <div>
                <div className='fam_xpm'>
                    <div style={{marginRight:'4.5%',background:'rgb(238, 133, 119)'}}><p>新增用户数</p><p>25</p></div>
                    <div style={{marginRight:'4.5%',background:'rgb(64, 192, 5)'}}><p>总用户数量</p><p>121</p></div>
                    <div style={{background:'rgb(88, 155, 231)'}}><p>用户动态数</p><p>78</p></div>
                </div>
            </div>       
        )
    }
}