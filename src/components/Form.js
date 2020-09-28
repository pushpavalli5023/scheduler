import React from 'react';
import { useParams } from 'react-router-dom';

export default function Form({ date, time }) {
  const params = useParams();

  return (
    <div>
      <center>
        <h3>Request for Appointment</h3>
        <p id="date">Date: {date}</p>
        <p id="time">Time: {time}</p>
        <form>
          <label htmlFor="fname">Full name:</label>
          <input type="text" id="fname" name="fname" placeholder="Ex: 'Peter Parker'" />
          <br />
          <br />
          <label htmlFor="projname">Project name:</label>
          <input type="text" id="projname" name="projname" placeholder="Ex: 'Best Project'" />
          <br />
          <br />
          <label htmlFor="projdesc">Project description:</label>
          <input
            type="text"
            id="projdesc"
            name="projdesc"
            maxLength="1000"
            placeholder="Maximum of 1000 characters"
          />
          <br />
          <br />
          <label htmlFor="email">Email Address:</label>
          <input type="text" id="email" name="email" placeholder="Ex: 'peter.parker@marvel.com'" />
          <br />
          <br />
          <input type="submit" value="Submit"></input>
        </form>
      </center>
    </div>
  );
}
