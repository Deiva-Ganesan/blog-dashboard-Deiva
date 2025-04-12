import { useRouter } from 'next/router';
import { useGetPostByIdQuery } from '../../services/postsApi';
import { Container, Typography, CircularProgress, Alert, Button } from '@mui/material';
import Link from 'next/link';

export default function PostDetail() {
  const router = useRouter();
  const { id } = router.query;
  const { data: post, error, isLoading } = useGetPostByIdQuery(id as string, { skip: !id });

  return (
    <Container sx={{ mt: 4 }}>
      <Link href="/" passHref><Button variant="outlined" sx={{ mb: 2 }}>← Back to Posts</Button></Link>
      {isLoading && <CircularProgress />}
      {error && <Alert severity="error">Failed to load post.</Alert>}
      {post && (
        <>
          <Typography variant="h4" gutterBottom>{post.title}</Typography>
          <Typography variant="subtitle2" gutterBottom>By {post.author}</Typography>
          <Typography variant="body1">{post.body}</Typography>
        </>
      )}
    </Container>
  );
}