import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";

export default function Home() {

  const loggedIn = {firstName:'Mohammad',lastName:'Martakoush',email:'Martakoush.mhd@gmail.com'}
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type='greeting'
            title='welcome'
            user={loggedIn?.firstName || 'guest'}
            subtext='Access and manage your account and transaction efficiently'
          ></HeaderBox>
          <TotalBalanceBox
            accounts={[1,2,3]}
            totalBanks = {1}
            totalCurrentBalance= {1250.37}
          ></TotalBalanceBox>
        </header>

      </div>

      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance: 127},{}]}
      ></RightSidebar>
    </section>
  );
}
