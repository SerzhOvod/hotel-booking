import { Box, Button, MenuItem, TextField } from '@mui/material';

function SearchForm() {
  return (
    <Box
      component="form"
      sx={{
        width: '100%',
        display: 'flex',
        gap: 1.5,
        alignItems: 'center',
        mb: 2.5,
      }}
    >
      <TextField
        select
        label="Destination"
        size="small"
        sx={{
          flex: 2,
        }}
      >
        <MenuItem value="kyiv">Kyiv</MenuItem>
        <MenuItem value="lviv">Lviv</MenuItem>
        <MenuItem value="odesa">Odesa</MenuItem>
      </TextField>

      <TextField
        type="date"
        label="Check in"
        size="small"
        slotProps={{
          inputLabel: {
            shrink: true,
          },
        }}
        sx={{
          flex: 2,
        }}
      />

      <TextField
        type="date"
        label="Check out"
        size="small"
        slotProps={{
          inputLabel: {
            shrink: true,
          },
        }}
        sx={{
          flex: 2,
        }}
      />

      <TextField
        type="number"
        label="Adults"
        size="small"
        defaultValue={1}
        inputProps={{
          min: 1,
        }}
        sx={{
          flex: 1,
        }}
      />

      <TextField
        type="number"
        label="Children"
        size="small"
        defaultValue={0}
        inputProps={{
          min: 0,
        }}
        sx={{
          flex: 1,
        }}
      />

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
  );
}

export default SearchForm;
