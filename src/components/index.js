import FlipNumber from './FlipNumber';
export default FlipNumber;
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('flip-number', FlipNumber);
}
