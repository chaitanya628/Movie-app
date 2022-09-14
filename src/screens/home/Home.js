import React, { Component } from 'react'
import Header from '../../common/header/Header'
import './Home.css'

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import moviesData from '../../common/moviesData';




export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className='heading'><span >Upcoming Movies</span></div>
                <div className='movie-card'>
                    <ImageList sx={{
                        gridAutoFlow: "column",
                        gridTemplateColumns: "repeat(auto-fill,minmax(270px,1fr))!important ",
                        gridAutoColumns: "minmax(270px, 1fr)",
                        marginTop: "0"
                    }

                    } rowHeight={250}>

                        {moviesData.map((item) => (
                            <ImageListItem key={item.id} sx={{ display: 'flex', flexDirection: 'row' }}>
                                <img
                                    src={`${item.poster_url}`}
                                    srcSet={`${item.poster_url}`}
                                    alt={item.title}
                                    loading="lazy"

                                />
                                <ImageListItemBar
                                    title={item.title}


                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </div>
                <div className='flex-container'>
                    <div className='left'>
                        <ImageList rowHeight={350} cols = {4} gap = {16}>

                            {moviesData.map((item) => (
                                
                                <ImageListItem key={item.id} sx={{ display: 'flex', flexDirection: 'row' }}>
                                    <img
                                        src={`${item.poster_url}`}
                                        srcSet={`${item.poster_url}`}
                                        alt={item.title}
                                        loading="lazy"
                                        

                                    />
                                    
                                    <ImageListItemBar
                                        title={item.title}
                                        
                                        subtitle={`Release Date: ${new Date(item.release_date).toDateString()}`}

                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </div>
                    <div className='right'>
                        hi
                    </div>
                </div>
            </div>
        )
    }
}
