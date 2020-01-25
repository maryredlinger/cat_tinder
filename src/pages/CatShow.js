import React from 'react';
import cats from '../cats';
import {Link} from 'react-router-dom';


const CatShow = (props) => {
        const cardWidth = {"width": "400px"}
        const { id } = props.match.params
        const cat = props.cats.find((cat) => cat.id == parseInt(id))
        const nextCatIndex = props.cats.indexOf(cat)+1
        const nextCat = props.cats[nextCatIndex] ? props.cats[nextCatIndex].id : props.cats[0].id

        const lastCatIndex = props.cats.indexOf(cat) - 1

        const lastCat = props.cats[lastCatIndex] ? props.cats[lastCatIndex].id : props.cats[cats.length - 1].id

        const handleDelete = () => {
            console.log(props);
            props.onDelete(id)
        }

        return (
            <div className= "container">
                <div className= "row">
                    <div className="col d-flex justify-content-center">

                        <div className="card border-primary mb-3 text-center" style={cardWidth} >
                            <div className="card-header text-left">Age: {cat.age}, {cat.city}</div>
                                <div className="card-body">
                                <img src={cat.photo} width="300px" alt="profile pic"/>
                                    <h4 className="card-title"> {cat.name}</h4>
                                    <p className="card-text text-left">{cat.bio}</p>
                                </div>
                        </div>
                    </div>
                </div>
                <div className= "row d-flex justify-content-center justify-content-space-evenly">
                    <div className="d-flex align-items-end">
                        <div className= "col-sm">
                            <Link to={`/cats/${nextCat}`}>
                            <button className="btn btn-primary"> Back </button></Link>
                        </div>
                        <div className= "col-sm">
                            <Link to={"/cats"}>
                            <button onClick= {handleDelete} className="btn btn-primary"> Delete </button></Link>
                        </div>
                        <div className= "col-sm">
                            <Link to={`/cats/${nextCat}`}>
                            <button className="btn btn-primary"> Next </button></Link>
                        </div>
                    </div>
                </div>
            </div>
        )


}



export default CatShow;
