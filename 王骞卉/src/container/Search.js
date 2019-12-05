import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {NavBar,SearchBar} from 'antd-mobile';


export default class Search extends Component{
    constructor(){
        super();
        this.state = {
            flag:0,
            flag2:0
        }
    }

    componentDidMount(){
        this.autoFocusInst.focus();
    }
    
    render(){
        return (
            <div>
                {
                    /**
                     * <NavBar
                style={{background:'#66cccc',color:'#fff'}} 
                leftContent={<Link to={'/appTab'}><img src={require('../imgs/zjt.png')} /></Link>}
                mode="light"
                onLeftClick={() => console.log('onLeftClick')}
                ><span style={{color:'#fff'}}>搜索</span></NavBar>

                     */
                }
                <SearchBar placeholder="请输入" ref={ref => this.autoFocusInst = ref} onSubmit={this.submitText}/>

                <div className='searchbox_xpm'>
                    <div className={this.state.flag == 0 ? 'change_xpm' : 'old_xpm'} onClick={this.changeCol0}>全部</div>
                    <div className={this.state.flag == 1 ? 'change_xpm' : 'old_xpm'} onClick={this.changeCol1}>院校</div>
                    <div className={this.state.flag == 2 ? 'change_xpm' : 'old_xpm'} onClick={this.changeCol2}>题库</div>
                    <div className={this.state.flag == 3 ? 'change_xpm' : 'old_xpm'} onClick={this.changeCol3}>课程</div>
                    <div className={this.state.flag == 4 ? 'change_xpm' : 'old_xpm'} onClick={this.changeCol4}>热点</div>
                </div>

                <div className={this.state.flag2 == 1 ? 'hid show1' : 'show1'} onClick={this.hiddenBox}>
                    <div className='his'>
                        <span>搜索历史</span>
                        <span style={{float:'right'}}>清空</span>
                    </div>
                    <div className='exp'>
                        <div className='rm'>&nbsp;中南大学&nbsp;</div>
                        <div className='rm'>&nbsp;英语&nbsp;</div>
                        {
                            /**<span style={{borderRadius:'5px',background:'#bac5c5',fontSize:'18px',marginRight:'20px'}}>&nbsp;中南大学&nbsp;</span>
                        <span style={{borderRadius:'5px',background:'#bac5c5',fontSize:'18px',marginRight:'20px'}}>&nbsp;英语&nbsp;</span> */
                        }
                    </div>
                    <div className='clear'></div>
                    <div className='fir'>热门搜索</div>
                    <div className='exp2'>
                        <div className='rm'>&nbsp;免费课程&nbsp;</div>
                        <div className='rm'>&nbsp;软件工程&nbsp;</div>
                        <div className='rm'>&nbsp;英语&nbsp;</div>
                        <div className='rm'>&nbsp;考研真题&nbsp;</div>
                        <div className='rm'>&nbsp;题库&nbsp;</div>
                        <div className='rm'>&nbsp;大学排名&nbsp;</div>
                        <div className='rm'>&nbsp;心理学&nbsp;</div>
                    </div>
                    <div className='clear'></div>
                    
                </div>
                

                <div className='tt'></div>
            </div>       
        )
    }
    submitText = (e) => {
        console.log(e,'当前搜索');
    }

    hiddenBox = () => {
        this.setState({
            flag2:1
        })
    }
    changeCol0 = () => {
        this.setState({
            flag:0
        })
    }
    changeCol1 = () => {
        this.setState({
            flag:1
        })
    }
    changeCol2 = () => {
        this.setState({
            flag:2
        })
    }
    changeCol3 = () => {
        this.setState({
            flag:3
        })
    }
    changeCol4 = () => {
        this.setState({
            flag:4
        })
    }
}