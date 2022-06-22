import React from "react";
import { Grid, Tooltip } from "@mui/material";
const team = require("../data/teamMembers.json");

const TeamMembers = () => {
  return (
    <Grid container spacing={2}>
      {team.map((member, i) =>
        <Grid item xs={12} md={6}>
          {member.link ?
            <a href={member.link} target="_blank" rel="noopener noreferrer" className="teammateWrapper" key={i}>
              {member.image ?
                (member.name === "Litzia Galvan" ?
                  <Tooltip title="Meg Mindlin Photography" placement="bottom">
                    <img src={require("../images/UCSC Team/" + member.image)} alt={member.name + "'s Profile Picture"} className="teammatePic" />
                  </Tooltip>
                  :
                  <img src={require("../images/UCSC Team/" + member.image)} alt={member.name + "'s Profile Picture"} className="teammatePic" />
                )
                :
                <div className="teammateInitialsWrapper">
                  <h1 className="teammateInitials">{member.initials}</h1>
                </div>
              }
              <div className="marginLeft20">
                <h2>{member.name}</h2>
                <p className="grayText">
                  {member.role}
                  <br></br>
                  {member.education}
                </p>
              </div>
            </a>
            :
            <div className="teammateWrapper" key={i}>
              {member.image ?
                (member.name === "Litzia Galvan" ?
                  <Tooltip title="Meg Mindlin Photography" placement="bottom">
                    <img src={require("../images/UCSC Team/" + member.image)} alt={member.name + "'s Profile Picture"} className="teammatePic" />
                  </Tooltip>
                  :
                  <img src={require("../images/UCSC Team/" + member.image)} alt={member.name + "'s Profile Picture"} className="teammatePic" />
                )
                :
                <div className="teammateInitialsWrapper">
                  <h1 className="teammateInitials">{member.initials}</h1>
                </div>
              }
              <div className="marginLeft20">
                <h2>{member.name}</h2>
                <p className="grayText">
                  {member.role}
                  <br></br>
                  {member.education}
                </p>
              </div>
            </div>
          }
        </Grid>
      )}
    </Grid>
  );
};

export default TeamMembers;