import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Box, Button, MenuItem, TextField } from '@mui/material';

import { Form, Field } from 'react-final-form';

import { validateSearchForm } from '../../validation/searchValidation';

function SearchForm() {
  const dispatch = useDispatch();

  const destinations = useSelector(state => state.destinations.items);

  const loading = useSelector(state => state.destinations.loading);

  const error = useSelector(state => state.destinations.error);

  const navigate = useNavigate();

  const hotelsLoading = useSelector(state => state.hotels.loading);

  const hotelsSuccess = useSelector(state => state.hotels.success);

  const hotels = useSelector(state => state.hotels.items);

  useEffect(() => {
    dispatch({
      type: 'DESTINATIONS_REQUEST',
    });
  }, [dispatch]);

  useEffect(() => {
    if (hotelsSuccess) {
      navigate('/hotels');
    }
  }, [hotelsSuccess, navigate]);

  const onSubmit = values => {
    dispatch({
      type: 'HOTELS_LOADING',
    });

    dispatch({
      type: 'SEARCH_HOTELS_REQUEST',
      payload: values,
    });
  };

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
                sx={{ flex: 2 }}
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
                sx={{ flex: 2 }}
              />
            )}
          </Field>

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
                sx={{ flex: 2 }}
              />
            )}
          </Field>

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
                sx={{ flex: 1 }}
              />
            )}
          </Field>

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
                sx={{ flex: 1 }}
              />
            )}
          </Field>

          <Button
            type="submit"
            variant="contained"
            disabled={hotelsLoading}
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
            {hotelsLoading ? 'SEARCHING...' : 'SUBMIT'}
          </Button>

          {error && <Box sx={{ color: 'red' }}>{error}</Box>}
        </Box>
      )}
    />
  );
}

export default SearchForm;
