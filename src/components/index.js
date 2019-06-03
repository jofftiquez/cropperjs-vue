

export default (Vue, Cropper) => {
  Vue.component('cropperjs-vue', {
    template: `
      <img id="image" :height="height" :src="img" :style="{'max-height': maxHeight}"/>
    `,
    props: {
      height: {
        type: Number,
        default: 450
      },
      maxHeight: Number,
      viewMode: {
        type: Number,
        default: 1
      },
      aspectRatio: {
        type: Number,
        default: 1
      }
    },
    data() {
      return {
        cropper: null,
        result: null,
        img: ''
      }
    },
    methods: {
      bind(img) {
        this._initCropper(img);
      },
      crop(e) {
        this.$emit('crop', this.cropper.getCroppedCanvas().toDataURL('image/jpeg'));
        this.cropper.destroy();
      },
      rotate(degree) {
        this.cropper.rotate(degree);
      },
      reset() {
        this.cropper.reset();
      },
      clear() {
        this.cropper.clear();
      },
      destroy() {
        this.cropper.destroy();
      },
      _initCropper(img) {
        const image = document.getElementById('image');
        image.src = img;
        this.cropper = new Cropper(image, {
          viewMode: this.viewMode,
          aspectRatio: this.aspectRatio
        });
      },
    }
  })
}