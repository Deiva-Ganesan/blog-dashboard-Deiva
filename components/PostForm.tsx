import { useState } from 'react';
import { TextField, Button, Box, Typography, Alert, CircularProgress } from '@mui/material';
import { useAddPostMutation } from '../services/postsApi';
import { Post } from '../types/Post';
import { useRouter } from 'next/router';

export default function PostForm() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const [addPost, { isLoading, isError }] = useAddPostMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(false);

    try {
      await addPost({ title, body, author }).unwrap();
      setTitle('');
      setBody('');
      setAuthor('');
      setSuccess(true);
      router.push('/');
    } catch {
      // error handled by isError
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}>
      <Typography variant="h5" gutterBottom>Add New Post</Typography>
      {success && <Alert severity="success">Post added successfully!</Alert>}
      {isError && <Alert severity="error">Failed to add post.</Alert>}

      <TextField fullWidth label="Title" value={title} onChange={(e) => setTitle(e.target.value)} sx={{ my: 2 }} required />
      <TextField fullWidth label="Author" value={author} onChange={(e) => setAuthor(e.target.value)} sx={{ my: 2 }} required />
      <TextField fullWidth label="Body" value={body} onChange={(e) => setBody(e.target.value)} multiline rows={6} sx={{ my: 2 }} required />

      <Button type="submit" variant="contained" disabled={isLoading}>
        {isLoading ? <CircularProgress size={24} /> : 'Submit'}
      </Button>
    </Box>
  )
}