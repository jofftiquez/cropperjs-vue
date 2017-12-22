

export default (Vue, Cropper) => {
  Vue.component('cropperjs-vue', {
    template: `
      <div>
        <img id="image" :src="img"/>
      </div>
    `,
    props: {
      img: '',
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
        test: 'Hello World',
        cropper: null,
        result: null
      }
    },
    mounted() {
      this._initCropper();
    },
    methods: {
      crop(e) {
        this.$emit('crop', this.cropper.getCroppedCanvas().toDataURL('image/jpeg'));
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
      _initCropper() {
        const image = document.getElementById('image');
        console.log(image)
        this.cropper = new Cropper(image, {
          viewMode: this.viewMode,
          aspectRatio: this.aspectRatio
        });
      },
    }
  })
}