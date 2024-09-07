// src/utils.test.js
import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('Utility Functions', () => {
  test('getFullYear should return the current year', () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toBe(currentYear);
  });

  describe('getFooterCopy', () => {
    test('should return "Holberton School" when true is passed', () => {
      expect(getFooterCopy(true)).toBe('Holberton School');
    });

    test('should return "Holberton School main dashboard" when false is passed', () => {
      expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
    });
  });

  describe('getLatestNotification', () => {
    test('should return "<strong>Urgent requirement</strong> - complete by EOD"', () => {
      const expectedString = '<strong>Urgent requirement</strong> - complete by EOD';
      expect(getLatestNotification()).toBe(expectedString);
    });
  });
});
