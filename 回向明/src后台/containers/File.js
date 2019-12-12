import React,{Component} from 'react';

export default class AppNear extends Component{
    delete1(){
        var del1=document.getElementById('del1');
        del1.innerHTML='';
    }
    delete2(){
        var del2=document.getElementById('del2');
        del2.innerHTML='';
    }
    delete3(){
        var del3=document.getElementById('del3');
        del3.innerHTML='';
    }
    delete4(){
        var del4=document.getElementById('del4');
        del4.innerHTML='';
    }
    delete5(){
        var del5=document.getElementById('del5');
        del5.innerHTML='';
    }
    delete6(){
        var del6=document.getElementById('del6');
        del6.innerHTML='';
    }

    render(){
        return (
            <div>
<table border="1">
<tr>
    <th style={{width:'220px',height:'50px'}}>序号</th>
    <th style={{width:'220px',height:'50px'}}>文件名</th>
    <th style={{width:'440px',height:'50px'}}>文件内容</th>
    <th style={{width:'220px',height:'50px'}}>操作</th>
</tr>
<tr id='del1'>
<td style={{width:'220px',height:'50px',textAlign:'center'}}>1</td>
<td style={{width:'220px',height:'50px',textAlign:'center'}}>真题1</td>
<td style={{width:'440px',height:'50px',textAlign:'center'}}>真题..</td>
<td style={{width:'220px',height:'50px',textAlign:'center'}}>
    <button onClick={this.delete1} style={{backgroundColor:'red'}}>删除</button></td>
</tr>

<tr id='del2'>
<td style={{width:'220px',height:'50px',textAlign:'center'}}>2</td>
<td style={{width:'220px',height:'50px',textAlign:'center'}}>ppt1</td>
<td style={{width:'440px',height:'50px',textAlign:'center'}}>真题..</td>
<td style={{width:'220px',height:'50px',textAlign:'center'}}>
    <button onClick={this.delete2} style={{backgroundColor:'red'}}>删除</button></td>
</tr>

<tr id='del3'>
<td style={{width:'220px',height:'50px',textAlign:'center'}}></td>
<td style={{width:'220px',height:'50px',textAlign:'center'}}></td>
<td style={{width:'440px',height:'50px',textAlign:'center'}}></td>
<td style={{width:'220px',height:'50px',textAlign:'center'}}>
    <button onClick={this.delete3} style={{backgroundColor:'red'}}>删除</button></td>
</tr>

<tr id='del4'>
<td style={{width:'220px',height:'50px',textAlign:'center'}}></td>
<td style={{width:'220px',height:'50px',textAlign:'center'}}></td>
<td style={{width:'440px',height:'50px',textAlign:'center'}}></td>
<td style={{width:'220px',height:'50px',textAlign:'center'}}>
    <button onClick={this.delete4} style={{backgroundColor:'red'}}>删除</button></td>
</tr>

<tr id='del5'>
<td style={{width:'220px',height:'50px',textAlign:'center'}}></td>
<td style={{width:'220px',height:'50px',textAlign:'center'}}></td>
<td style={{width:'440px',height:'50px',textAlign:'center'}}></td>
<td style={{width:'220px',height:'50px',textAlign:'center'}}>
    <button onClick={this.delete5} style={{backgroundColor:'red'}}>删除</button></td>
</tr>

<tr id='del6'>
<td style={{width:'220px',height:'50px',textAlign:'center'}}></td>
<td style={{width:'220px',height:'50px',textAlign:'center'}}></td>
<td style={{width:'440px',height:'50px',textAlign:'center'}}></td>
<td style={{width:'220px',height:'50px',textAlign:'center'}}>
    <button onClick={this.delete6} style={{backgroundColor:'red'}}>删除</button></td>
</tr>
</table>

            </div>       
        )
    }
}