import React from 'react';
import {Form, FormGroup} from 'reactstrap';
import {Link, Redirect} from 'react-router-dom';


// this will be form for new cat pushed to state (with passed down logic)

class CatNew extends React.Component {
    constructor(){
        super()
        this.state = {
            success: false,
            form: {
                name: '',
                age: '',
                city: '',
                photo: '',
                bio: ''
            }
        }
    }
    handleSubmit = () => {
        this.props.onSubmit(this.state.form)
        .then(() => {
            this.setState({success: true})
        })
    }
    handleChange = (event) => {
        let {form} = this.state
        form[event.target.name]= event.target.value
        this.setState({form: form})
        console.log(form)
    }
    render(){
        let {name, age, city, photo, bio } = this.state.form
    return(
        <div>
            <h1>HEYY CAT NEW</h1>
            <Form>
              <fieldset>
                <legend>Sign Up to meet hotties & get unhinged ;)</legend>
                    <FormGroup className="form-group">
                        <label for="exampleInputEmail1">Name</label>
                            <input name="name" type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Full Name" value={name} onChange={this.handleChange}/>
                    </FormGroup>

                    <FormGroup className="form-group">
                        <label for="exampleSelect1">Age</label>
                            <select className="form-control" id="age" type="number" value={age} name="age" onChange={this.handleChange}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                                <option>13</option>
                                <option>14</option>
                                <option>15</option>
                                <option>16</option>
                                <option>17</option>

                                <option>18+</option>
                            </select>
                    </FormGroup>

                <FormGroup className="form-group">
                  <label for="exampleInputEmail1">City</label>
                  <input type="text" className="form-control" id="city" aria-describedby="emailHelp" placeholder="San Diego" value={city} name="city" onChange={this.handleChange}/>
                </FormGroup>

                <FormGroup className="form-group">
                  <label for="exampleTextarea">Bio</label>
                  <textarea className="form-control"  rows="3" id="bio" type="text" value={bio} name="bio" onChange={this.handleChange}></textarea>
                </FormGroup>
                <FormGroup className="form-group">
                  <label for="exampleInputFile">Upload a Photo of You</label>
                  <input type="file" className="form-control-file" id="photo" aria-describedby="fileHelp" name="photo" value={photo} onChange={this.handleChange}/>
                  <small id="fileHelp" className="form-text text-muted">Use a photo that shows your purrrsonality and kitty charm!</small>
                </FormGroup>
                <Link to={"/cats"}>
                <button onClick={this.handleSubmit} type="submit" className="btn btn-primary">Sign Me Up!</button></Link>
              </fieldset>
            </Form>

            {this.state.success &&
                <Redirect to="/cats" />
            }
                    </div>
    )
}
}

export default CatNew;
