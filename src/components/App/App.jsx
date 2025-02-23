//components
import Profile from "../Profile/Profile.jsx";
import FriendsList from "../FriendsList/FriendsList.jsx";
import TransactionHistory from "../TransactionHistory/TransactionHistory.jsx";
import Background from "../Background/Background.jsx";
//data
import userData from "../Data/userData.json";
import friends from "../Data/friendsData.json";
import transactions from "../Data/transactionHistory.json";
//styles
//app
export default function App() {
  return (
    <Background>
      <section className="section">
        <div className="container">
          <Profile user={userData} />
          <FriendsList friends={friends} />
          <TransactionHistory transactions={transactions} />
        </div>
      </section>
    </Background>
  );
}
