import React from "react";
import "./home.css";

import Button from "@material-ui/core/Button";

const third = () => {
  return (
    <>
      <h1 className="h1">CUSTOMERS FEEDBACK</h1>
      <div className="feedContainer">
        <div className="feedbackItem">
          <h2>Epic games</h2>
          <p>Mar 22, 2018</p>
          It was one of the most important breakthroughs for us. All the famous
          Epic Games has placed our model as a picture of the day.
        </div>

        <div className="feedbackItem">
          <h2>Cuberside</h2>
          <p>Sep 29, 2018</p>
          "This is the coolest work I've ever seen in an unreal engine, I will
          be happy to share with everyone, unfortunately very short videos, we
          are waiting for news from you..."
        </div>

        <div className="feedbackItem">
          <h2>Epic games</h2>
          <p>Aug 8, 2018</p>
          "It was just a random weekend before guys from Unicus NTS have sent me
          this! What is even more exciting is I don't have the slightest idea
          what this is all about and Vahan Shahinyan just won't tell me anything
          :) I'm super excited though that Cyberside inspires people for cool
          content like this piece"
        </div>
      </div>

      <div className="contact">
        <h1>READY TO MAKE YOUR PRODUCTION UNLIMITED?</h1>
        <Button color="primary" variant="contained">
          CONTACT US NOW
        </Button>
      </div>

      <div>
        UNICUS NTS, Resist, and their respective logos are trademarks or
        registered trademarks of Unicus NTS, Inc. in the United States of
        America and elsewhere. All other trademarks are property of their
        respective owners. All rights reserved.
      </div>
    </>
  );
};

export default third;
