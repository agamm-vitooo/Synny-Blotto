import React from 'react';

export const Footer = () => {
  return (
    <div>
      <footer className="footer flex flex-wrap justify-between p-10 text-black">
        <nav>
          <h6 className="footer-title">Product</h6> 
          <a className="link link-hover">Overview</a>
          <a className="link link-hover">Pricing</a>
          <a className="link link-hover">Customer stories</a>
        </nav> 
        <nav>
          <h6 className="footer-title">Resources</h6> 
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">Guides & tutorials</a>
          <a className="link link-hover">Help center</a>
        </nav> 
        <nav>
          <h6 className="footer-title">Company</h6> 
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Media kit</a>
        </nav>
      </footer>
      <footer className="footer text-black px-10 py-4 border-b border-base-300 flex flex-wrap justify-around">
        <aside className="items-center grid-flow-col gap-10">
          <button>
            Terms & privacy
          </button>
          <button>
            Security
          </button>
          <button>
            Status
          </button>
          <button>
            ©2021 Whitepace LLC.
          </button>
        </aside> 
      </footer>
    </div>
  );
};
