import { useEffect, useState } from 'react';

import { Box, Button, MenuItem, TextField } from '@mui/material';

import { Form, Field } from 'react-final-form';

import { getDestinations } from '../../services/destinationService';
import { validateSearchForm } from '../../validation/searchValidation';

function SearchForm() {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  const onSubmit = values => {
    console.log('Form values:', values);
  };

  useEffect(() => {
    async function loadDestinations() {
      try {
        const data = await getDestinations();

        setDestinations(data);
      } catch (error) {
        console.error('Failed to load destinations:', error);
      } finally {
        setLoading(false);
      }
    }

    loadDestinations();
  }, []);

  return (
    <Form
      onSubmit={onSubmit}
      validate={validateSearchForm}
      initialValues={{
        adults: 1,
        children: 0,
      }}
      render={({ handleSubmit }) => (
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            width: '100%',
            display: 'flex',
            gap: 1.5,
            alignItems: 'center',
            mb: 2.5,
          }}
        >
          {/* Destination */}
          <Field name="destination">
            {({ input, meta }) => (
              <TextField
                {...input}
                select
                label="Destination"
                size="small"
                disabled={loading}
                error={meta.touched && Boolean(meta.error)}
                helperText={meta.touched && meta.error ? meta.error : ''}
                sx={{
                  flex: 2,
                }}
              >
                <MenuItem value="">Select destination</MenuItem>

                {destinations.map(destination => (
                  <MenuItem key={destination.id} value={destination.value}>
                    {destination.label}
                  </MenuItem>
                ))}
              </TextField>
            )}
          </Field>

          {/* Check in */}
          <Field name="checkIn">
            {({ input, meta }) => (
              <TextField
                {...input}
                type="date"
                label="Check in"
                size="small"
                error={meta.touched && Boolean(meta.error)}
                helperText={meta.touched && meta.error ? meta.error : ''}
                slotProps={{
                  inputLabel: {
                    shrink: true,
                  },
                }}
                sx={{
                  flex: 2,
                }}
              />
            )}
          </Field>

          {/* Check out */}
          <Field name="checkOut">
            {({ input, meta }) => (
              <TextField
                {...input}
                type="date"
                label="Check out"
                size="small"
                error={meta.touched && Boolean(meta.error)}
                helperText={meta.touched && meta.error ? meta.error : ''}
                slotProps={{
                  inputLabel: {
                    shrink: true,
                  },
                }}
                sx={{
                  flex: 2,
                }}
              />
            )}
          </Field>

          {/* Adults */}
          <Field name="adults">
            {({ input, meta }) => (
              <TextField
                {...input}
                type="number"
                label="Adults"
                size="small"
                error={meta.touched && Boolean(meta.error)}
                helperText={meta.touched && meta.error ? meta.error : ''}
                slotProps={{
                  htmlInput: {
                    min: 1,
                  },
                }}
                sx={{
                  flex: 1,
                }}
              />
            )}
          </Field>

          {/* Children */}
          <Field name="children">
            {({ input }) => (
              <TextField
                {...input}
                type="number"
                label="Children"
                size="small"
                slotProps={{
                  htmlInput: {
                    min: 0,
                  },
                }}
                sx={{
                  flex: 1,
                }}
              />
            )}
          </Field>

          {/* Submit */}
          <Button
            type="submit"
            variant="contained"
            sx={{
              height: 40,
              px: 3,
              borderRadius: 0,
              backgroundColor: '#f9a000',
              flex: 1,
              '&:hover': {
                backgroundColor: '#e89100',
              },
            }}
          >
            SUBMIT
          </Button>
        </Box>
      )}
    />
  );
}

export default SearchForm;
