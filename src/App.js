import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Nav, NavItem, NavLink as Link } from 'reactstrap';


//importing pages
import Home from './pages/Home';
import Cats from './pages/Cats';
import CatNew from './pages/CatNew';
// import cats from './cats';
import CatShow from './pages/CatShow';


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            cats: []
        }
        this.getCats()
    }
    componentnWillMount(){
      this.getCats();
  }

  createCat = (cat)=> {
  return fetch('http://localhost:3000/cats', {
    body: JSON.stringify(cat),  // <- we need to stringify the json for fetch
    headers: {  // <- We specify that we're sending JSON, and expect JSON back
        'Content-Type': 'application/json'
    },
    method: "POST"  // <- Here's our verb, so the correct endpoint is invoked on the server
  })
  .then((response) => {
      console.log(response)
    if(response.ok){
      return this.getCats()
    }
  })
}
    getCats = () => {
        return (fetch("http://localhost:3000/cats",
        {method: "GET"}
        ).then((response)=>{
            if(response.status === 200){
                return(response.json())
            }
        })
        .then((catsArray)=> {
            this.setState({cats: catsArray})
        }))
    }
//response= 404 so no return val need response 200
    deleteCat = (id) => {
        return (fetch(`http://localhost:3000/cats/${id}`,
        {method: "DELETE"}
        ).then((response) => {
            console.log(response);
            if(response.status === 200){
                return(response.json())
            }
        })
        .then((response)=> {
            console.log(response);
            if (response.ok){
                return this.getCats()
            }
        }))
    }


    render() {
    return (
         <Router>
            <div>
            <Nav className="navbar navbar-expand-md navbar-dark bg-primary">

              <div className="navbar-collapse collapse show" id="navbarColor01" >
                <div className="navbar-nav mr-auto">
                  <NavItem className="nav-item active">
                    <Link className="nav-link" href="/"><img src="/white-cat.webp" height="25px"/> Kitties Unhinged <div className="sr-only">(current)</div>
                    </Link>
                  </NavItem>
                  <NavItem className="nav-item">
                    <Link className="nav-link" href="/catnew">Make a Profile</Link>
                  </NavItem>
                  <NavItem className="nav-item">
                    <Link className="nav-link" href="/cats">Check out the Hot Kitties</Link>
                  </NavItem>
                  <NavItem className="nav-item">
                    <Link className="nav-link" href="#">About</Link>
                  </NavItem>
                </div>
              </div>
            </Nav>


              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/catnew" render={(props) =><CatNew  onSubmit={this.createCat} />}  />
                <Route exact path="/cats" render={(props) => <Cats cats={this.state.cats} />} />
                <Route path="/cats/:id" render={(props) => <CatShow onDelete={this.deleteCat} {...props} cats={this.state.cats} />} />
              </Switch>
            </div>
        </Router>
  )};
}

export default App;
