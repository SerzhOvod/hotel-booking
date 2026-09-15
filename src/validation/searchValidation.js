export function validateSearchForm(values) {
  const errors = {};

  if (!values.destination) {
    errors.destination = 'Destination is required';
  }

  if (!values.checkIn) {
    errors.checkIn = 'Check-in date is required';
  }

  if (!values.checkOut) {
    errors.checkOut = 'Check-out date is required';
  }

  if (!values.adults) {
    errors.adults = 'Adults is required';
  }

  if (values.checkIn && values.checkOut && values.checkOut <= values.checkIn) {
    errors.checkOut = 'Check-out must be after check-in';
  }

  return errors;
}
