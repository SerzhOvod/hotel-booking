import { useMemo, useState } from 'react';

import {
  Box,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from '@mui/material';

import { useSelector } from 'react-redux';

import HotelCard from '../../components/HotelCard/HotelCard';

function Hotels() {
  const hotels = useSelector(state => state.hotels.items);
  const search = useSelector(state => state.hotels.search);
  const loading = useSelector(state => state.hotels.loading);
  const error = useSelector(state => state.hotels.error);

  const [searchText, setSearchText] = useState('');
  const [minRating, setMinRating] = useState('');
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [sortBy, setSortBy] = useState('');

  const getPrice = hotel =>
    Number(
      hotel.price ?? hotel.price_per_night ?? hotel.rate ?? hotel.lowest_price,
    );

  const amenities = useMemo(() => {
    const allAmenities = hotels.flatMap(hotel =>
      Array.isArray(hotel.amenities) ? hotel.amenities : [],
    );

    return [...new Set(allAmenities)];
  }, [hotels]);

  const handleAmenityChange = amenity => {
    setSelectedAmenities(prev =>
      prev.includes(amenity)
        ? prev.filter(item => item !== amenity)
        : [...prev, amenity],
    );
  };

  const filteredHotels = useMemo(() => {
    let result = hotels.filter(hotel => {
      const query = searchText.toLowerCase().trim();

      const matchesSearch =
        !query ||
        hotel.name?.toLowerCase().includes(query) ||
        hotel.city?.toLowerCase().includes(query);

      const matchesRating =
        minRating === '' || Number(hotel.hotel_rating) >= Number(minRating);

      const hotelAmenities = Array.isArray(hotel.amenities)
        ? hotel.amenities
        : [];

      const matchesAmenities = selectedAmenities.every(amenity =>
        hotelAmenities.includes(amenity),
      );

      return matchesSearch && matchesRating && matchesAmenities;
    });

    if (sortBy === 'rating') {
      result.sort(
        (a, b) => Number(b.hotel_rating || 0) - Number(a.hotel_rating || 0),
      );
    }

    if (sortBy === 'price-asc') {
      result.sort((a, b) => getPrice(a) - getPrice(b));
    }

    if (sortBy === 'price-desc') {
      result.sort((a, b) => getPrice(b) - getPrice(a));
    }

    return result;
  }, [hotels, searchText, minRating, selectedAmenities, sortBy]);

  const resetFilters = () => {
    setSearchText('');
    setMinRating('');
    setSelectedAmenities([]);
    setSortBy('');
  };

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
      <Box sx={{ mb: 4 }}>
        <Typography component="h1" variant="h4" sx={{ fontWeight: 600, mb: 1 }}>
          Hotels
        </Typography>

        {search?.destination && (
          <Typography variant="body1" color="text.secondary">
            Search results for <strong>{search.destination.label}</strong>
          </Typography>
        )}
      </Box>

      {/* Filters */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
          gap: 2,
          mb: 3,
        }}
      >
        <TextField
          label="Search hotel or city"
          value={searchText}
          onChange={event => setSearchText(event.target.value)}
          fullWidth
        />

        <FormControl fullWidth>
          <InputLabel>Minimum rating</InputLabel>
          <Select
            value={minRating}
            label="Minimum rating"
            onChange={event => setMinRating(event.target.value)}
            inputProps={{
              'aria-label': 'Minimum rating',
            }}
          >
            <MenuItem value="">Any rating</MenuItem>
            <MenuItem value={3}>3+ stars</MenuItem>
            <MenuItem value={4}>4+ stars</MenuItem>
            <MenuItem value={5}>5 stars</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel>Sort by</InputLabel>
          <Select
            value={sortBy}
            label="Sort by"
            onChange={event => setSortBy(event.target.value)}
            inputProps={{
              'aria-label': 'Sort by',
            }}
          >
            <MenuItem value="">Default</MenuItem>
            <MenuItem value="rating">Rating: high to low</MenuItem>
            <MenuItem value="price-asc">Price: low to high</MenuItem>
            <MenuItem value="price-desc">Price: high to low</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Amenities */}
      {amenities.length > 0 && (
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Amenities
          </Typography>

          <FormGroup row>
            {amenities.map(amenity => (
              <FormControlLabel
                key={amenity}
                control={
                  <Checkbox
                    checked={selectedAmenities.includes(amenity)}
                    onChange={() => handleAmenityChange(amenity)}
                  />
                }
                label={amenity}
              />
            ))}
          </FormGroup>
        </Box>
      )}

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 2,
          mb: 3,
        }}
      >
        <Typography color="text.secondary">
          Found hotels: {filteredHotels.length}
        </Typography>

        <Button onClick={resetFilters}>Reset filters</Button>
      </Box>

      {/* Loading and errors */}
      {loading && <Typography>Loading hotels...</Typography>}

      {error && <Typography color="error">{error}</Typography>}

      {!loading && !error && filteredHotels.length === 0 && (
        <Typography color="text.secondary">No hotels found.</Typography>
      )}

      {/* Hotel cards */}
      {!loading && !error && filteredHotels.length > 0 && (
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
            gap: 3,
          }}
        >
          {filteredHotels.map(hotel => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </Box>
      )}
    </Container>
  );
}

export default Hotels;
