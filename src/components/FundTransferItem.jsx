import React from 'react';
import { Grid,Button } from '@mui/material';

export const FundTransferItem = ({item}) => {
    return (
        <>
<Grid item xs={3}>
<Button variant='contained' fullWidth sx={{backgroundColor:"goldenrod"}}>
{item.label}
</Button>
</Grid>

        </>
            
        
    );
};

export default FundTransferItem;