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

  const searchParams = new URLSearchParams(document.location.search);
  const mode = searchParams.get('mode');

  return (
    <AnimatePresence>
      <ConfirmationButton
        key='confirmation'
        onClick={() => setOpenForm(true)}
      />
      {openForm && (
        <MotionConfirmationForm
          key='confirmation-form'
          iframeSrc={
            mode === 'ar'
              ? 'https://docs.google.com/forms/d/e/1FAIpQLScf38fmwtpChsDBRrvqi-QASLsPuLLXee9XlsV8ATecb4Briw/viewform?embedded=true'
              : 'https://docs.google.com/forms/d/e/1FAIpQLSfJk2XoMgDcdISrZ1LjdnG_RTccLXtLjTfVWSEs3_tCsq7JnA/viewform?embedded=true'
          }
          onClick={() => setOpenForm(false)}
        />
      )}
    </AnimatePresence>
  );
};
