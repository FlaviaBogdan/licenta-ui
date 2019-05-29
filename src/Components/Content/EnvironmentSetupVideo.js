import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 'auto',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 5}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%',
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
  opts: {
    width: '100%',
    height: '100%',
  }
});
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];


let videos = null;

class Album extends React.Component {
  constructor(props){
    super(props);
    console.log(this.props.videoContent);
    if(this.props.videoContent === "Sintaxa de baza"){
      videos = require('./YoutubeContent/VideosES.json');
    }
    if(this.props.videoContent === "Mostenire"){
      videos = require('./YoutubeContent/VideosInheritance.json');
    }
    if(this.props.videoContent === "Structuri de date"){
      videos = require('./YoutubeContent/VideosDataStructures.json');
    }
    if(this.props.videoContent !== "Sintaxa de baza" && this.props.videoContent !== "Structuri de date" && this.props.videoContent !== "Mostenire"){
      videos = require('./YoutubeContent/VideosES.json');
    }

  }
  componentDidMount() {
      window.scrollTo(0, 0)
    }
  render(){
  const { classes } = this.props;

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Typography variant="h5" gutterBottom paragraph>
          Video-uri despre: {this.props.videoContent}
        </Typography>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          <Grid container spacing={24}>
            {videos.videos.map(videoItem => (
              <Grid item key={videoItem.key} sm={4} md={4} >
                <Card className={classes.card}>
                <iframe src={videoItem.link}
        frameBorder='0'
        allow='autoplay; encrypted-media'
        allowFullScreen
        height='290'
        title='video'
/>
               
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {videoItem.title}
                    </Typography>
                    <Typography>
                      {videoItem.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </main>
    </React.Fragment>
  );
}
}

Album.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Album);