import React from "react";
import { DashboardContainer } from "./dashboard.styles";
import Header from "../header/header";
import Sidebar from "../sidebar/sidebar";
import { cardContent } from "../../utils/utils";
import Card from "../reuseable-component/card/card";

//this component is the main dashboard of the application
const Dashboard = () => {
  return (
    <DashboardContainer>
      <aside>
        <Sidebar />
      </aside>
      <main>
        <Header />
        <div className="dashboardcontent">
          <div className="contentheader">
            <h1>Hello Eric Omotolani</h1>
            <p>Welcome to your dashboard</p>
          </div>
          <div className="cardcontainer">
            {cardContent.map((card, index) => {
              return (
                <Card
                  image={card.image}
                  title={card.title}
                  description={card.description}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </main>
    </DashboardContainer>
  );
};

export default Dashboard;
