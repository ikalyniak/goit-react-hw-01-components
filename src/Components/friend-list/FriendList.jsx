// import PropTypes from 'prop-types';

function FriendList({ avatar, className, isOnline }) {
  return (
    <div className="friendList">
      <ul className="friend-list">
        <li className="item">
          <span className="status"></span>
          <img className="avatar" src="" alt="" width="48" />
          <p className="name"></p>
        </li>
      </ul>
    </div>
  );
}

export default FriendList;
