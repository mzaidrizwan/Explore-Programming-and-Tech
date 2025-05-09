import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CommentIcon from '@mui/icons-material/Comment';

export default function RecipeReviewCard({ post }) {
    return (
        <Card sx={{ maxWidth: 345, m: 2 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: post.avatarColor }} aria-label="recipe">
                        {post.avatarText}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={post.name}
                subheader={post.date}
            />
            <CardMedia
                component="img"
                height="194"
                image={post.image}
                alt={post.altText}
            />
            <CardContent>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {post.description}
                </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: 'space-evenly' }} disableSpacing>
                <IconButton aria-label="Like">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="Comment">
                    <CommentIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}