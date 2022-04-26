import React from "react";

const medalMapper = (value, emoji) => {
  const numericValue = parseInt(value);
  if (numericValue) {
    return (
      <span>{new Array(numericValue).fill(`${emoji}`).join(" ").trim()}</span>
    );
  } else {
    return (
      <div
        style={{
          backgroundColor: "salmon",
          borderRadius: ".3rem",
          padding: ".1rem",
        }}
      >
        <span style={{ color: "white" }}>{emoji} is not earned this year!</span>
      </div>
    );
  }
};

export const GoldMedalCellRenderer = (props) => medalMapper(props.value, "🥇");

export const SilverMedalCellRenderer = (props) =>
  medalMapper(props.value, "🥈");

export const BronzeMedalCellRenderer = (props) =>
  medalMapper(props.value, "🥉");
