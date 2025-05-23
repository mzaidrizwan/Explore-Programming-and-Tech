import RecipeReviewCard from './assets/Post'; 
import { Container, Box } from '@mui/material'; 
import { red } from '@mui/material/colors'; 

export default function App() {
  const posts = [
    {
      id: 1,
      name: "Zaid Rizwan",
      date: "March 14, 2024",
      description: "It's My First React Project with Materiel UI",
      avatarText: "S",
      avatarColor: red[500], 
      image: "https://powersportsbusiness.com/wp-content/uploads/2019/11/honda-cbr1000rr.jpg",
      altText: "Bike img"
    },
    {
      id: 2,
      name: "Zaid Rizwan",
      date: "March 14, 2024",
      description: "It's My First React Project with Materiel UI",
      avatarText: "S",
      avatarColor: red[500], 
      image: "https://powersportsbusiness.com/wp-content/uploads/2019/11/honda-cbr1000rr.jpg",
      altText: "Bike img"
    },
    {
      id: 3,
      name: "Zaid Rizwan",
      date: "March 14, 2024",
      description: "It's My First React Project with Materiel UI",
      avatarText: "S",
      avatarColor: red[500], 
      image: "https://powersportsbusiness.com/wp-content/uploads/2019/11/honda-cbr1000rr.jpg",
      altText: "Bike img"
    }
    
  ];

  return (
    <Container maxWidth="lg">
  <Box sx={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',  
  }}>
    {posts.map(post => (
      <RecipeReviewCard
        key={post.id}
        post={post}
        sx={{ width: '100%', maxWidth: 345 }} 
      />
    ))}
  </Box>
</Container>
  );
}