import React from 'react';
import { Container } from '../components';

export default function Footer() {
  return (
    <div className="mt-10 py-1" style="background: var(--tertiary-color)">
      <Container>
        <div className="flex justify-between flex-col md:flex-row text-center md:text-left">
          <p className="text-sm text-primary">
            © {new Date().getFullYear()} saifullah.com.bd
          </p>
          <p className="text-sm text-primary">
            Designed and Developed by MonKef.com
          </p>
        </div>
      </Container>
    </div>
  );
}
