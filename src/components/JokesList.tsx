import Link from 'next/link';
import React from 'react';
import type { Joke } from '@prisma/client';

interface Props {
  jokes: Pick<Joke, 'content' | 'name' | 'id'>[];
}

export default function JokesList({ jokes }: Props) {
  return (
    <>
      <p className="text-white">Here are a few more jokes to check out:</p>
      <ul>
        {jokes.map(({ id, name }) => {
          return (
            <li key={id}>
              <Link className="text-yellow hover:underline" href={'/jokes/' + id}>
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}