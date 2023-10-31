import { generateIdFromName } from '../stringUtils';

describe('generateIdFromName', () => {
  it('should generate correct ID from the name', () => {
    const name = 'Sample Product Name';
    const expectedId = 'sampleproductname';
    const generatedId = generateIdFromName(name);
    expect(generatedId).toEqual(expectedId);
  });

  it('should generate correct ID from the name with leading and trailing spaces', () => {
    const name = '   Sample Product Name   ';
    const expectedId = 'sampleproductname';
    const generatedId = generateIdFromName(name);
    expect(generatedId).toEqual(expectedId);
  });

  it('should handle special characters in the name', () => {
    const name = 'Product!@#$%^&*()_+-={}[]|\\:;"\'<>,.?/';
    const expectedId = 'product!@#$%^&*()_+-={}[]|\\:;"\'<>,.?/';
    const generatedId = generateIdFromName(name);
    expect(generatedId).toEqual(expectedId);
  });

  it('should handle empty string', () => {
    const name = '';
    const expectedId = '';
    const generatedId = generateIdFromName(name);
    expect(generatedId).toEqual(expectedId);
  });
});
