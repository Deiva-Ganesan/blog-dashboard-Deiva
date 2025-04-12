import { useGetPostsQuery } from '../services/postsApi';
import { Container, Typography, CircularProgress, Alert, Button } from '@mui/material';
import PostCard from '../components/PostCard';
import Link from 'next/link';

export default function Home() {
  const { data: posts, error, isLoading } = useGetPostsQuery();

  return (
    <Container>
      <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>Blog Dashboard</Typography>
      <Link href="/new" passHref><Button variant="contained" sx={{ my: 2 }}>➕ Add New Post</Button></Link>

      {isLoading && <CircularProgress />}
      {error && <Alert severity="error">Failed to load posts.</Alert>}

      {posts?.map((post) => <PostCard key={post.id} post={post} />)}
    </Container>
  );
}