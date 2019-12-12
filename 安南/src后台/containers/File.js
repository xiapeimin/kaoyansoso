import React,{Component} from 'react';

export default class AppNear extends Component{
        constructor(){
            super();
            this.state={
                id:'',
                name:'',
                type:'',
                head:'',
                data:[{
                    id:'',
                    name:'',
                    type:''
                }]
            }
        }
        componentDidMount(){
            fetch(`https://annan.yflzy.cn/user`,{
                method: 'GET'
                })
                .then((res)=>res.json())
                .then((res)=>{
                    console.log(res.data);
                    this.setState({
                        data:res.data
                    });    
                });
        }
    
    
        delete = (e) => {
            console.log('删除',e.target.id);
            var id = e.target.id.slice(3);
            var pid = 'p'+id;
            var name = document.getElementById(pid).innerHTML;
            //后台数据库删除      
            /*
            fetch(`http://xpm.xpmwqhzygy.top/deluser/${name}`,{
                    method:"DELETE",
                    headers:{'Content-Type': 'application/x-www-form-urlencoded'}
                })
                .then(res =>res.json())
                .then(data =>{
                    console.log(data);
                });*/
    
            var del = document.getElementById(e.target.id).parentElement.parentElement.parentElement;
            del.innerHTML='';
            
        }
     
        render(){
            return (
                <div>
                <table border="1">
    
                    <tr>
                        <th style={{width:'220px',height:'50px'}}>序号</th>
                        <th style={{width:'220px',height:'50px'}}>文件名</th>
                        <th style={{width:'220px',height:'50px'}}>题库类型</th>
                        <th style={{width:'220px',height:'50px'}}>操作</th>
                    </tr>
    
                    {
                        this.state.data.map((item,index)=>(
                            <tr>
                                <td style={{width:'220px',height:'50px',textAlign:'center'}}>{item.id}</td>
                                <td style={{width:'220px',height:'50px',textAlign:'center'}} id={`p${index}`}>{item.name}</td>
                                <td style={{width:'220px',height:'50px',textAlign:'center'}}>{item.type}</td>
                                <td style={{width:'220px',height:'50px',textAlign:'center'}}><span onClick={this.delete}><button id={`del${index}`} style={{backgroundColor:'red',color:'black'}}>删除</button></span></td>
                            </tr>
                        ))
                    }
                    
                    
                </table>
                </div>       
            )
        }
    }