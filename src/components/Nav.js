import React from 'react';
import { Link } from 'gatsby';
import { DownArrowSmall } from '../icons';

export default function Nav() {
  return (
    <div className="flex">
      <div className="none md:block">
        <Link className="font-semibold text-primary py-2 px-3" to="/">
          Home
        </Link>
        <Link className="font-semibold text-primary py-2 px-3" to="/">
          Contact Us
        </Link>
      </div>

      <button className="btn-small">
        EN <DownArrowSmall ml={2} />
      </button>
    </div>
  );
}
