import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const styles = theme => ({
  listItemText: {
    fontSize: '0.85em',
  },
});

class CustomListContent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;
    return (
      <ListItem button onClick={() => this.props.onSelectNewSubchapter(this.props.subChapter)}>
        <ListItemText  className={classes.listItemText} inset primary={this.props.subChapter} />
      </ListItem>
    )
  }
}

CustomListContent.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(CustomListContent);