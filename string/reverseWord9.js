//Reverse words but keep first & last character

function reverseWords(arr) {
  return arr.map((s) =>
    s
      .split(" ")
      .map((w) =>
        w.length <= 2
          ? w
          : w[0] + w.slice(1, -1).split("").reverse().join("") + w[w.length - 1]
      )
      .join(" ")
  );
}

console.log(
  reverseWords(["Hello World", "I love JavaScript", " FAANG Interview "])
);
