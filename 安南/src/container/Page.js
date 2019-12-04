import React from 'react';

class Page2 extends React.Component{
constructor(props){ //构造函数
super(props);
this.state = {
mytext : '',
}
}

getData(){ //请求数据函数
fetch(`http://localhost:8081/`,{
method: 'GET'
}).then(res => res.text()).then(
data => {
this.setState({mytext:data})
}
)
}

componentWillMount(){
this.getData();
}

    render(){
return(
      <div>
         <div>{this.state.mytext}</div>
      </div>
);
}
}

export default Page2;