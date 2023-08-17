'use client'

import styles from './page.module.css'
import React, { useState } from 'react';

export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.center}>
        <CreditCardInput />
      </div>

    </main>
  )
}

function CreditCardInput() {
  const [cardRawValue, setCardRawValue] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  function handleCardInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCardRawValue(event.currentTarget.value);
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const response = await fetch('/validation/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ccNumber: cardRawValue
      })
    });

    const result = await response.json()
    setHasSubmitted(true);
    setIsValid(result.valid);
  }

  return (
    <form method='post' onSubmit={handleSubmit}>
      <label>Credit Card Number:
        <input
          value={cardRawValue}
          onChange={handleCardInputChange}
          type='text'
          autoComplete='cc-number'
          inputMode='numeric'
        />
      </label>
      {hasSubmitted && (
        isValid ? (
          <p>Valid</p>
        ) : (
          <p>Not Valid</p>
        )
      )}
      <button type='submit'>Submit</button>
    </form>
  );
}