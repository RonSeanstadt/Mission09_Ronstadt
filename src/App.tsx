import React, { useState, useEffect } from 'react';
import teams from './CollegeBasketballTeams.json';
import './App.css';

type TeamData = {
  school: string;
  name: string;
  city: string;
  state: string;
};

// Team card creater class
class Team extends React.Component<TeamData> {
  render() {
    const { school, name, city, state } = this.props;
    return (
      <div className="Team-Style">
        <h2>
          <b>School:</b> {school}
        </h2>
        <h3>
          <b>Mascot:</b> {name}
        </h3>
        <h3>
          <b>Location:</b> {city}, {state}
        </h3>
        <br />
      </div>
    );
  }
}

// Team card list function
function TeamList() {
  const [teamData, setTeamData] = useState<TeamData[]>([]);

  useEffect(() => {
    // Set the data from the imported JSON directly
    setTeamData(teams.teams);
  }, []);

  return (
    <div className="TeamList">
      {teamData.map((team, index) => (
        <Team
          key={index}
          school={team.school}
          name={team.name}
          city={team.city}
          state={team.state}
        />
      ))}
    </div>
  );
}

function Welcome() {
  return (
    <h1>
      This page lists out all of the NCAA basketball teams and their information
    </h1>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

export default App;
