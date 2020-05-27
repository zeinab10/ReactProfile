import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div  className="projects-grid">
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover'}}>Skills Learning Application</CardTitle>
            <CardText>
            
            <hr/>
            
            </CardText>
            <CardActions border>
            <a  className ="social-link" href="https://github.com/brakluner/SkillLearningApp" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-github-square" aria-hidden="true"></i>
            </a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share"/>
            </CardMenu>
        </Card>
    </div>
    )
} else if (this.state.activaTab === 1) {
    return (
        // project 2
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover'}}>Covid-19 Application</CardTitle>
            <CardText>
           blah
            <hr/>
           blah
            </CardText>
            <CardActions border>
            <a  className ="social-link" href="https://github.com/bjork1/covid-19" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-github-square" aria-hidden="true"></i>
            </a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share"/>
            </CardMenu>
        </Card>
    )
} else if (this.state.activaTab === 2) {
    return (
        // project 3
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover'}}>AudioMind Application</CardTitle>
            <CardText>
                    
            </CardText>
            <CardActions border>
            <Button colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share"/>
            </CardMenu>
        </Card>
    )
}
}

render() {
return(
<div className="catagory-tabs">
    <Tabs activaTab={this.state.activaTab} onChange={(tabId) => this.setState({ activaTab: tabId })} ripple>
        <Tab>Project 1</Tab>
        <Tab>Project 2</Tab>
        <Tab>Project 3</Tab>
        <Tab></Tab>
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