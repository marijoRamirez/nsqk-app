import React from 'react';
import Countdown from 'react-countdown';
import { Typography, Box } from '@mui/material';

const CountdownTimer = ({ targetDate }) => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return (
        <Typography variant="h4" color="primary" fontWeight="bold">
          ¡El concierto de NSQK ha EMPEZAO!
        </Typography>
      );
    } else {
      return (
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mt: 3, p: 2, bgcolor: '#f5f5f5', borderRadius: 2 }}>
          <Typography variant="h3">{days}d</Typography>
          <Typography variant="h3">:</Typography>
          <Typography variant="h3">{hours}h</Typography>
          <Typography variant="h3">:</Typography>
          <Typography variant="h3">{minutes}m</Typography>
          <Typography variant="h3">:</Typography>
          <Typography variant="h3">{seconds}s</Typography>
        </Box>
      );
    }
  };

  return <Countdown date={targetDate} renderer={renderer} />;
};

export default CountdownTimer;