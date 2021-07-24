export const svgToDataUrl = (svg, canvas, format = 'image/png') => {
  const context = canvas.getContext('2d');
  const blob = new Blob([svg], {type: 'image/svg+xml'});
  const url = URL.createObjectURL(blob);

  return new Promise((resolve, reject) => {
    const image = new Image();

    image.onload = function() {
      context.drawImage(image, 0, 0);
      URL.revokeObjectURL(url);
      resolve(canvas.toDataURL(format));
    }

    image.src = url;
  });
}
