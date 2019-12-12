import React,{Component} from 'react';

export default class Topic extends Component{
  constructor(){
      super();
      this.state={
         all:[{
             username:'',
             topic:'',
             time:''
         }]
      }
  }
  componentDidMount(){
    fetch(`http://zy.xpmwqhzygy.top/all`,{
        method: 'GET'
      })
      .then((res)=>res.json())
      .then((res)=>{
          console.log(res.data);
          console.log(typeof(res.data));
          this.setState({
              all:res.data
          });
      });
  }
    delItem(index){
        var pri = this.state.all[index].uid+this.state.all[index].topic;
       
        fetch(`http://zy.xpmwqhzygy.top/del/${pri}`,{
            method:"DELETE",
            headers:{'Content-Type': 'application/x-www-form-urlencoded'}
            // body:JSON.stringify(post)
        })
        .then(res =>res.json())
        .then(data =>{
             console.log(data);
        })
        var del=document.getElementById(index);
        del.innerHTML='';
        
    }
    render(){
        return (
           
            <div>
            <table border="1">

                <tr >
                    <th style={{width:'220px',height:'62px'}}>序号</th>
                    <th style={{width:'220px',height:'62px'}}>用户名</th>
                    <th style={{width:'220px',height:'62px'}}>动态内容</th>
                    <th style={{width:'220px',height:'62px'}}>发布时间</th>
                    <th style={{width:'220px',height:'62px'}}>操作</th>
                </tr>
                    {
                        this.state.all.map((item,index)=>(    
                        <tr id={`${index}`}>
                            <td style={{width:'220px',height:'50px',textAlign:'center'}}> {index}</td>
                            <td style={{width:'220px',height:'50px',textAlign:'center'}}>{item.username}</td>
                            <td style={{width:'220px',height:'50px',textAlign:'center'}}> {item.topic}</td>
                             <td style={{width:'220px',height:'50px',textAlign:'center'}}>{item.time}</td>
                             <td style={{width:'220px',height:'50px',textAlign:'center'}}><button onClick={()=>this.delItem(index)}  style={{backgroundColor:'red',color:'black'}}>删除</button></td>
                         </tr>
                         
                        ))
                    }
              </table>
            </div>       
        )
    }
}
