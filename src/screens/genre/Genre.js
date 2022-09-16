import * as React from 'react';
import genres from '../../assets/genre'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react'

function Genre() {
    const [genre, setGenre] = useState([]);

    const handleChange = (e) => {
        const {
            target: { value },
        } = e;
        setGenre(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div>

            <FormControl sx={{ minWidth: 240, maxWidth: 240 }} margin='dense'>
                <InputLabel id="demo-multiple-checkbox-label" sx={{marginLeft: -1.75}}>Genre</InputLabel>
                <Select margin='dense'
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={genre}
                    onChange={handleChange}
                    renderValue={(selected) => selected.join(', ')}
                    variant='standard'
                >
                    {genres.map((gname) => (
                        <MenuItem key={gname.id} value={gname.name}>
                            <Checkbox checked={genre.indexOf(gname.name) > -1} />
                            <ListItemText primary={gname.name} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}

export default Genre