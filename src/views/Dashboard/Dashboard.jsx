import React, { Component } from "react";
import axios from "axios";
import explicit from "../../Icons/explicit.png";
import dev from "../../Icons/dev.png";
import movie from "../../Icons/movie.png";
import food from "../../Icons/food.png"
import celebrity from "../../Icons/celebrity.png";
import science from "../../Icons/science.png";
import sport from "../../Icons/sport.png";
import political from "../../Icons/political.png";
import religion from "../../Icons/religion.png";
import animal from "../../Icons/animal.png";
import history from "../../Icons/history.png";
import music from "../../Icons/music.png";
import travel from "../../Icons/travel.png";
import career from "../../Icons/career.png";
import money from "../../Icons/money.png";
import fashion from "../../Icons/fashion.png";

import { Grid, Row, Col } from "react-bootstrap";
import { Card } from "components/Card/Card.jsx";
import { RandomCard } from "components/RandomCard/RandomCard.jsx";
import { CategoryCard } from "components/CategoryCard/CategoryCard.jsx";
const baseurl="https://api.chucknorris.io"

class Dashboard extends React.Component {
  constructor(props){
    super(props);
    this.state={
      randomJoke:{
        value:""
      },
      categories:{}

    }
  }
  componentDidMount(){
    //get random joke
    axios.get(`${baseurl}/jokes/random`).then((response)=>{
      const RandomJoke=response.data.results.map(response=>{
            return({
              value:`{response.value}`
            })
      })
    console.log(RandomJoke);
    this.setState({randomJoke:RandomJoke})
    })
//get a list of categories
axios.get(`${baseurl}/jokes/categories`).then((response)=>{
  const Category=response.data.results
  console.log(Category);
  this.setState({categories:Category})
})
  }

  render() {
    return (
      <div className="content">
        <Grid fluid>
        <Row>
            <Col md={12}>
              <Card
                title="Random Joke Aye!"
                content={
                  <div className="random joke">
                    <Row>
                    <RandomCard randomjoke={this.props.value}>
                    {/* <img src={explicit} alt="explicit.png" width="40" height="40" />
                    <img src={dev} alt="dev.png" width="40" height="40" />
                    <img src={movie} alt="movie.png" width="40" height="40" />
                    <img src={food} alt="food.png" width="40" height="40" />
                    <img src={celebrity} alt="celebrity.png" width="40" height="40" />
                    <img src={science} alt="science.png" width="40" height="40" />
                    <img src={sport} alt="sport.png" width="40" height="40" />
                    <img src={political} alt="political.png" width="40" height="40" />
                    <img src={religion} alt="religion.png" width="40" height="40" />
                    <img src={animal} alt="animal.png" width="40" height="40" />
                    <img src={history} alt="history.png" width="40" height="40" />
                    <img src={music} alt="music.png" width="40" height="40" />
                    <img src={travel} alt="travel.png" width="40" height="40" />
                    <img src={career} alt="career.png" width="40" height="40" />
                    <img src={money} alt="money.png" width="40" height="40" />
                    <img src={fashion} alt="fashion.png" width="40" height="40" /> */}
                    </RandomCard>
                   </Row>
                  </div>
                }
              />
            </Col>
            </Row>
          <Row>
           <CategoryCard></CategoryCard>
          </Row>
        </Grid>
      </div>
    );
  }
}
export default Dashboard;

// const mapStateToProps=(state)=>{
//   return state
// };

// export default connect(mapStateToProps, actionCreators)(Dashboard);

// const mapStateToProps=(state)=>{