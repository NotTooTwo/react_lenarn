import React, { Component } from 'react';
import '../../css/menu.css';


class typeBox extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    if(!this.props.list || this.props.list.length===0){
      return null
    };
    var dom = this.props.list.map((item,key)=>
      <ul className="cell-col" key={item.id}>
        <li className="cell-1">{item.id}</li>
        <li className="cell-2">{item.name}</li>
        <li className="cell-2">{item.tel}</li>
        <li className="cell-3">{(new Date(item.time)).toLocaleString()}</li>
        <li className="cell-3">
          <button className="btn small" onClick={this.deleteUser.bind(this,key)}>delete</button>
        </li>                    
      </ul>
    );
    return (<div>{dom}</div>);
  }
};
class Menu extends Component {
  constructor(props){
    super(props);
    this.state={
      searchState:{
        keyWord:'',
        resultList:[]
      },
    };
    this.keyWordChange=this.keyWordChange.bind(this);
    this.toSearch = this.toSearch.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }
  keyWordChange(e){
    var key = e.target.value
    this.setState((preState,props) => ({searchState:Object.assign(preState.searchState,{keyWord:key})}),function(){    
        console.log(this.state.searchState)        
      }
    )
  }
  toSearch(){
    var list ;
    if(this.state.searchState.keyWord===''){
      this.setState({showList:this.state.uList})
      return;
    }
    list = this.state.uList.filter((item)=>item.name.indexOf(this.state.searchState.keyWord)===-1?false:true);
      this.setState({showList:list})
  }
  deleteUser(key){
    console.log(key);
    this.setState((pre,props)=>{
      pre.showList.splice(key,1);
      return {showList:pre.showList}
    })
    this.setState((pre,props)=>{
      pre.uList.splice(key,1);
      return {showList:pre.uList}
    })
  }
  render() {
    return (
      <div>
        <div className="search-box">
          <button className="btn" onClick={this.toSearch}>+ type</button>
          <button className="btn" onClick={this.toSearch}>+ item</button>        
          <input type="text" onInput={this.keyWordChange} value={this.state.searchState.keyWord} placeholder="place input name"/>
          <button className="btn" onClick={this.toSearch}>search</button>
        </div>
        <div className="content">
          <div className="type-box">
            <div className="type-cell type-header"> <span>name</span> 
               <span className="more">
                <b>+</b>  
                <ul>
                  <li>edit</li>
                  <li>delete</li>   
                </ul>
              </span> 
            </div>
            <ul className="type-body">
              <li className="type-cell">
                no item
              </li>
            </ul>
          </div>
        </div>
      </div>
     
    );
  }
}

export default Menu;
