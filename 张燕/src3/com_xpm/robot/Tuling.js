import React,{Component} from 'react';
import ReactDOM from 'react-dom';

/**图灵机器人测试页 */
export default class FetchDemo extends React.Component {
    //构造函数中初始化状态值，meg：输入的值，respon:机器人返回值，megArray:用户发送的值
    constructor() {
      super()
      this.state = {
        meg: '',
        respon: [],
        megArray: []
      }
    }
    //input的onChange绑定事件
    handleData(e) {
      this.setState({
        meg: e.target.value
      })
    }
    //自定义函数，处理发送数据及返回的网络数据的保存操作
    sendMessage() {
      var message = this.state.meg
      if(message === ''){
        alert('不能发送空白消息哦')
      }else{
            this.setState({
        megArray: [...this.state.megArray, message]
      })
      //锁定当前环境
      var that = this
      //使用fetch工具  e825286159f9f57db1b597995d72ae2b
      var func = fetch('http://www.tuling123.com/openapi/api?key=b1773eff0fe948dca2d1745202b26e87&info=' + message, {
        method: 'POST',
        type: 'cors'
      }).then(function(response) {
        return response.json()
      }).then(function(detail) {
        return (that.setState({
          respon: [...that.state.respon, detail.text]
        }, () => {
          //ReactDOM.findDOMNode()找到真正的节点
          var el = ReactDOM.findDOMNode(that.refs.msgList);
          el.scrollTop = el.scrollHeight;
        }))
      })
      this.state.meg = ''
      }
    }
  
    render() {
      var meg = this.state.meg
      var megArray = this.state.megArray
      var respon = this.state.respon
  
      return (
        <div className="content">
          //ref的使用
          <div className="msg-list" ref="msgList">
            {megArray.map((elem,index) => (
              <div className="container" key={index}>
                <div className="message">{elem}</div>
                <div className="response">{respon[index]}</div>
              </div>)
             )}
          </div>
           <div className="fixedBottom">
             <input className="input" value={meg} onChange={this.handleData.bind(this)} />
             <button className="button" onClick={this.sendMessage.bind(this)}>发送</button>
           </div>
        </div>
      )
    }
  }
