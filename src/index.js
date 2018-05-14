import component from './components';

const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://cdnjs.cloudflare.com/ajax/libs/cropperjs/1.3.5/cropper.min.css';
document.getElementsByTagName('head')[0].appendChild(link);

const CropperJsVue = {
  install(Vue, Cropper) {
    component(Vue, Cropper);
  }
}

export default CropperJsVue;
