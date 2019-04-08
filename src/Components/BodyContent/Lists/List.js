import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import CustomListContent from './CustomListContent';
import SvgIcon from '@material-ui/core/SvgIcon';
import loadAsh from 'lodash';

const styles = theme => ({
  root: {
    display: 'flex',
  },
});

function ChapterIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z" />
    </SvgIcon>
  );
}


class CustomList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleClickAboutJava = (event) => {
    this.setState(state => ({ open: !state.open }));
    console.log(this.props.chapter.subChapters);
  };

  render() {
    const { classes } = this.props;

    return (
      <div >
        {!loadAsh.isEmpty(this.props.chapter.subChapters) && (
          <div>
            <ListItem button onClick={this.handleClickAboutJava}>
              <ListItemIcon>
                <ChapterIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText inset primary={this.props.chapter.chapterName} />
              {this.state.open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {this.props.chapter.subChapters.map(subChapters => {
                  return <CustomListContent subChapter={subChapters} onSelectNewSubchapter={this.props.onSelectNewSubchapter} />
                })}
              </List>
            </Collapse>
          </div>
        )}
        {loadAsh.isEmpty(this.props.chapter.subChapters) && (
          <div>
            <ListItem button onClick={this.handleClickAboutJava}>
              <ListItemIcon>
                <ChapterIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText inset primary={this.props.chapter.chapterName} />
            </ListItem>
          </div>
        )}
      </div>
    )
  }
}

CustomList.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(CustomList);