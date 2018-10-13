import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu } from 'react-mdl';
import 'react-skeleton-css/styles/skeleton.2.0.4.css'


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://i.imgur.com/d9gUkTe.jpg) center / cover' }} >Project #1</CardTitle>
            <CardText>
              D-Chat, a chat app using API for trivia and GIPHY. Uses Firebase for user storage and chat history.
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/pezgrrl/D-Chat">GitHub</a></Button>
              <Button colored><a href="https://dexxel.github.io/D-Chat/index.html">Try it!</a></Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://i.imgur.com/XPoOvMr.jpg) center / cover' }} >Project #2</CardTitle>
            <CardText>
              Block Trade, cryptocurrency trading simulator, updated using React and mySQL.
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/pezgrrl/ReactProject2">GitHub</a></Button>
              <Button colored><a href="https://project2-crypto.herokuapp.com/">Try it!</a></Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
            </CardMenu>
          </Card>
        </div>


      )
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#000000', height: '176px', background: 'url(https://i.imgur.com/wa6fBdt.jpg) center / cover' }} >Crystal Collector</CardTitle>
            <CardText>
              Crystal game where the player tries to get the closest to a given number without going over.
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/pezgrrl/unit-4-game">GitHub</a></Button>
              <Button colored><a href="https://pezgrrl.github.io/unit-4-game/">Try it!</a></Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://i.imgur.com/yZrXouM.jpg) center / cover' }} >FriendFinder</CardTitle>
            <CardText>
              A survey that chooses a new friend for you based on your answers.
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/pezgrrl/FriendFinder">GitHub</a></Button>
              <Button colored><a href="https://friendfinderjm.herokuapp.com/">Heroku</a></Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://i.imgur.com/hV4PR44.jpg) center / cover' }} >Harry Potter Word Guess</CardTitle>
            <CardText>
              A Hangman style game with a Harry Potter theme. Includes music!
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/pezgrrl/word-guess-game">GitHub</a></Button>
              <Button colored><a href="https://pezgrrl.github.io/word-guess-game/">Try it!</a></Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
            </CardMenu>
          </Card>
        </div>

      )
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://i.imgur.com/mVMqFwm.jpg) center / cover' }} >Mongo-Scraper</CardTitle>
            <CardText>
              News scraper that feeds information from a MongoDB database and provides a user links from The Ringer. Can save articles and make notes.
        </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/pezgrrl/mongo-scraper">GitHub</a></Button>
              <Button colored><a href="https://agile-chamber-94747.herokuapp.com/">Try it!</a></Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://i.imgur.com/TUXtKxe.jpg) center / cover' }} >GIPHY</CardTitle>
            <CardText>
              API with gifs
        </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/pezgrrl/GIPHY">GitHub</a></Button>
              <Button colored><a href="https://pezgrrl.github.io/GIPHY/">Try it!</a></Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://i.imgur.com/px6Lw6N.jpg) center / cover' }} >Bamazon</CardTitle>
            <CardText>
              Storefront with inventory management using mySQL.
        </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/pezgrrl/Bamazon">GitHub</a></Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
            </CardMenu>
          </Card>
        </div>




      )
    }

  }



  render() {
    return (
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Projects</Tab>
          <Tab>Apps</Tab>
          <Tab>Apps2</Tab>
        </Tabs>


        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>


      </div>
    )
  }
}

export default Projects;
