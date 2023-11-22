// // SearchResults.js
// import React from 'react';
// import CardComponent from '../card/card'; // Import your CardComponent

// const SearchResults = ({ results }) => {
//   return (
//     <div>
//       {results.map((solarPanel) => (
//         <CardComponent key={solarPanel.id} cardData={solarPanel} />
//       ))}
//     </div>
//   );
// };

// export default SearchResults;

import React from 'react';
import CardComponent from '../card/card';
import { Grid, Typography, useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/system';

const SearchResultsContainer = styled('div')({
  marginTop: theme => theme.spacing(2),
  textAlign: 'center',
});

const SearchResults = ({ results }) => {
    const theme = useTheme();
    const isSmallerScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <SearchResultsContainer style={{marginTop: 50}}>
            <Typography variant={isSmallerScreen ? 'h5' : 'h4'} gutterBottom style={{ textAlign: 'center', fontWeight: 'bold' }}>
            Search Results ({results.length} {results.length === 1 ? 'result' : 'results'})
            </Typography>
            <Grid container spacing={2}>
            {results.map((solarPanel) => (
                <Grid item key={solarPanel.id} xs={12} sm={6} md={4} lg={3}>
                <CardComponent cardData={solarPanel} />
                </Grid>
            ))}
            </Grid>
            <Typography variant={isSmallerScreen ? 'h5' : 'h4'} gutterBottom style={{ textAlign: 'center', fontWeight: 'bold' }}>
            End of Search Results
            {/* End of Search Results ({results.length} {results.length === 1 ? 'result' : 'results'}) */}
            </Typography>
        </SearchResultsContainer>
    );
};

export default SearchResults;
