import React,{Component} from 'react';

export default class Topic extends Component{
    delete1(){
        var del=document.getElementById('del1');
        del.innerHTML='';
    }
    delete2(){
        var del=document.getElementById('del2');
        del.innerHTML='';
    }
    delete3(){
        var del=document.getElementById('del3');
        del.innerHTML='';
    }
    delete4(){
        var del=document.getElementById('del4');
        del.innerHTML='';
    }
    delete5(){
        var del=document.getElementById('del5');
        del.innerHTML='';
    }
    delete6(){
        var del=document.getElementById('del6');
        del.innerHTML='';
    }
    render(){
        return (
            <div>
            <table border="1">

                <tr>
                    <th style={{width:'220px',height:'62px'}}>序号</th>
                    <th style={{width:'220px',height:'62px'}}>用户名</th>
                    <th style={{width:'220px',height:'62px'}}>动态内容</th>
                    <th style={{width:'220px',height:'62px'}}>发布时间</th>
                    <th style={{width:'220px',height:'62px'}}>操作</th>
                </tr>
                <tr  id='del1'>
                <td style={{width:'220px',height:'62px',textAlign:'center'}}>1</td>
                <td style={{width:'220px',height:'62px',textAlign:'center'}}>张三</td>
                <td style={{width:'220px',height:'62px',textAlign:'center'}}>加油！</td>
                <td style={{width:'220px',height:'62px',textAlign:'center'}}>一小时前</td>
                <td style={{width:'220px',height:'62px',textAlign:'center'}}><span onClick={this.delete1}><button style={{backgroundColor:'red',color:'black'}}>删除</button></span></td>
                </tr>
                <tr  id='del2'>
                <td style={{width:'220px',height:'62px',textAlign:'center'}}>2</td>
                <td style={{width:'220px',height:'62px',textAlign:'center'}}>张三</td>
                <td style={{width:'220px',height:'62px',textAlign:'center'}}>加油！</td>
                <td style={{width:'220px',height:'62px',textAlign:'center'}}>一小时前</td>
                <td style={{width:'220px',height:'62px',textAlign:'center'}}><span onClick={this.delete2}><button style={{backgroundColor:'red',color:'black'}}>删除</button></span></td>
                </tr>
                <tr  id='del3'>
                <td style={{width:'220px',height:'62px',textAlign:'center'}}>3</td>
                <td style={{width:'220px',height:'62px',textAlign:'center'}}>张三</td>
                <td style={{width:'220px',height:'62px',textAlign:'center'}}>加油！</td>
                <td style={{width:'220px',height:'62px',textAlign:'center'}}>一小时前</td>
                <td style={{width:'220px',height:'62px',textAlign:'center'}}><span onClick={this.delete3}><button style={{backgroundColor:'red',color:'black'}}>删除</button></span></td>
                </tr>
                <tr  id='del4'>
                <td style={{width:'220px',height:'62px',textAlign:'center'}}>4</td>
                <td style={{width:'220px',height:'62px',textAlign:'center'}}>张三</td>
                <td style={{width:'220px',height:'62px',textAlign:'center'}}>加油！</td>
                <td style={{width:'220px',height:'62px',textAlign:'center'}}>一小时前</td>
                <td style={{width:'220px',height:'62px',textAlign:'center'}}><span onClick={this.delete4}><button style={{backgroundColor:'red',color:'black'}}>删除</button></span></td>
                </tr>
                <tr  id='del5'>
                <td style={{width:'220px',height:'62px',textAlign:'center'}}>5</td>
                <td style={{width:'220px',height:'62px',textAlign:'center'}}>张三</td>
                <td style={{width:'220px',height:'62px',textAlign:'center'}}>加油！</td>
                <td style={{width:'220px',height:'62px',textAlign:'center'}}>一小时前</td>
                <td style={{width:'220px',height:'62px',textAlign:'center'}}><span onClick={this.delete5}><button style={{backgroundColor:'red',color:'black'}}>删除</button></span></td>
                </tr>
                <tr  id='del6'>
                <td style={{width:'220px',height:'62px',textAlign:'center'}}>6</td>
                <td style={{width:'220px',height:'62px',textAlign:'center'}}>张三</td>
                <td style={{width:'220px',height:'62px',textAlign:'center'}}>加油！</td>
                <td style={{width:'220px',height:'62px',textAlign:'center'}}>一小时前</td>
                <td style={{width:'220px',height:'62px',textAlign:'center'}}><span onClick={this.delete6}><button style={{backgroundColor:'red',color:'black'}}>删除</button></span></td>
                </tr>
            </table>

            </div>       
        )
    }
}
