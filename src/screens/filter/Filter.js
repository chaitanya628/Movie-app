import React, { Component } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { createTheme } from '@mui/material/styles'
import Genre from '../genre/Genre';
import Artist from '../artist/Artist';

const theme = createTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
});
export default class Filter extends Component {

    render() {
       const appliedFilterChange = (e) => {
            e.preventDefault()
            alert('handle clicked');
        }
            
        
        return (
            <div>
                <Card sx={{ marginTop: 2 }}>
                    <CardContent >
                        <Typography sx={{ minWidth: 240, maxWidth: 240, textTransform: 'uppercase', fontSize: '14px' }} color={theme.palette.primary.light} margin={theme.spacing(1)} component={'div'} >
                            Find movies by:
                        </Typography>
                        <Typography margin={theme.spacing(1)} component={'div'}>
                            <TextField sx={{ minWidth: 240, maxWidth: 240 }}
                                id="movie-name"
                                label="Movie Name"
                                type="text"
                                variant='standard'

                            />
                        </Typography>
                        <Typography margin={theme.spacing(1)} component={'div'}>
                            <Genre />
                        </Typography>
                        <Typography margin={theme.spacing(1)} component={'div'}>
                            <Artist />
                        </Typography>
                        <Typography margin={theme.spacing(1)} component={'div'}>
                            <TextField InputLabelProps={{ shrink: true }}
                                sx={{ minWidth: 240, maxWidth: 240 }}
                                margin='normal'
                                id="release-start"
                                label="Release Date Start"
                                type="date"
                                variant='standard' />

                        </Typography>

                        <Typography margin={theme.spacing(1)} component={'div'}>
                            <TextField InputLabelProps={{ shrink: true }}
                                sx={{ minWidth: 240, maxWidth: 240 }}
                                margin='dense'
                                id="release-end"
                                label="Release Date End"
                                type="date"
                                variant='standard' />
                        </Typography>


                    </CardContent>
                    <CardActions sx={{ padding: '16px' }}  >
                        <Button
                            variant="contained"
                            color='primary'
                            sx={{ minWidth: 240, maxWidth: 240 }}
                            margin={theme.spacing(2)}
                            onClick={appliedFilterChange}>APPLY</Button>
                    </CardActions>
                </Card>
            </div>
        )
    }
}
