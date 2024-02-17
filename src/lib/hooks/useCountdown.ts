import { useEffect, useRef, useState } from 'react';

type useCountdownParams = {
  minutes?: number;
  seconds?: number;
  autoStart?: boolean;
  onCompleted?: VoidFunction;
};

type Time = {
  minutes: number;
  seconds: number;
};

type Countdown = {
  minutes: number;
  seconds: number;
  isActive: boolean;
  isInactive: boolean;
  isRunning: boolean;
  isPaused: boolean;
  startCount: VoidFunction;
  pause: VoidFunction;
  resume: VoidFunction;
  reset: (time?: Time) => void;
};

const calculateInitialTime = ({
  minutes,
  seconds,
}: {
  minutes: number;
  seconds: number;
}): number => {
  const initialMinutes = minutes * 60 * 1000;
  const initialSeconds = seconds * 1000;
  const initialTime = initialMinutes + initialSeconds;

  return initialTime;
};

const calculateRemainingMinutes = (remainingTime: number): number =>
  Math.floor(remainingTime / (60 * 1000));

const calculateRemainingSeconds = (remainingTime: number): number =>
  Math.floor((remainingTime / 1000) % 60);

const useCountdown = ({
  minutes = 0,
  seconds = 0,
  autoStart = false,
  onCompleted,
}: useCountdownParams = {}): Countdown => {
  const id = useRef(0);

  // time
  const [remainingTime, setRemainingTime] = useState(
    calculateInitialTime({ minutes, seconds }),
  );

  // status
  const [isActive, setIsActive] = useState(false);
  const [isInactive, setIsInactive] = useState(true);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(
    () => {
      if (autoStart) {
        id.current = window.setInterval(calculateRemainingTime, 1000);

        setIsActive(true);
        setIsInactive(false);
        setIsRunning(true);
        setIsPaused(false);
      }

      return () => window.clearInterval(id.current);
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [autoStart],
  );

  const calculateRemainingTime = () => {
    setRemainingTime((time) => {
      if (time - 1000 <= 0) {
        window.clearInterval(id.current);
        onCompleted?.();

        setIsActive(false);
        setIsInactive(true);
        setIsRunning(false);
        setIsPaused(false);

        return 0;
      }

      return time - 1000;
    });
  };

  const pause = (): void => {
    if (isPaused || isInactive) {
      return;
    }

    window.clearInterval(id.current);

    setIsActive(true);
    setIsInactive(false);
    setIsRunning(false);
    setIsPaused(true);
  };

  const start = (): void => {
    if (isRunning) {
      return;
    }

    id.current = window.setInterval(calculateRemainingTime, 1000);

    setIsActive(true);
    setIsInactive(false);
    setIsRunning(true);
    setIsPaused(false);
  };

  const reset = (time: Time = { minutes, seconds }) => {
    window.clearInterval(id.current);

    if (autoStart) {
      id.current = window.setInterval(calculateRemainingTime, 1000);

      setIsActive(true);
      setIsInactive(false);
      setIsRunning(true);
      setIsPaused(false);
    } else {
      setIsActive(false);
      setIsInactive(true);
      setIsRunning(false);
      setIsPaused(false);
    }

    setRemainingTime(calculateInitialTime(time));
  };

  const countdown: Countdown = {
    minutes: calculateRemainingMinutes(remainingTime),
    seconds: calculateRemainingSeconds(remainingTime),
    isActive,
    isInactive,
    isRunning,
    isPaused,
    startCount: start,
    pause,
    resume: start,
    reset,
  };

  return countdown;
};

export default useCountdown;
