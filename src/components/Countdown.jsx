import "../styles/countdown.css";
import { useEffect, useState } from "react";

// Framer Motion
import { AnimatePresence } from "framer-motion";

// Components
import CountdownItem from "./CountdownItem";
import NewYearMessage from "./newYearMessage/NewYearMessage";

const Countdown = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  const getCountdown = () => {
    const year = new Date().getFullYear() + 1;
    const timeRemaining = new Date(`${year}-1-1`) - new Date();
    let countdown = {};

    if (timeRemaining > 0) {
      countdown = {
        days: Math.floor(timeRemaining / (1000 * 60 * 60 * 24)),
        hours: Math.floor((timeRemaining / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((timeRemaining / 1000 / 60) % 60),
        seconds: Math.floor((timeRemaining / 1000) % 60),
      };
    }
    return countdown;
  };

  const [countdown, setCountdown] = useState(getCountdown());

  useEffect(() => {
    setTimeout(() => {
      setCountdown(getCountdown());
    }, 1000);

    if (
      countdown.days === 0 &&
      countdown.hours === 0 &&
      countdown.seconds === 0 &&
      countdown.seconds === 0
    ) {
      open();
    }
  }, [countdown]);

  return (
    <div className="counter">
      <CountdownItem
        digit={countdown.days}
        label={"DAYS"}     
      />
      <CountdownItem
        digit={countdown.hours.toString().padStart(2, "0")}
        label={"HOURS"}     
      />
      <CountdownItem
        digit={countdown.minutes.toString().padStart(2, "0")}
        label={"MINUTES"}     
      />
      <CountdownItem
        digit={countdown.seconds.toString().padStart(2, "0")}
        label={"SECONDS"}     
      />
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {modalOpen && (
          <NewYearMessage modalOpen={modalOpen} handleClose={close} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Countdown;
