import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

import { makeGetPostLikes } from '../../redux/selectors';
import { showMoreLikes } from '../../redux/action-creators';
import UserName from './user-name';
import { preventDefault } from '../../utils';
import throbber16 from 'assets/images/throbber-16.gif';

const renderLike = (item, i, items) => (
  <span>{items.length}</span>
);

const PostLikes = (props) => {
  if (!props.users.length) {
    return <div/>;
  }

  const userList = [...props.users];

  if (props.omittedLikes) {
    userList.push({
      id: 'more-likes',
      isLoadingLikes: props.isLoadingLikes,
      omittedLikes: props.omittedLikes,
      showMoreLikes: () => props.showMoreLikes(props.postId)
    });
  }

  const renderedLikes = userList.map(renderLike);

  const iconClasses = classnames({
    'likes-icon': true,
    'likes-icon-liked': props.didILikePost,
    'fa-stack': true
  });

  return (
    <span>{renderedLikes}</span>
  );
};

function makeMapStateToProps() {
  const getPostLikes = makeGetPostLikes();

  return (state, ownProps) => {
    return {
      ...getPostLikes(state, ownProps)
    };
  };
}

function mapDispatchToProps(dispatch) {
  return {
    showMoreLikes: (...args) => dispatch(showMoreLikes(...args))
  };
}

export default connect(makeMapStateToProps, mapDispatchToProps)(PostLikes);
