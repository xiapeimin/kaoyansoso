import React,{Component} from 'react';


export default class User extends Component{
    constructor(){
        super();
        this.state={
            username:'',
            phone:'',
            email:'',
            head:'',
            data:[{
                username:'',
                phone:'',
                email:''
            }]
        }
    }
    componentDidMount(){
        fetch(`http://xpm.xpmwqhzygy.top/user`,{
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
        var phone = document.getElementById(pid).innerHTML;
        //后台数据库删除      
        /*
        fetch(`http://xpm.xpmwqhzygy.top/deluser/${phone}`,{
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
                    <th style={{width:'220px',height:'50px'}}>头像</th>
                    <th style={{width:'220px',height:'50px'}}>用户名</th>
                    <th style={{width:'220px',height:'50px'}}>手机号</th>
                    <th style={{width:'220px',height:'50px'}}>邮箱</th>
                    <th style={{width:'220px',height:'50px'}}>操作</th>
                </tr>

                {
                    this.state.data.map((item,index)=>(
                        <tr>
                            <td style={{width:'220px',height:'50px',textAlign:'center'}}><img src={require('../images/loginusr.png')} /></td>
                            <td style={{width:'220px',height:'50px',textAlign:'center'}}>用户名</td>
                            <td style={{width:'220px',height:'50px',textAlign:'center'}} id={`p${index}`}>{item.phone}</td>
                            <td style={{width:'220px',height:'50px',textAlign:'center'}}>{item.email}</td>
                            <td style={{width:'220px',height:'50px',textAlign:'center'}}><span onClick={this.delete}><button id={`del${index}`} style={{backgroundColor:'red',color:'black'}}>删除</button></span></td>
                        </tr>
                    ))
                }
                
                
            </table>
            </div>       
        )
    }
}
