import React from 'react'

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react'
import artists from '../../assets/artists';

function Artist() {
    const [artist, setArtist] = useState([]);

    const handleChange = (e) => {
        const {
            target: { value },
        } = e;
        setArtist(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div>

            <FormControl sx={{ minWidth: 240, maxWidth: 240 }} margin='dense' fullWidth>
                <InputLabel id="demo-multiple-checkbox-label" sx={{ marginLeft: -1.75 }}>Artist</InputLabel>
                <Select margin='dense'
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={artist}
                    onChange={handleChange}
                    renderValue={(selected) => selected.join(', ')}
                    variant='standard'
                >
                    {artists.map((art) => (
                        <MenuItem key={art.id} value={art.first_name}>
                            <Checkbox checked={artist.indexOf(art.first_name) > -1} />
                            <ListItemText primary={art.first_name + ' '+ art.last_name} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}

export default Artist