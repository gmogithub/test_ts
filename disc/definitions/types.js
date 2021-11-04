"use strict";
const img = {
    tagName: "img",
    attributes: {
        alt: "test"
    }
};
const t = new Date();
const ar = ["21d", "dfsdf"];
const ar2 = [4, 5];
const ar3 = [12, "df", 4];
const arFinal = [...ar, ...ar2];
const t2 = 10;
function push(arr, value) {
    return [...arr, value];
}
const newArray = push([1, 2], "3");
