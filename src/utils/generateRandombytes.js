const { randomFill } = require('crypto');
const urlAlphabet =
  'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict';
// `crypto.randomFill()` is a little faster than `crypto.randomBytes()`,
// because it is possible to use in combination with `Buffer.allocUnsafe()`.
const random = bytes =>
    new Promise((resolve, reject) => {
    // `Buffer.allocUnsafe()` is faster because it doesn’t flush the memory.
    // Memory flushing is unnecessary since the buffer allocation itself resets
    // the memory with the new bytes.
        randomFill(Buffer.allocUnsafe(bytes), (err, buf) => {
            if (err) {
                reject(err);
            } else {
                resolve(buf);
            }
        });
    });

const generateShortUrl = async (size = 11) => {
    const bytes = await random(size);
    let id = '';
    while (size--) {
        id += urlAlphabet[bytes[size] & 63];
    }
    return id;
};

module.exports = {
    generateShortUrl
};