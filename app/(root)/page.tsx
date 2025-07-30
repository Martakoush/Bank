import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getLoggedInUser } from "@/lib/actions/user.actions";

export default async function Home() {

  const loggedIn = await getLoggedInUser()
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type='greeting'
            title='welcome'
            user={loggedIn?.name || 'guest'}
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
