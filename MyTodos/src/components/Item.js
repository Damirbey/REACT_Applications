import React,{Component} from 'react';
import PropTypes from 'prop-types';

export class Item extends Component{
    getStyle=()=>{
        return{
            padding:'10px',
            textDecoration:this.props.Item.completed ? 'line-through':'none',
            border:'1px #ccc solid',
            backgroundColor:'#f4f4f4'
              }
    }
        
    
    
 render()
 {
   const{id,title}=this.props.Item;
   return(
   <div style={this.getStyle()}>
    <p><input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/> {title}
    <button style={btnStyle} onClick={this.props.deleteTodo.bind(this,id)}>x</button>
    </p>
   </div>)
 }
}

//CSS styling for the delete button
const btnStyle={backgroundColor:"red",
               color:"#fff",
               padding:"5px 8px",
               border:"none",
               float:"right"}
               
//PropType for AllTodos
Item.propTypes={
 Item:PropTypes.object.isRequired,
 markComplete:PropTypes.func.isRequired,
 deleteTodo:PropTypes.func.isRequired
}


export default Item;
