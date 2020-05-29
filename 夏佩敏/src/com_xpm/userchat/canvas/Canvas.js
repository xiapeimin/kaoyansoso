import React from 'react';
import {NavBar,Toast,Slider,SegmentedControl} from 'antd-mobile';
import Draw from './drawnote';
import Color from './Color';
import "./Canvas.css";


export default class App extends React.PureComponent {
  constructor(){
    super();
    this.state={
      outColor:false,
      isearse:false,
      outTsize:false,
      isclick:true,
      storage:window.localStorage,
      fillstar:false,
      panCol:{
        r: '58',
        g: '53',
        b: '52',
        a: '100'
      }
    };
  }
  log = (name) => {
    return (value) => {
      console.log(`${name}: ${value}`);
    };
  }
  afterlog = (name) => {
    return (value) => {
      Draw.setLineWidth(value);
      console.log(`${name}: ${value}`);
    };
  }

  /* 导出 */
  exp() {
    let exportImg = Draw.exportImg();
    if(exportImg === -1) {
      Toast.info('什么都没有不能保存哦！', 2);
      return console.log('please draw!');
    }
    
    if(exportImg!=-1){
      this.props.parent.getCavsMsg(this, exportImg);
    }
    
  } 

  getStar = ()=> {
    if(this.state.fillstar==false){
      this.setState({
        fillstar:true
      });
      Draw.drawStar('pentagram');
    }else{
      this.setState({
        fillstar:false
      });
      Draw.drawStar('arc');
    }
  }

  render() {
    
    return (
      <div className='component-canvas'>
        
        <NavBar
          style={{width:'100%',color:'#000',position:'fixed',top:0}} 
          rightContent={<div><img src={this.state.fillstar ? require('./imgs/fillstar.png') : require('./imgs/star.png')} onClick={this.getStar} style={{marginRight:'1vw',marginTop:'-1vw'}} /><span onClick={this.exp.bind(this)}>完成</span></div>}
          leftContent={<div><img onClick={this.close} src={require('./imgs/closepage.png')} /> 涂鸦</div>}
          mode="light"
        ></NavBar>
         

        <div style={{height:window.innerHeight}} ref='canvas-wrap'></div>
      

        <div className='tool_cav'>
          <div><img src={require('./imgs/pan.png')} id='tool1' onClick={this.checktools} /></div>
          <div><img src={require('./imgs/tsize.png')} id='tool2' onClick={this.checktools} /></div>
          <div><img src={require('./imgs/back.png')} id='tool3' onClick={this.checktools} /></div>
          <div><img src={require('./imgs/go.png')} id='tool4' onClick={this.checktools} /></div>
          <div><img src={require('./imgs/clear.png')} id='tool5' onClick={this.checktools} /></div>
          <div><img src={this.state.isearse ? require('./imgs/easer.png') : require('./imgs/noearse.png')} id='tool6' onClick={this.checktools} /></div>
        </div>
        <div onClick={this.closeCol} className='color_cav center_xpmcs' style={this.state.outColor ? {display:'block',height:window.innerHeight} : {display:'none'}}><Color parent={this}/></div>
        {
          /**
           <div style={!this.state.outTsize ? {display:'block'} : {display:'none'}} className='allrange_cav'>
        <p className="sub-title">Simplest</p>
        <SegmentedControl values={['Segment1', 'Segment2']} />
        <p className="sub-title">TintColor</p>
        <SegmentedControl
          values={['Segment1', 'Segment2', 'Segment3']}
          tintColor={'#ff0000'}
          style={{ height: '40px', width: '250px' }}
        />
        </div>
           */
        }
        <div style={this.state.outTsize ? {display:'block'} : {display:'none'}} className='range_cav'>
          <p className='tsapn_cav1'>-</p>
          <div className='slider_cav'>
            <Slider
            defaultValue={2}
            min={0}
            max={30}
            onChange={this.log('change')}
            onAfterChange={this.afterlog('afterChange')}
            />
          </div>
          <p className='tsapn_cav2'>+</p>
        </div>
      </div>
    );
  }

  componentDidMount() {
    var storage = this.state.storage;
    if(storage.getItem('panColor')!=null){
      Draw.changeColor(storage.getItem('panColor'));
    }
    Draw.setLineWidth(2);
    Draw.drawStar('arc');
    Draw.init(this.refs['canvas-wrap']);
  }

  //画板工具选择
  checktools = (e)=> {
    var tid = e.target.id;
    console.log(tid);
    if(tid=='tool1'){
      this.setState({
        outColor:true
      });
    }else if(tid=='tool2'){
      console.log('点击/??');
      if(this.state.isclick){
        console.log('点击成功ll');
        this.setState({
          outTsize:true,
          isclick:false
        });
        setTimeout(()=>{
          this.setState({
            outTsize:false,
            isclick:true
          });
        },5000);
      }
    }else if(tid=='tool3'){
      //Toast.info('上一步',2);
      Draw.reBack();
    }else if(tid=='tool4'){
      //Toast.info('下一步',2);
      Draw.repeatDraw();
    }else if(tid=='tool5'){
      Draw.clear();
    }else if(tid=='tool6'){
      var storage = this.state.storage;
      if(!this.state.isearse){
        this.setState({
          isearse:true
        });
        Draw.changeColor({
          r: '255',
          g: '255',
          b: '255',
          a: '100'
        });
      }else{
        this.setState({
          isearse:false
        });
        Draw.changeColor(this.state.panCol);
        storage.setItem('panColor',this.state.panCol);
      }
    }
    
  }
  closeCol = ()=> {
    this.setState({
      outColor:false
    });
  }
  //设置当前画笔颜色
  getColorMsg = (result,colorvalue)=> {
    this.setState({
      panCol:colorvalue
    });
    if(!this.state.isearse){
      Draw.changeColor(colorvalue);
    }
  }
  //关闭画板
  close = ()=> {
    this.props.parent.getCavsMsg(this, 'close');
  }

  
}
