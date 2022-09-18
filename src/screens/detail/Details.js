import React, { Component } from 'react'
import Header from '../../common/header/Header'
import Typography from '@mui/material/Typography';
import '../detail/Details.css'
import moviesData from '../../common/moviesData'

export default class Details extends Component {
  render() {
    return (
        <div>
            <Header />
            <Typography className='back-to-home' component={'div'}>
                &lt; Back to Home
            </Typography>
            <div className='details-container'>
                <div className='left-container'>
                    <img
                        src={moviesData[0].poster_url}/>
                </div>
                <div className='middle-container'></div>
                <div className='right-container'></div>
            </div>
      </div>
    )
  }
}
