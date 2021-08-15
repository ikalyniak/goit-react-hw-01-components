import './App.css';

import Profile from './Components/Profile/Profile';
import {
  name,
  tag,
  location,
  avatar,
  stats,
} from './Components/Profile/user.json';

import Statistics from './Components/Statistics/Statistics';
import statisticalData from './Components/Statistics/statistical-data.json';

import FriendList from './Components/friend-list/FriendList';
import friends from './Components/friend-list/friends.json';

import TransactionHistory from './Components/transaction-history/TransactionHistory';
import transactions from './Components/transaction-history/transactions.json';

function App() {
  return (
    <div className="App">
      <Profile
        name={name}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
