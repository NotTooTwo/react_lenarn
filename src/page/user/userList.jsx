import React, { Component } from 'react';
import '../../css/userList.css';


function CellCol(props) {
  if(!props.list || props.list.length===0){
    return 
  }
  var dom = props.list.map((item,key)=>
    <ul className="cell-col" key={item.id}>
      <li className="cell-1">{item.id}</li>
      <li className="cell-2">{item.name}</li>
      <li className="cell-2">{item.tel}</li>
      <li className="cell-3">{(new Date(item.time)).toLocaleString()}</li>
      <li className="cell-3">
        <button className="btn small">delete</button>
      </li>                    
    </ul>
  );
  return (<div>{dom}</div>);
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
      searchState:{
        keyWord:'',
        resultList:[]
      },
    };
    this.keyWordChange=this.keyWordChange.bind(this)
  }
  keyWordChange(e){
    var key = e.target.value
    this.setState((preState,props) => ({searchState:Object.assign(preState.searchState,{keyWord:key})}),function(){    
        // this.state.uList.map((item)=>(
        //     if()
        //   )
        // )          
      }
    )
  }
  render() {
    return (
      <div>
        <div className="search-box">
          <input type="text" onInput={this.keyWordChange} value={this.state.searchState.keyWord} placeholder="place input name"/><button className="btn">search</button>
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
              <CellCol list={this.state.uList}></CellCol>
                {/* {CellCol(this.state.uList)} */}
            </div>
          </div>
        </div>
      </div>
     
    );
  }
}

export default UserList;
