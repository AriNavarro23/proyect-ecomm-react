import React from 'react'
import { Link } from 'react-router-dom'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Item.css'

const Item = ({ product }) => {

    return (

        <Card className='card' sx={{ maxWidth: 345 }}>
            <Link to={`/item/${product.id}`}>
                <CardMedia
                    sx={{ height: 250, 
                        width: 330 }}
                    image={product.img}
                    title="green iguana"
                />
                <CardContent >
                    <Typography>
                        <p>${product.price}</p>
                    </Typography>
                    <Typography fontSize={14} gutterBottom variant="h5" component="div">
                        <p>{product.name}</p>
                    </Typography>
                </CardContent>
                <CardActions sx={{justifyContent:'center'}}>
                    <Link to={`/item/${product.id}`}><Button size="small">Ver detalle</Button></Link>
                </CardActions>
            </Link>
        </Card>

    )
}

export default Item


