import React, {Component} from 'react';
import CustAppBar from './AppBar';
import Foods from './Foods';
import Shop from './Shop';
import SwipeableViews from 'react-swipeable-views';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, {Tab} from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import Zoom from 'material-ui/transitions/Zoom';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import EditIcon from 'material-ui-icons/ModeEdit';
import UpIcon from 'material-ui-icons/KeyboardArrowUp';
import classNames from 'classnames';
import amber from 'material-ui/colors/amber';

function TabContainer(props) {
  const {children, dir} = props;

  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
    height: '100%',
    position: 'relative',
    minHeight: 200,
  },
  fab: {
    position: 'abolute',
    bottom: 10,
    left: 0,
    right: 0,
  },
  fabColor: {
    backgroundColor: amber[600],
  },
  tabWidth: {
    maxWidth: '100%',
    mindWidth: '100%',
  },
});

class Bridget extends Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({value});
  }

  handleChangeIndex = index => {
    this.setState({value: index});
  };

  render() {
    const {classes, theme} = this.props;
    const transitionDuration = {
      enter: theme.transitions.duration.enteringScreen,
      exit: theme.transitions.duration.leavingScreen,
    };

    const fabs = [
      {
        color: 'primary',
        className: classNames(classes.fab, classes.fabColor),
        icon: <AddIcon />,
      },
      {
        color: 'accent',
        className: classNames(classes.fab, classes.fabColor),
        icon: <EditIcon />,
      },
    ];
    return (
      <div className={classes.root}>
        <CustAppBar />
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
            >
              <Tab className={classes.tabWidth} label="Food" />
              <Tab className={classes.tabWidth} label="Shopping List" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
          >
          <TabContainer dir={theme.direction}>
            <Foods />
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <Shop />
          </TabContainer>
        </SwipeableViews>
        {fabs.map((fab, index) => (
          <Zoom
            appear={false}
            key={fab.color}
            in={this.state.value === index}
            timeout={transitionDuration}
            enterDelay={transitionDuration.exit}
            unmountOnExit
            >
              <Button fab className={fab.className} color={fab.color}>
                {fab.icon}
              </Button>
            </Zoom>
        ))}
      </div>
    );
  }
}

export default withStyles(styles, {withTheme:true})(Bridget);
