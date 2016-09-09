import React from 'react';
import ReactNative from 'react-native';

const {
  StyleSheet,
  View,
  Text,
} = ReactNative;

const {
  PropTypes,
  Component,
} = React;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: '#ffffff',
  },

});

class GameList extends Component {

  render() {
    const { game } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{game.getPlayerIds()}</Text>
      </View>
    );
  }

}

GameList.propTypes = {
  game: PropTypes.object,
};

module.exports = GameList;
