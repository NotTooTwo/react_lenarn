import React, { Component } from 'react';
import '../../css/userList.css';


class CellCol extends Component {
  constructor(props){
    super(props);
    this.deleteUser=this.deleteUser.bind(this);
  }
  deleteUser(key){
    this.props.toDeleteUser(key);
  }
  render() {
    console.log(this.props)
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
class UserList extends Component {
  constructor(props){
    super(props);
    this.state={
      uList:[
        {
          id:'0001',
          name:'buatier',
          tel:15012345678,
          time:1521788019674
        },
        {
          id:'0002',
          name:'name1',
          tel:15012345679,
          time:1521788119674
        },
        {
          id:'0003',
          name:'name2',
          tel:15012345670,
          time:1521778019674
        },
        {
          id:'0004',
          name:'name3',
          tel:15012345690,
          time:1521718019674
        },
      ],
      showList:[
        {
          id:'0001',
          name:'buatier',
          tel:15012345678,
          time:1521788019674
        },
        {
          id:'0002',
          name:'name1',
          tel:15012345679,
          time:1521788119674
        },
        {
          id:'0003',
          name:'name2',
          tel:15012345670,
          time:1521778019674
        },
        {
          id:'0004',
          name:'name3',
          tel:15012345690,
          time:1521718019674
        },
      ],
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
          <input type="text" onInput={this.keyWordChange} value={this.state.searchState.keyWord} placeholder="place input name"/>
          <button className="btn" onClick={this.toSearch}>search</button>
        </div>
        <div className="UserList">
          <div className="table-list">
            <ul className="cell-header cell-col">
              <li className="cell-1">ID</li>
              <li className="cell-2">Name</li>
              <li className="cell-2">Tel</li>
              <li className="cell-3">Create Time</li>
              <li className="cell-3">Operation</li>              
            </ul>
            <div className="cell-body">
              <CellCol list={this.state.showList} toDeleteUser={this.deleteUser}></CellCol>
                {/* {CellCol(this.state.uList)} */}
            </div>
          </div>
        </div>
      </div>
     
    );
  }
}

export default UserList;
