import { AES, enc } from 'crypto-js';

const strToUint8Array = str => {
  return new TextEncoder().encode(str);
};

// const uint8ArrayToStr = (uint8Array) => {
//   return new TextDecoder().decode(uint8Array);
// };

export async function encryptData(key, data) {
  if (!key) {
    console.error('Encryption key not available');
    return;
  }

  const encodedData = strToUint8Array(data);
  const iv = window.crypto.getRandomValues(new Uint8Array(12)); // Initialization vector

  try {
    const encryptedBuffer = await window.crypto.subtle.encrypt(
      {
        name: 'AES-GCM',
        iv: iv,
      },
      key,
      encodedData
    );

    const encryptedArray = new Uint8Array(encryptedBuffer);
    const encryptedBase64 = btoa(String.fromCharCode(...encryptedArray));
    const ivBase64 = btoa(String.fromCharCode(...iv));

    const encryptedText = `${encryptedBase64}:${ivBase64}`;
    return encryptedText;
  } catch (error) {
    console.error('Encryption failed:', error);
  }
}

export function encryptText(secret, message) {
  const cipherText = AES.encrypt(message, secret);
  return cipherText;
}

export function decryptText(secret, cipher) {
  const bytes = AES.decrypt(cipher, secret);
  const decryptedText = bytes.toString(enc.Utf8);
  return decryptedText;
}
