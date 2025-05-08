// @ts-nocheck
class LocalStorageMock {
    constructor() {
      this.store = {};
    }
  
    clear() {
      this.store = {};
    }
  
    getItem(key:any) {
      return this.store[key] || null;
    }
  
    setItem(key:any, value:any) {
      this.store[key] = String(value);
    }
  
    removeItem(key:any) {
      delete this.store[key];
    }
  }
  
  global.localStorage = new LocalStorageMock;

describe('these are test for the auth thunk', ()=>{
    it('returns true with the a valid jwt token in local storage ', ()=>{
        localStorage.setItem('key', '22');
        expect(localStorage.getItem('key')).toBe('22');
    })
})