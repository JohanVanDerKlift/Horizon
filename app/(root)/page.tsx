import React from 'react';
import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSidebar from "@/components/RightSidebar";

const Home = () => {
    const loggedIn = { firstName: "Johan", lastName: "van der Klift", email: "johan@koomba.eu" };

    return (
        <div>
            <section className="home">
                <div className="home-content">
                    <header className="home-header">
                        <HeaderBox
                            type="greeting"
                            title="Welcome"
                            user={loggedIn?.firstName || 'Guest'}
                            subtext="Access and manage your account and transactions efficiently."
                        />
                        <TotalBalanceBox
                            accounts={[]}
                            totalBanks={1}
                            totalCurrentBalance={1250.35}
                        />
                    </header>

                    RECENT TRANSACTIONS
                </div>

                <RightSidebar
                    user={loggedIn}
                    transactions={[]}
                    banks={[{ currentBalance: 123.50 }, { currentBalance: 50.50 }]}
                />
            </section>
        </div>
    );
};

export default Home;