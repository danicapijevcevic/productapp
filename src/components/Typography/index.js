import "./typography.style.scss";
export const SmallText = function ({ children }) {
  return <p className="shop-smallfont">{children}</p>;
};

export const MediumText = function ({ children }) {
  return <p className="shop-mediumfont">{children}</p>;
};

export const LargeText = function ({ children }) {
  return <h3 className="shop-largefont">{children}</h3>;
};

export const ExtraLargeText = function ({ children }) {
  return <h2 className="shop-extraLargefont">{children}</h2>;
};
