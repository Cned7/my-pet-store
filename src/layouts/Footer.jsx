function Footer() {
  return (
    <div
      className="flex gap-7 bg-green-800 text-white bottom-0 fixed items-center"
      style={{ width: "100%", height: 70 }}
    >
      <span className="mx-auto flex gap-10 font-semibold">
        <a href="" className="hover:text-green-400">
          Policy
        </a>
        <a href="" className="hover:text-green-400">
          Cookies
        </a>
        <a href="" className="hover:text-green-400">
          Terms
        </a>
        <a href="" className="hover:text-green-400">
          News
        </a>
      </span>
    </div>
  );
}

export default Footer;
