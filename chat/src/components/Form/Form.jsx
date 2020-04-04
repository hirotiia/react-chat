import React from 'react';
import './Form.css';
// import { render } from 'react-dom';
import Button from '../Button/Button';

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            body: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.sendBodyToParent = this.sendBodyToParent.bind(this);

    }
    

    handleChange(event){
        const field = event.target.name;
        this.setState({
            [field]: event.target.value,
        });
    }
    sendBodyToParent(event){
     const body = this.state.body.trim();
     if(!body){
         alert('何も入力されていません');
        //  処理を中断
        return;
     }

     if(typeof this.props.onSubmit === 'function'){
        this.props.onSubmit(body);

     }
     this.setState({
         body: ''
     });
    }
    render(){
        return(
            <div>
                <div className="Form-textarea">
                    <textarea 
                    onChange={this.handleChange}
                    type="text"
                    name="body"
                    cols="30"
                    rows="5"
                    value={ this.state.body }
                    ></textarea>
                </div>
                <Button onClickHandler={this.sendBodyToParent}>コメントする</Button>

            </div>
            
        );
    }

}

export default Form;