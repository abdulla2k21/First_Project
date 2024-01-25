/**
 * Class Component Example
 * 
 * import React from 'react';
 * 
 * class Component_name extends React.Component{
 *  
 *      render(){
 *          return(
 *              html_content
 *          )
 *      }
 *  
 * }
 * 
 * export default Component_name;
 * 
 */

import React from 'react';

class ClassComponent extends React.Component{

    /**
     * Constructor :
     *      to call the parent class constructor.
     *      to declare a default state.
     *      to bind the event handlers globally.
     * 
     * Syntax :
     *      constructor(props){
     *          super(props);// 
     *          -- it calls the parent the class constructor, 
     *          -- it has to be first statement inside the constructor
     *          //state declaration
     *      }
     * 
     */

    //constructor creation
    constructor(props){
        //calling parent class constructor
        super(props);

        //declaring default state
        this.state = {
            course : "JavaScript",
            days : "40",
            importantTopics : {
                topic1 : "Component",
                topic2 : "State Managment",
                topic3 : "Context Api"
            }
        }

        //binding event handler globally
        this.changeCourse = this.changeCourse.bind(this);
    }

    //event handler
    changeCourse(){
        //updating state using setState() method
        this.setState({
            course : "React JS"
        })
    }

    render(){
        return(
            <>
                <h2>Class Component Example</h2>
                <h4>UserName : {this.props.userObject.loggedUserName} </h4>
                <h4>Age : {this.props.userObject.age} </h4>
                <h4>Address : {this.props.userObject.address.city} </h4>
                <h3>State Example</h3>
                <h4>Course : {this.state.course}</h4>
                <h4>ImportantTopics : {this.state.importantTopics.topic3}</h4>
                <button onClick={this.changeCourse} >Change Course</button>
                <button onClick={this.changeCourse} >Change Course</button>
            </>
        )
    }

}

export default ClassComponent;