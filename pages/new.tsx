import { Container, Typography, Button } from '@mui/material';
import Link from 'next/link';
import PostForm from '../components/PostForm';

export default function NewPostPage() {
  return (
    <Container sx={{ mt: 4 }}>
      <Link href="/" passHref><Button variant="outlined" sx={{ mb: 2 }}>← Back to Posts</Button></Link>
      <Typography variant="h4" gutterBottom>Create a New Blog Post</Typography>
      <PostForm />
    </Container>
  );
}