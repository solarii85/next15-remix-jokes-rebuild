'use client';

import Link from 'next/link';
import React from 'react';
import Button from './Button';
import type { Joke } from '@prisma/client';

interface Props {
  joke: Pick<Joke, 'content' | 'name' | 'id'>;
  deleteJoke: (_id: string) => void;
}

export default function JokeDisplay({ joke, deleteJoke }: Props) {
  return (
    <div>
      <p className="text-white">Heres your hilarious joke:</p>
      <p className="text-white">{joke.content}</p>
      <Link className="text-yellow hover:underline" href={'/jokes/' + joke.id}>
        &quot;{joke.name}&quot; Permalink
      </Link>
      <form
        action={() => {
          deleteJoke(joke.id);
        }}
      >
        <Button type="submit">Delete</Button>
      </form>
    </div>
  );
}