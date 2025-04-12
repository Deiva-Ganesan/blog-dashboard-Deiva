import { Card, CardContent, Typography, Button } from '@mui/material';
import Link from 'next/link';
import { Post } from '../types/Post';

type Props = { post: Post };

export default function PostCard({ post }: Props) {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">{post.title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {post.body.slice(0, 100)}...
        </Typography>
        <Link href={`/posts/${post.id}`} passHref>
          <Button size="small">Read More</Button>
        </Link>
      </CardContent>
    </Card>
  );
}