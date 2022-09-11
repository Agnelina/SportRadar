import { useEffect, useState } from "react";
import { useStopwatch } from "react-timer-hook";
import { Button, Grid } from "@mui/material";
import "./SimulationBox.css";

type ButtonTextType = "Start" | "Restart" | "Finish";

export const SimulationBox = () => {
  const { seconds, minutes, start, pause, reset } = useStopwatch({
    autoStart: false,
  });
  const [buttonText, setButtonText] = useState<ButtonTextType>("Start");
  const teams = [
    "Germany",
    "Poland",
    "Brazil",
    "Mexico",
    "Argentina",
    "Uruguay",
  ];
  const [goals, setGoals] = useState<number[]>([0, 0, 0, 0, 0, 0]);
  const [isExpired, setExpired] = useState<boolean>(false);

  const handleClick = () => {
    switch (buttonText) {
      case "Start":
        start();
        setButtonText("Finish");
        break;
      case "Finish":
        pause();
        setButtonText("Restart");
        setExpired(true);
        break;
      case "Restart":
        reset();
        start();
        setButtonText("Finish");
        setGoals([0, 0, 0, 0, 0, 0]);
        break;
    }
  };

  useEffect(() => {
    if (minutes === 1 && seconds >= 30 && !isExpired) {
      pause();
      setButtonText("Restart");
      setExpired(true);
    }
    if (minutes === 0 && seconds === 1 && isExpired) {
      setExpired(false);
    }
  }, [seconds, minutes, isExpired, pause, setButtonText, setExpired]);

  useEffect(() => {
    if (seconds % 10 === 0 && !(minutes === 0 && seconds === 0) && !isExpired) {
      const newGoalIndex = Math.floor(Math.random() * goals.length);
      let newGoals = goals;
      newGoals[newGoalIndex] += 1;
      setGoals(newGoals);
      console.log("Goal");
    }
  }, [seconds, minutes, isExpired, goals, setGoals]);

  return (
    <div className="simulation-box">
      <Grid container maxWidth={500} margin={2} spacing={2}>
        <Grid item xs={8}>
          {teams[0]} vs {teams[1]}
        </Grid>
        <Grid item xs={4} data-testid="goals">
          {goals[0]} : {goals[1]}
        </Grid>
        <Grid item xs={8}>
          {teams[2]} vs {teams[3]}
        </Grid>
        <Grid item xs={4} data-testid="goals">
          {goals[2]} : {goals[3]}
        </Grid>
        <Grid item xs={8}>
          {teams[4]} vs {teams[5]}
        </Grid>
        <Grid item xs={4} data-testid="goals">
          {goals[4]} : {goals[5]}
        </Grid>
        <Grid item xs={12}>
          <Button variant="outlined" data-testid="button" onClick={handleClick}>
            {buttonText}
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
