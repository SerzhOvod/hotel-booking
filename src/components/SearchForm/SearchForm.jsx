import { Box, Button, MenuItem, TextField } from '@mui/material';

import { Form, Field } from 'react-final-form';

import { validateSearchForm } from '../../validation/searchValidation';

function SearchForm() {
  const onSubmit = values => {
    console.log('Form values:', values);
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
          {/* Destination */}
          <Field name="destination">
            {({ input, meta }) => (
              <TextField
                {...input}
                select
                label="Destination"
                size="small"
                error={meta.touched && Boolean(meta.error)}
                helperText={meta.touched && meta.error ? meta.error : ''}
                sx={{
                  flex: 2,
                }}
              >
                <MenuItem value="New York">New York</MenuItem>

                <MenuItem value="Kyiv">Kyiv</MenuItem>

                <MenuItem value="London">London</MenuItem>
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
            {({ input }) => (
              <TextField
                {...input}
                type="number"
                label="Adults"
                size="small"
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
