import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ConfirmationButton } from './ConfirmationButton';
import { ConfirmationForm } from './ConfirmationForm';

// Forwards `motion` functionality to the card detail component.
const MotionConfirmationForm = motion(ConfirmationForm, {
  forwardMotionProps: true,
});

export const Confirmation = () => {
  const [openForm, setOpenForm] = useState(null);

  return (
    <AnimatePresence>
      <ConfirmationButton
        key='confirmation'
        onClick={() => setOpenForm(true)}
      />
      {openForm && (
        <MotionConfirmationForm
          key='confirmation-form'
          onClick={() => setOpenForm(false)}
        />
      )}
    </AnimatePresence>
  );
};
