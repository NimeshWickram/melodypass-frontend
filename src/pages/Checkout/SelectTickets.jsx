import React, { useState } from 'react';
import { Box, Typography, FormControl, Select, MenuItem, Button, Container } from '@mui/material';

const SelectTickets = () => {
    const [ticketCount, setTicketCount] = useState(1);

    const handleTicketChange = (event) => {
        setTicketCount(event.target.value);
    };

    const handleContinue = () => {
        // Add logic to proceed to next step
        console.log(`Selected ${ticketCount} tickets`);
    };

    return (
        <Container maxWidth="sm">
            <Box sx={{ py: 4 }}>
                <Typography variant="h4" gutterBottom>
                    Select Tickets
                </Typography>
                
                <Box sx={{ my: 4 }}>
                    <Typography variant="body1" gutterBottom>
                        How many tickets would you like?
                    </Typography>
                    
                    <FormControl fullWidth sx={{ my: 2 }}>
                        <Select
                            value={ticketCount}
                            onChange={handleTicketChange}
                            displayEmpty
                        >
                            {[1, 2, 3, 4, 5, 6].map((number) => (
                                <MenuItem key={number} value={number}>
                                    {number} {number === 1 ? 'Ticket' : 'Tickets'}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        onClick={handleContinue}
                    >
                        Continue
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default SelectTickets;