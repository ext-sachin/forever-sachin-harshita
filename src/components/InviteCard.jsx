import { motion } from "framer-motion";

export default function InviteCard({ open, setOpen }) {

  if (open) return null;

  return (

    <div className="invite-overlay">

      <motion.div
        className="invite-card"
        initial={{ scale: 0.7, opacity: 0, y: 80 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >

        <p className="invite-small">
          You are invited
        </p>

        <h1 className="invite-title">
          Sachin <span>❤</span> Harshitha
        </h1>

        <p className="invite-date">
          April 11–12 2026
        </p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="invite-btn"
          onClick={() => setOpen(true)}
        >
          Open Invitation
        </motion.button>

      </motion.div>

    </div>
  );
}