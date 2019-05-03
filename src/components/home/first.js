import React from "react";
import "./home.css";

import Button from "@material-ui/core/Button";

const first = () => {
  return (
    <>
      <div className="container">
        <div className="item">
          <h1>SERVICES</h1>
          <div className="nest-item">
            <p>
              Unicus NTS is a game development outsourcing company, which
              develops and delivers games for different companies. Our company
              also focuses on 2D and 3D modeling, high and low poly modeling,
              branding, full art-style development and texturing. Outsourcing
              our company can help you to serve better work delivery savings
              both your time and money. Our goal is to do business in
              economically responsible manner while delivering superior
              long-term value and meeting your needs and established schedule.
            </p>
          </div>
          <Button variant="outlined" color="primary">
            More
          </Button>
        </div>
        <div className="item">
          <h1>RESIST</h1>
          <div className="nest-item">
            <p className="text">
              Artificial intelligence made a revolution in the world, so people
              began to war with automated machines. After several years of hard
              battle, the number of people reached to several million. While
              machines with artificial intelligence began to build their own
              cities, machines, weapons and environment on the earth. In the
              same time people living under the ground, created their own
              civilization and lifestyle. They prepared for guerilla movement
              and attack. The main hero of the game lost his family, his hand
              and leg in the war. Through years we had only one aim: to win the
              enemy!
            </p>
          </div>
          <Button variant="outlined" color="primary">
            More
          </Button>
        </div>
      </div>

      <div className="container2">
        <div className="itemProjects">
          <h1>LATEST PROJECTS</h1>
          We want to present you our latest projects, cause we have too much of
          them, so here you can see them with all their adorableness.
        </div>

        <div className="itemProjects">
          We want to present you our latest projects, cause we have too much of
          them, so here you can see them with all their adorableness.
        </div>

        <div className="itemProjects">
          We want to present you our latest projects, cause we have too much of
          them, so here you can see them with all their adorableness.
        </div>
      </div>
    </>
  );
};

export default first;
