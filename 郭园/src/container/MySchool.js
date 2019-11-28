import React, { Component } from 'react'
import xuexiao from '../images/xuexiao.jpg'
import { NavBar, Icon, Tabs } from 'antd-mobile'
import {Link} from 'react-router-dom';
export default class AppHome extends Component {
    render() {
        return (
            <div>
                <Link to='/my'>
                <NavBar
                    style={{backgroundColor:'#66CCCC',color:'white',height:'50px'}}
                    
                    icon={<Icon type="left" style={{ color:'white'}}/>}
                    onLeftClick={() => console.log('onLeftClick')}
                >我的研校</NavBar>
                </Link>
                <div style={{width:'100%',height:'80px',fontSize:'20px',backgroundColor:'white',
                    borderBottomColor:'#DDDDDD',borderBottomStyle:'solid',borderBottomWidth:'3px',
                    borderTopColor:'#DDDDDD',borderTopStyle:'solid',borderTopWidth:'3px'}}>
                    <p style={{float:'left',padding:'10px'}}>我的研校</p>
                    <p style={{float:'right',padding:'10px',color:'#AAAAAA'}}>河北师范大学</p>
                </div>
                <div style={{width:'100%',height:'80px',fontSize:'20px',backgroundColor:'white',
                    borderBottomColor:'#DDDDDD',borderBottomStyle:'solid',borderBottomWidth:'3px',}}>
                    <p style={{float:'left',padding:'10px'}}>考研专业</p>
                    <p style={{float:'right',padding:'10px',color:'#AAAAAA'}}>软件工程</p>
                </div>
                <div style={{backgroundColor:'white'}}>
                    <img src={xuexiao} alt="" style={{width:'90%',margin:'20px'}}/> 
                    <p style={{width:'90%',margin:'20px',fontSize:'15px',color:'#AAAAAA'}}>
                        河北师范大学（Hebei Normal University）位于河北省会石家庄市，由中华人民共和国
                        教育部与河北省人民政府共建，是一所具有百年历史和光荣传统的省属重点大学，河北省
                        重点支持的国家一流大学建设一层次高校。是中国较早成立、规模较大的高等师范院校之
                        一，入选卓越教师培养计划实施高校、教育部来华留学示范基地建设高校。</p>
                    <p style={{width:'90%',marginLeft:'20px',fontSize:'15px'}}>河北师范大学研究生学院</p>
                    <p style={{width:'90%',margin:'20px',fontSize:'15px',color:'#AAAAAA'}}>
                        河北师范大学研究生教育始于1978年，是国务院学位委员会批准的首批硕士学位授予单位，
                        1998年被批准为博士学位授予单位，2002年我校生物学博士后流动站正式挂牌成立。 
　　                    多年来，河北师范大学研究生教育工作稳步发展，特别是1996年合校以来，研究生教育工作
                        呈现出了快速、健康发展的良好势头。 
　　                    学位授权专业的层次、数量、覆盖范围显著提高。目前，有博士后科研流动站1个；经国务院
                        学位委员会批准的博士学位授权一级学科1个，博士学位授权学科、专业24个；硕士学位授权
                        一级学科11个，硕士学位授权学科、专业90个(含博士、硕士学位授权一级学科所包括的二级
                        学科、专业点)；学科专业覆盖哲学、法学、经济学、文学、历史学、教育学、管理学、理学
                        、工学等九大学科门类。 
                    </p>
                </div>
            </div>
        )
    }
}
