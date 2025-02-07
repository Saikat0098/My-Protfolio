import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal footer-center  to-black text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by Atikur Rahman
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
