declare global {
  interface Window {
    VANTA: {
      CLOUDS: (options: any) => any;
      FOG: (options: any) => any;
      WAVES: (options: any) => any;
      BIRDS: (options: any) => any;
    };
    THREE: any;
  }
}

export {};
