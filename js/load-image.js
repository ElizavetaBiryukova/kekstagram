const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const uploadInput = document.querySelector('#upload-file');
const previewImage = document.querySelector('.img-upload__preview img');
const previews = document.querySelectorAll('.effects__preview');

uploadInput.addEventListener('change', () => {
  const file = uploadInput.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => {
    return fileName.endsWith(it);
  });

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      previewImage.src = reader.result;

      previews.forEach((filter) => {
        filter.style.backgroundImage = `url(${reader.result})`;
      });
    });

    reader.readAsDataURL(file);
  }
});

