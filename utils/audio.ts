
export const base64ToUint8Array = (base64: string): Uint8Array => {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
};

export const pcmToAudioBuffer = (
  data: Uint8Array,
  audioContext: AudioContext,
  sampleRate: number = 24000 // Gemini TTS standard sample rate
): AudioBuffer => {
  // Convert 16-bit PCM to Float32
  const pcm16 = new Int16Array(data.buffer);
  const float32 = new Float32Array(pcm16.length);
  
  for (let i = 0; i < pcm16.length; i++) {
    // Normalize to [-1.0, 1.0]
    float32[i] = pcm16[i] / 32768.0;
  }

  const audioBuffer = audioContext.createBuffer(1, float32.length, sampleRate);
  audioBuffer.getChannelData(0).set(float32);
  
  return audioBuffer;
};
