import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ConfirmationButton } from './ConfirmationButton';
import { Form } from '../Form';

// Forwards `motion` functionality to the card detail component.
const MotionConfirmationForm = motion(Form, {
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
          iframeSrc='https://docs.google.com/forms/d/e/1FAIpQLSfJk2XoMgDcdISrZ1LjdnG_RTccLXtLjTfVWSEs3_tCsq7JnA/viewform?embedded=true'
          onClick={() => setOpenForm(false)}
        />
      )}
    </AnimatePresence>
  );
};
