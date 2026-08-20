"use client";

const Y = "#9A7B2F";
const R = "#6E2A32";
const I = "#5C738C";
const B = "#16325C";
const S = "#2E3D52";
const D = "#0E1C38";

const PALETTE = [Y, R, I, B, S, D];

const faces = {
  front: [Y, R, I, B, S, Y, D, I, R],
  back: [S, Y, D, R, I, B, Y, R, S],
  left: [I, B, Y, D, R, S, Y, I, B],
  right: [R, S, B, I, Y, D, S, B, R],
  top: [D, I, S, Y, B, R, I, D, Y],
  bottom: [B, D, R, S, Y, I, R, S, D],
};

export default function RubiksCube() {
  return (
    <div className="my-loader" aria-hidden="true">
      <div className="rubiks-cube">
        {Object.entries(faces).map(([face, stickers]) => (
          <div className={`face ${face}`} key={face}>
            {stickers.map((color, index) => (
              <div
                className="cube"
                key={`${face}-${index}`}
                style={{ backgroundColor: color || PALETTE[index % PALETTE.length] }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
