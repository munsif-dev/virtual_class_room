import React, { useState } from "react";
import { Link } from "react-router-dom";

const CreateRoomPage = () => {
  const [votesToSkip, setVotesToSkip] = useState(3); // State to manage votes_to_skip

  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh", backgroundColor: "#f7f9fc" }}
    >
      <Grid item xs={12} md={6}>
        <Paper elevation={3} style={{ padding: "20px", borderRadius: "10px" }}>
          <Typography
            component="h1"
            variant="h4"
            align="center"
            gutterBottom
            style={{ color: "#3f51b5" }}
          >
            Create A Room
          </Typography>

          <Grid container spacing={3}>
            {/* Guest Control */}
            <Grid item xs={12} align="center">
              <FormControl component="fieldset" fullWidth>
                <FormHelperText>
                  <Typography
                    align="center"
                    variant="body2"
                    color="textSecondary"
                  >
                    Guest Control of Playback State
                  </Typography>
                </FormHelperText>
                <RadioGroup
                  row
                  defaultValue="true"
                  style={{ justifyContent: "center", marginTop: "10px" }}
                >
                  <FormControlLabel
                    value="true"
                    control={<Radio color="primary" />}
                    label="Play/Pause"
                  />
                  <FormControlLabel
                    value="false"
                    control={<Radio color="secondary" />}
                    label="No Control"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>

            {/* Votes to Skip */}
            <Grid item xs={12}>
              <FormControl fullWidth>
                <TextField
                  required
                  type="number"
                  variant="outlined"
                  label="Votes to Skip"
                  value={votesToSkip}
                  onChange={(e) => setVotesToSkip(e.target.value)}
                  inputProps={{ min: 1 }}
                  helperText="Set the number of votes required to skip a song"
                />
              </FormControl>
            </Grid>

            {/* Buttons */}
            <Grid item xs={12} align="center">
              <Box mt={2}>
                <Button
                  color="primary"
                  variant="contained"
                  size="large"
                  style={{ marginRight: "10px" }}
                >
                  Create Room
                </Button>
                <Button
                  color="secondary"
                  variant="outlined"
                  size="large"
                  to="/"
                  component={Link}
                >
                  Back
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default CreateRoomPage;
