import * as puppeteer from 'puppeteer';

declare module 'puppeteer' {
  export interface Page {
    waitForX(path: string): Promise<void>;
  }
}
