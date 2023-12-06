export default function () {
    if (process.env.NODE_ENV === "production") {
        console.warn = function () {};
    }
}