import React, { useState } from "react";
import { addFish } from "../actions/fishesActions";
import { connect } from "react-redux";

const Input = (props) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");

  const onSubmit = (e) => {
    
    if (name === "" || type === "") {
      return e.preventDefault(alert("Please Fill Fields"));
    } else {
      e.preventDefault();
    const newArray = {
      name,
      type,
    }
    
    props.addFish(newArray);
  }
  };
  return (
    <div className="form-signin">
      <h1 className="h3 mb-3 font-weight-normal">Fish Form</h1>

      <div>
        <input
          type="text"
          placeholder="Name Of Fish"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Type Of Fish"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />

        <button
          className="btn btn-sm btn-primary btn-block mt-2"
          type="submit"
          onClick={onSubmit}
        >
          Enter
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  fish: state.fish,
});

const mapDisPatchToProps = {
  addFish,
};

export default connect(mapStateToProps, mapDisPatchToProps)(Input);

// class TodosList extends Component{
//     state = {
//         todo: "",
//         todos: [ ]
//     }

//    handleSubmit = e => {
//      e.preventDefault();
//      const newItem = {
//        title: this.state.todo,
//        id: uuidv4()
//      };
//      const updatedItem = [...this.state.todos, newItem];
//      this.setState({
//        todos: updatedItem,
//        todo: ""
//      });
//    };

//     handleChange = (e) => {
//        this.setState({
//          todo : e.target.value
//        })
//    }
//        render (){
//            const { todo } = this.state;
//          return (
//             <div>
//                  <form>
//                  <input
//              type="text"
//              name="todo"
//              value={todo}
//              onChange={this.handleChange} />

//              </form>
//              <button onClick={this.handleSubmit}>add</button>
//             </div>
//           );
//        }

//  }

//  export default TodosList;



//MULTIPLE INPUTS WITH FUNCTION

// const Input = (props) => {
//   const [name, setName] = useState(" ");
//   const [type, setType] = useState(" ");

//   const onSubmit = () => {
//     const newArray = {
//       id: uuidv4(),
//       name,
//       type,
//     };

//     setTimeout(() => {
//       console.log(newArray);
//     }, 1500);

//     console.log("props>>>", props);

//     props.addFish(newArray);
//   };
//   return (
//     <div className="form-signin">
//       <h1 className="h3 mb-3 font-weight-normal">Fish Form</h1>

//       <div>
//         <input
//           type="text"
//           placeholder="Name Of Fish"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Type Of Fish"
//           value={type}
//           onChange={(e) => setType(e.target.value)}
//         />

//         <button
//           className="btn btn-sm btn-primary btn-block mt-2"
//           type="submit"
//           onClick={onSubmit}
//         >
//           Enter
//         </button>
//       </div>
//     </div>
//   );
// };


